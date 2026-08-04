import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-hero-particles-visual',
  template: `<canvas #canvas class="hero-canvas" aria-hidden="true"></canvas>`,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      touch-action: none;
    }
    .hero-canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroParticlesVisual implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private startTime = 0;

  // Particle Mesh System
  private particleGeo: THREE.BufferGeometry | null = null;
  private particleMat: THREE.PointsMaterial | null = null;
  private particles: THREE.Points | null = null;
  private basePositions: Float32Array | null = null;
  private currentPositions: Float32Array | null = null;
  private velocities: Float32Array | null = null;
  private count = 2400;

  // Drag & Physics State
  private isDragging = false;
  private previousPointer = { x: 0, y: 0 };
  private pointerPos = new THREE.Vector2(9999, 9999);
  private pointerVel = new THREE.Vector2(0, 0);
  private rotationTarget = { x: 0, y: 0 };
  private rotationCurrent = { x: 0, y: 0 };

  private disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return; // Skip WebGL 3D visual completely on mobile & tablet for clean performance
    }

    const reducedMotion = this.prefersReducedMotion();

    this.zone.runOutsideAngular(() => {
      try {
        this.initScene();
        if (!this.renderer) return;

        this.createParticleLattice();
        this.setupResizeObserver();

        if (reducedMotion) {
          this.renderFrame();
        } else {
          this.setupPointerEvents();
          this.animate();
        }
      } catch {
        // WebGL unavailable: silent fallback for tests
      }
    });
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.resizeObserver?.disconnect();
    this.removePointerEvents();

    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];

    this.renderer?.dispose();
    this.scene?.clear();
    this.renderer = null;
    this.scene = null;
    this.camera = null;
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth || 500;
    const height = canvas.clientHeight || 450;

    this.startTime = performance.now();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 10);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);
  }

  private createParticleLattice(): void {
    if (!this.scene) return;

    this.basePositions = new Float32Array(this.count * 3);
    this.currentPositions = new Float32Array(this.count * 3);
    this.velocities = new Float32Array(this.count * 3);

    const colors = new Float32Array(this.count * 3);
    const accentColor = new THREE.Color(0x0066ff);
    const secondaryColor = new THREE.Color(0xa1a1aa);

    // Generate a Mobius-like parametric wave sphere/torus lattice
    const side = Math.floor(Math.sqrt(this.count));
    let idx = 0;

    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        if (idx >= this.count) break;

        const u = (i / side) * Math.PI * 2;
        const v = (j / side) * Math.PI - Math.PI / 2;

        const r = 2.8 + Math.sin(u * 3 + v * 2) * 0.4;
        const x = r * Math.cos(v) * Math.cos(u);
        const y = r * Math.cos(v) * Math.sin(u);
        const z = r * Math.sin(v) * 0.7;

        this.basePositions[idx * 3] = x;
        this.basePositions[idx * 3 + 1] = y;
        this.basePositions[idx * 3 + 2] = z;

        this.currentPositions[idx * 3] = x;
        this.currentPositions[idx * 3 + 1] = y;
        this.currentPositions[idx * 3 + 2] = z;

        // Color interpolation based on height
        const mixRatio = (y + 2.5) / 5.0;
        const c = secondaryColor.clone().lerp(accentColor, Math.max(0, Math.min(1, mixRatio)));

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        idx++;
      }
    }

    this.particleGeo = new THREE.BufferGeometry();
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(this.currentPositions, 3));
    this.particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.4, 'rgba(0, 102, 255, 0.8)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    this.disposables.push(texture);

    this.particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.disposables.push(this.particleGeo, this.particleMat);

    this.particles = new THREE.Points(this.particleGeo, this.particleMat);
    this.particles.position.set(0, 0.85, 0);
    this.scene.add(this.particles);
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (!this.scene || !this.camera || !this.renderer || !this.particles) return;

    const elapsed = (performance.now() - this.startTime) / 1000;

    // Smooth rotation lerp based on drag & auto-drift
    if (!this.isDragging) {
      this.rotationTarget.y += 0.003;
      this.rotationTarget.x = Math.sin(elapsed * 0.5) * 0.15;
    }

    this.rotationCurrent.x += (this.rotationTarget.x - this.rotationCurrent.x) * 0.05;
    this.rotationCurrent.y += (this.rotationTarget.y - this.rotationCurrent.y) * 0.05;

    this.particles.rotation.x = this.rotationCurrent.x;
    this.particles.rotation.y = this.rotationCurrent.y;

    // Update particle spring physics
    this.updateParticlePhysics(elapsed);

    this.renderFrame();
  }

  private updateParticlePhysics(elapsed: number): void {
    if (!this.basePositions || !this.currentPositions || !this.velocities || !this.particleGeo) return;

    const posAttr = this.particleGeo.attributes['position'] as THREE.BufferAttribute;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.pointerPos, this.camera!);

    const ray = raycaster.ray;
    const damp = 0.92;
    const spring = 0.04;

    for (let i = 0; i < this.count; i++) {
      const idx = i * 3;

      const bx = this.basePositions[idx];
      const by = this.basePositions[idx + 1];
      const bz = this.basePositions[idx + 2];

      const isDynamicParticle = i % 2 === 0;
      const waveMult = isDynamicParticle ? 0.16 : 0.08;
      const freq = isDynamicParticle ? 2.6 : 1.8;
      const wave = Math.sin(elapsed * freq + bx * 1.8 + by * 1.8) * waveMult;
      const targetX = bx + wave * (bx / 2.8);
      const targetY = by + wave * (by / 2.8);
      const targetZ = bz + wave;

      // Current position
      let cx = this.currentPositions[idx];
      let cy = this.currentPositions[idx + 1];
      let cz = this.currentPositions[idx + 2];

      // Mouse repulsion / drag displacement in 3D world space
      const particleVec = new THREE.Vector3(cx, cy, cz).applyMatrix4(this.particles!.matrixWorld);
      const distToRay = ray.distanceToPoint(particleVec);

      if (distToRay < 2.0) {
        const force = (1 - distToRay / 2.0) * (this.isDragging ? 0.35 : 0.15);
        const dir = particleVec.clone().sub(ray.closestPointToPoint(particleVec, new THREE.Vector3())).normalize();

        this.velocities[idx] += dir.x * force + this.pointerVel.x * force * 0.1;
        this.velocities[idx + 1] += dir.y * force + this.pointerVel.y * force * 0.1;
        this.velocities[idx + 2] += dir.z * force;
      }

      // Spring force towards target base position
      const fx = (targetX - cx) * spring;
      const fy = (targetY - cy) * spring;
      const fz = (targetZ - cz) * spring;

      this.velocities[idx] = (this.velocities[idx] + fx) * damp;
      this.velocities[idx + 1] = (this.velocities[idx + 1] + fy) * damp;
      this.velocities[idx + 2] = (this.velocities[idx + 2] + fz) * damp;

      this.currentPositions[idx] += this.velocities[idx];
      this.currentPositions[idx + 1] += this.velocities[idx + 1];
      this.currentPositions[idx + 2] += this.velocities[idx + 2];
    }

    posAttr.needsUpdate = true;
    this.pointerVel.set(0, 0);
  }

  private renderFrame(): void {
    if (this.scene && this.camera && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  // Pointer & Drag Handling
  private readonly onPointerDown = (e: PointerEvent): void => {
    this.isDragging = true;
    this.previousPointer = { x: e.clientX, y: e.clientY };
    this.updatePointerCoords(e);
  };

  private readonly onPointerMove = (e: PointerEvent): void => {
    if (this.isDragging) {
      const dx = e.clientX - this.previousPointer.x;
      const dy = e.clientY - this.previousPointer.y;

      this.rotationTarget.y += dx * 0.008;
      this.rotationTarget.x += dy * 0.008;

      this.pointerVel.set(dx * 0.02, -dy * 0.02);
      this.previousPointer = { x: e.clientX, y: e.clientY };
    }
    this.updatePointerCoords(e);
  };

  private readonly onPointerUp = (): void => {
    this.isDragging = false;
  };

  private readonly onPointerLeave = (): void => {
    this.isDragging = false;
    this.pointerPos.set(9999, 9999);
  };

  private updatePointerCoords(e: PointerEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    this.pointerPos.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointerPos.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private setupPointerEvents(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    canvas.addEventListener('pointerleave', this.onPointerLeave);
  }

  private removePointerEvents(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.removeEventListener('pointerdown', this.onPointerDown);
      canvas.removeEventListener('pointerleave', this.onPointerLeave);
    }
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
  }

  private setupResizeObserver(): void {
    const canvas = this.canvasRef.nativeElement;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0 && this.camera && this.renderer) {
          this.camera.aspect = width / height;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(width, height);
        }
      }
    });
    this.resizeObserver.observe(canvas);
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
