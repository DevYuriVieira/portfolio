import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

const NODE_LABELS = [
  'Software Engineering',
  'Data',
  'Automation',
  'Agents',
  'LLMs',
  'Systems Thinking',
] as const;

interface OrbitalNode {
  meshGroup: THREE.Group;
  nodeMesh: THREE.Mesh;
  shellMesh: THREE.Mesh;
  sprite: THREE.Sprite;
  baseAngle: number;
  orbitSpeed: number;
  orbitRadius: number;
  orbitTilt: number;
  yPhase: number;
  yAmplitude: number;
  ySpeed: number;
}

interface EnergyStreamParticle {
  mesh: THREE.Mesh;
  nodeIndex: number;
  progress: number;
  speed: number;
  direction: number; // 1 outward, -1 inward
}

interface ShockwaveRing {
  mesh: THREE.Mesh;
  scale: number;
  alpha: number;
}

@Component({
  selector: 'app-neural-canvas',
  template: `<canvas #canvas class="neural-canvas" aria-hidden="true"></canvas>`,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      touch-action: none;
    }
    .neural-canvas {
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
export class NeuralCanvas implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Output() nodeSelect = new EventEmitter<string>();

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private startTime = 0;
  private isVisible = true;

  // Interaction State
  private mouse = { x: 0, y: 0 };
  private isDragging = false;
  private dragDistance = 0;
  private previousPointer = { x: 0, y: 0 };
  private userRotation = { x: 0, y: 0 };
  private rotationTarget = { x: 0, y: 0 };
  private rotationCurrent = { x: 0, y: 0 };

  // Camera Zoom State
  private targetZoomZ = 16;
  private readonly minZoomZ = 4.5;
  private readonly maxZoomZ = 28.0;

  // Scene Components
  private mainGroup: THREE.Group | null = null;
  private coreGroup: THREE.Group | null = null;
  private coreMesh: THREE.Mesh | null = null;
  private coreOuterShell: THREE.Mesh | null = null;
  private coreHalo: THREE.Mesh | null = null;
  private coreRings: THREE.Mesh[] = [];
  private coreSprite: THREE.Sprite | null = null;

  private orbitalNodes: OrbitalNode[] = [];
  private coreConnections: THREE.Line[] = [];
  private interConnections: THREE.Line[] = [];
  private energyStreams: EnergyStreamParticle[] = [];
  private shockwaves: ShockwaveRing[] = [];

  private ambientParticles: THREE.Points | null = null;
  private particleVelocities: Float32Array | null = null;

  private disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];

  // Colors
  private readonly ACCENT_PRIMARY = new THREE.Color(0x0066ff);
  private readonly ACCENT_CYAN = new THREE.Color(0x00d8ff);
  private readonly NODE_IDLE = new THREE.Color(0x3a3a45);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const reducedMotion = this.prefersReducedMotion();

    this.zone.runOutsideAngular(() => {
      try {
        this.initScene();
        if (!this.renderer) return;

        this.createQuantumCore();
        this.createHolographicNodes();
        this.createNeuralConnections();
        this.createStreamParticles();
        this.createAmbientParticleVolume();
        this.setupResizeObserver();

        if (reducedMotion) {
          this.updateNodes(0);
          this.updateConnections();
          this.renderFrame();
        } else {
          this.setupPointerEvents();
          this.setupVisibilityObserver();
          this.animate();
        }
      } catch {
        // WebGL unavailable — silent fallback for tests
      }
    });
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    this.removePointerEvents();

    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];

    this.renderer?.dispose();
    this.scene?.clear();
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.mainGroup = null;
    this.orbitalNodes = [];
    this.coreConnections = [];
    this.interConnections = [];
    this.energyStreams = [];
    this.shockwaves = [];
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth || 800;
    const height = canvas.clientHeight || 500;

    this.startTime = performance.now();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 16);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);

    this.mainGroup = new THREE.Group();
    this.mainGroup.position.set(0, 1.65, 0);
    this.scene.add(this.mainGroup);
  }

  // ---------------------------------------------------------------------------
  // Central Quantum Core ("HUMAN DECISION MAKING")
  // ---------------------------------------------------------------------------

  private createQuantumCore(): void {
    if (!this.mainGroup) return;

    this.coreGroup = new THREE.Group();
    this.mainGroup.add(this.coreGroup);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: this.ACCENT_PRIMARY,
      transparent: true,
      opacity: 0.45,
    });
    this.coreMesh = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.coreMesh);
    this.disposables.push(innerGeo, innerMat);

    // Crystalline wireframe outer shell
    const shellGeo = new THREE.IcosahedronGeometry(0.92, 2);
    const shellMat = new THREE.MeshBasicMaterial({
      color: this.ACCENT_CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    this.coreOuterShell = new THREE.Mesh(shellGeo, shellMat);
    this.coreGroup.add(this.coreOuterShell);
    this.disposables.push(shellGeo, shellMat);

    // Volumetric glow atmosphere
    const haloGeo = new THREE.SphereGeometry(1.3, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: this.ACCENT_PRIMARY,
      transparent: true,
      opacity: 0.08,
    });
    this.coreHalo = new THREE.Mesh(haloGeo, haloMat);
    this.coreGroup.add(this.coreHalo);
    this.disposables.push(haloGeo, haloMat);

    // 3 Orthogonal Quantum Energy Rings
    const ringConfigs = [
      { radius: 1.55, thickness: 0.015, color: this.ACCENT_PRIMARY, rot: [Math.PI * 0.4, 0, 0] },
      { radius: 1.85, thickness: 0.012, color: this.ACCENT_CYAN, rot: [0, Math.PI * 0.45, 0.2] },
      { radius: 2.15, thickness: 0.01, color: 0xffffff, rot: [-Math.PI * 0.3, 0.3, Math.PI * 0.5] },
    ];

    ringConfigs.forEach((cfg) => {
      const rGeo = new THREE.TorusGeometry(cfg.radius, cfg.thickness, 16, 100);
      const rMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.22,
      });
      const ring = new THREE.Mesh(rGeo, rMat);
      ring.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      this.coreGroup!.add(ring);
      this.coreRings.push(ring);
      this.disposables.push(rGeo, rMat);
    });

    // Core Label Sprite
    this.coreSprite = this.createLabelSprite('HUMAN DECISION MAKING', true);
    this.coreSprite.position.set(0, -1.45, 0);
    this.coreGroup.add(this.coreSprite);
  }

  // ---------------------------------------------------------------------------
  // Holographic 3D Orbiting Nodes
  // ---------------------------------------------------------------------------

  private createHolographicNodes(): void {
    if (!this.mainGroup) return;

    const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const shellGeo = new THREE.IcosahedronGeometry(0.24, 1);
    this.disposables.push(nodeGeo, shellGeo);

    NODE_LABELS.forEach((label, i) => {
      const nodeGroup = new THREE.Group();
      const angle = (i / NODE_LABELS.length) * Math.PI * 2;
      const orbitRadius = 4.4 + (i % 2) * 0.8;
      const orbitTilt = ((i % 3) - 1) * 0.28;

      const isAccent = i % 2 === 0;
      const nodeMat = new THREE.MeshBasicMaterial({
        color: isAccent ? this.ACCENT_PRIMARY : this.NODE_IDLE,
        transparent: true,
        opacity: 0.9,
      });

      const shellMat = new THREE.MeshBasicMaterial({
        color: isAccent ? this.ACCENT_CYAN : this.NODE_IDLE,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      this.disposables.push(nodeMat, shellMat);

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const shellMesh = new THREE.Mesh(shellGeo, shellMat);
      nodeGroup.add(nodeMesh);
      nodeGroup.add(shellMesh);

      const sprite = this.createLabelSprite(label, false);

      this.mainGroup!.add(nodeGroup);
      this.mainGroup!.add(sprite);

      this.orbitalNodes.push({
        meshGroup: nodeGroup,
        nodeMesh,
        shellMesh,
        sprite,
        baseAngle: angle,
        orbitSpeed: 0.045 + i * 0.008,
        orbitRadius,
        orbitTilt,
        yPhase: Math.random() * Math.PI * 2,
        yAmplitude: 0.15 + Math.random() * 0.15,
        ySpeed: 0.25 + Math.random() * 0.25,
      });
    });
  }

  private createLabelSprite(text: string, isCore = false): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = (isCore ? 512 : 384) * dpr;
    canvas.height = 48 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = isCore
      ? '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      : '500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    ctx.fillStyle = isCore ? 'rgba(0, 216, 255, 0.95)' : 'rgba(180, 180, 190, 0.88)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '0.08em';
    ctx.fillText(text.toUpperCase(), (isCore ? 512 : 384) / 2, 24);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.disposables.push(texture);

    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    this.disposables.push(mat);

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(isCore ? 4.0 : 3.2, 0.48, 1);
    return sprite;
  }

  // ---------------------------------------------------------------------------
  // Bezier Connections & Energy Streams
  // ---------------------------------------------------------------------------

  private createNeuralConnections(): void {
    if (!this.mainGroup) return;

    this.orbitalNodes.forEach((node) => {
      const curvePoints = this.getCurvePoints(
        new THREE.Vector3(0, 0, 0),
        node.meshGroup.position,
      );
      const geo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const mat = new THREE.LineBasicMaterial({
        color: this.ACCENT_PRIMARY,
        transparent: true,
        opacity: 0.12,
      });

      const line = new THREE.Line(geo, mat);
      this.mainGroup!.add(line);
      this.coreConnections.push(line);
      this.disposables.push(geo, mat);
    });
  }

  private getCurvePoints(start: THREE.Vector3, end: THREE.Vector3): THREE.Vector3[] {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(end, start);
    const perp = new THREE.Vector3(-dir.y, dir.x, dir.z * 0.5).normalize();
    mid.add(perp.multiplyScalar(0.7 + Math.random() * 0.3));

    const curve = new THREE.QuadraticBezierCurve3(start.clone(), mid, end.clone());
    return curve.getPoints(24);
  }

  private createStreamParticles(): void {
    if (!this.mainGroup) return;

    const pGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const pMat = new THREE.MeshBasicMaterial({
      color: this.ACCENT_CYAN,
      transparent: true,
      opacity: 0.9,
    });
    this.disposables.push(pGeo, pMat);

    this.orbitalNodes.forEach((_, i) => {
      for (let s = 0; s < 3; s++) {
        const mesh = new THREE.Mesh(pGeo, pMat);
        this.mainGroup!.add(mesh);

        this.energyStreams.push({
          mesh,
          nodeIndex: i,
          progress: Math.random(),
          speed: 0.12 + Math.random() * 0.18,
          direction: s % 2 === 0 ? 1 : -1,
        });
      }
    });
  }

  private createAmbientParticleVolume(): void {
    if (!this.mainGroup) return;

    const count = 90;
    const positions = new Float32Array(count * 3);
    this.particleVelocities = new Float32Array(count * 3);
    const radius = 8;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.random() * radius;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      this.particleVelocities[i * 3] = (Math.random() - 0.5) * 0.003;
      this.particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      this.particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.9,
      transparent: true,
      opacity: 0.14,
      sizeAttenuation: true,
      depthWrite: false,
    });

    this.ambientParticles = new THREE.Points(geo, mat);
    this.mainGroup.add(this.ambientParticles);
    this.disposables.push(geo, mat);
  }

  // Shockwave Burst on Click
  private triggerShockwave(): void {
    if (!this.coreGroup) return;

    const ringGeo = new THREE.RingGeometry(0.8, 0.88, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: this.ACCENT_CYAN,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    this.disposables.push(ringGeo, ringMat);

    const mesh = new THREE.Mesh(ringGeo, ringMat);
    mesh.rotation.x = Math.PI * 0.5;
    this.coreGroup.add(mesh);

    this.shockwaves.push({
      mesh,
      scale: 1,
      alpha: 0.8,
    });
  }

  // ---------------------------------------------------------------------------
  // Animation Loop
  // ---------------------------------------------------------------------------

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (!this.isVisible) return;
    if (!this.scene || !this.camera || !this.renderer || !this.mainGroup) return;

    // Smooth camera Z zoom transition
    this.camera.position.z += (this.targetZoomZ - this.camera.position.z) * 0.08;

    const elapsed = (performance.now() - this.startTime) / 1000;

    this.updateCore(elapsed);
    this.updateNodes(elapsed);
    this.updateConnections();
    this.updateEnergyStreams();
    this.updateShockwaves();
    this.updateAmbientParticles();
    this.updateParallax();

    this.renderFrame();
  }

  private renderFrame(): void {
    if (this.scene && this.camera && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private updateCore(elapsed: number): void {
    if (!this.coreMesh || !this.coreOuterShell || !this.coreHalo) return;

    const pulse = 1 + Math.sin(elapsed * 1.1) * 0.04;
    this.coreMesh.scale.setScalar(pulse);

    this.coreOuterShell.rotation.y = elapsed * 0.12;
    this.coreOuterShell.rotation.x = Math.sin(elapsed * 0.08) * 0.15;

    const haloPulse = 1 + Math.sin(elapsed * 0.75) * 0.06;
    this.coreHalo.scale.setScalar(haloPulse);
    (this.coreHalo.material as THREE.MeshBasicMaterial).opacity =
      0.06 + Math.sin(elapsed * 0.9) * 0.03;

    if (this.coreRings.length >= 3) {
      this.coreRings[0].rotation.z = elapsed * 0.16;
      this.coreRings[1].rotation.z = -elapsed * 0.2;
      this.coreRings[2].rotation.y = elapsed * 0.14;
    }
  }

  private updateNodes(elapsed: number): void {
    this.orbitalNodes.forEach((node) => {
      const angle = node.baseAngle + elapsed * node.orbitSpeed;
      const x = Math.cos(angle) * node.orbitRadius;
      const z = Math.sin(angle) * node.orbitRadius * 0.45;
      const yOrbit = Math.sin(angle) * node.orbitTilt;
      const yFloat = Math.sin(elapsed * node.ySpeed + node.yPhase) * node.yAmplitude;

      node.meshGroup.position.set(x, yOrbit + yFloat, z);
      node.shellMesh.rotation.y = elapsed * 0.3;
      node.shellMesh.rotation.x = elapsed * 0.2;

      node.sprite.position.set(x, yOrbit + yFloat + 0.52, z);
    });
  }

  private updateConnections(): void {
    this.coreConnections.forEach((line, i) => {
      if (i >= this.orbitalNodes.length) return;
      const node = this.orbitalNodes[i];
      const curvePoints = this.getCurvePoints(
        new THREE.Vector3(0, 0, 0),
        node.meshGroup.position,
      );
      const positions = new Float32Array(curvePoints.length * 3);
      curvePoints.forEach((p, j) => {
        positions[j * 3] = p.x;
        positions[j * 3 + 1] = p.y;
        positions[j * 3 + 2] = p.z;
      });
      line.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      line.geometry.attributes['position'].needsUpdate = true;
    });

    if (this.mainGroup) {
      this.interConnections.forEach((line) => {
        this.mainGroup!.remove(line);
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      this.interConnections = [];

      for (let i = 0; i < this.orbitalNodes.length; i++) {
        for (let j = i + 1; j < this.orbitalNodes.length; j++) {
          const dist = this.orbitalNodes[i].meshGroup.position.distanceTo(
            this.orbitalNodes[j].meshGroup.position,
          );
          if (dist < 5.8) {
            const geo = new THREE.BufferGeometry().setFromPoints([
              this.orbitalNodes[i].meshGroup.position.clone(),
              this.orbitalNodes[j].meshGroup.position.clone(),
            ]);
            const mat = new THREE.LineBasicMaterial({
              color: this.ACCENT_CYAN,
              transparent: true,
              opacity: Math.max(0.01, 0.05 * (1 - dist / 5.8)),
            });
            const line = new THREE.Line(geo, mat);
            this.mainGroup.add(line);
            this.interConnections.push(line);
          }
        }
      }
    }
  }

  private updateEnergyStreams(): void {
    this.energyStreams.forEach((stream) => {
      stream.progress += stream.speed * 0.016;
      if (stream.progress > 1) stream.progress -= 1;

      const nodePos = this.orbitalNodes[stream.nodeIndex].meshGroup.position;
      const t = stream.direction === 1 ? stream.progress : 1 - stream.progress;

      const curvePoints = this.getCurvePoints(new THREE.Vector3(0, 0, 0), nodePos);
      const idx = Math.min(
        curvePoints.length - 1,
        Math.floor(t * (curvePoints.length - 1)),
      );
      stream.mesh.position.copy(curvePoints[idx]);

      const fade = Math.sin(t * Math.PI);
      (stream.mesh.material as THREE.MeshBasicMaterial).opacity = 0.2 + fade * 0.75;
    });
  }

  private updateShockwaves(): void {
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.scale += 0.15;
      sw.alpha -= 0.025;

      sw.mesh.scale.setScalar(sw.scale);
      (sw.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, sw.alpha);

      if (sw.alpha <= 0) {
        if (this.coreGroup) this.coreGroup.remove(sw.mesh);
        sw.mesh.geometry.dispose();
        (sw.mesh.material as THREE.Material).dispose();
        this.shockwaves.splice(i, 1);
      }
    }
  }

  private updateAmbientParticles(): void {
    if (!this.ambientParticles || !this.particleVelocities) return;

    const positions = this.ambientParticles.geometry.attributes['position'] as THREE.BufferAttribute;
    const arr = positions.array as Float32Array;
    const maxR = 8;

    for (let i = 0; i < arr.length / 3; i++) {
      arr[i * 3] += this.particleVelocities[i * 3];
      arr[i * 3 + 1] += this.particleVelocities[i * 3 + 1];
      arr[i * 3 + 2] += this.particleVelocities[i * 3 + 2];

      const x = arr[i * 3];
      const y = arr[i * 3 + 1];
      const z = arr[i * 3 + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);
      if (dist > maxR) {
        this.particleVelocities[i * 3] *= -1;
        this.particleVelocities[i * 3 + 1] *= -1;
        this.particleVelocities[i * 3 + 2] *= -1;
      }
    }

    positions.needsUpdate = true;
  }

  private updateParallax(): void {
    if (!this.mainGroup) return;

    // Slow continuous ambient spin starting from current user rotation
    if (!this.isDragging) {
      this.userRotation.y += 0.001;
    }

    // Parallax adds a subtle tilt onto the user-controlled rotation
    this.rotationTarget.x = this.userRotation.x - this.mouse.y * 0.08;
    this.rotationTarget.y = this.userRotation.y + this.mouse.x * 0.08;

    this.rotationCurrent.x += (this.rotationTarget.x - this.rotationCurrent.x) * 0.04;
    this.rotationCurrent.y += (this.rotationTarget.y - this.rotationCurrent.y) * 0.04;

    this.mainGroup.rotation.x = this.rotationCurrent.x;
    this.mainGroup.rotation.y = this.rotationCurrent.y;
  }

  // Pointer Handlers
  private readonly onPointerDown = (e: PointerEvent): void => {
    this.isDragging = true;
    this.dragDistance = 0;
    this.previousPointer = { x: e.clientX, y: e.clientY };
    this.updateMouseCoords(e);
    this.triggerShockwave();
  };

  private readonly onPointerMove = (e: PointerEvent): void => {
    if (this.isDragging) {
      const dx = e.clientX - this.previousPointer.x;
      const dy = e.clientY - this.previousPointer.y;
      this.userRotation.y += dx * 0.005;
      this.userRotation.x += dy * 0.005;
      this.dragDistance += Math.abs(dx) + Math.abs(dy);
      this.previousPointer = { x: e.clientX, y: e.clientY };
    }
    this.updateMouseCoords(e);
  };

  private readonly onPointerUp = (e: PointerEvent): void => {
    if (this.isDragging && this.dragDistance < 10) {
      this.checkRaycastClick();
    }
    this.isDragging = false;
  };

  private checkRaycastClick(): void {
    if (!this.camera || !this.scene) return;

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2(this.mouse.x, this.mouse.y);
    raycaster.setFromCamera(mouseVec, this.camera);

    // Check core
    if (this.coreMesh) {
      const intersectsCore = raycaster.intersectObject(this.coreMesh);
      if (intersectsCore.length > 0) {
        this.zone.run(() => this.nodeSelect.emit('HUMAN DECISION MAKING'));
        return;
      }
    }

    // Check orbital nodes
    for (let i = 0; i < this.orbitalNodes.length; i++) {
      const node = this.orbitalNodes[i];
      const intersects = raycaster.intersectObjects([node.nodeMesh, node.shellMesh]);
      if (intersects.length > 0) {
        const labelName = NODE_LABELS[i];
        this.zone.run(() => this.nodeSelect.emit(labelName));
        return;
      }
    }
  }

  // Zoom Control API
  public zoomIn(): void {
    this.targetZoomZ = Math.max(this.minZoomZ, this.targetZoomZ - 3.8);
  }

  public zoomOut(): void {
    this.targetZoomZ = Math.min(this.maxZoomZ, this.targetZoomZ + 3.8);
  }

  public resetZoom(): void {
    this.targetZoomZ = 16;
  }

  public toggleZoomFocus(): void {
    if (this.targetZoomZ > 10) {
      this.targetZoomZ = 7.0; // Close-up macro focus
    } else {
      this.targetZoomZ = 16; // Standard view
    }
  }

  public get isZoomedIn(): boolean {
    return this.targetZoomZ <= 10;
  }

  public get currentZoomPercent(): number {
    return Math.round((16 / this.targetZoomZ) * 100);
  }

  // Wheel & Touch Pinch Zoom Handlers
  private touchStartDist = 0;
  private initialTouchZoomZ = 16;

  private readonly onWheel = (e: WheelEvent): void => {
    e.preventDefault();
    const delta = e.deltaY * 0.035;
    this.targetZoomZ = Math.max(this.minZoomZ, Math.min(this.maxZoomZ, this.targetZoomZ + delta));
  };

  private readonly onTouchStart = (e: TouchEvent): void => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      this.touchStartDist = Math.sqrt(dx * dx + dy * dy);
      this.initialTouchZoomZ = this.targetZoomZ;
    }
  };

  private readonly onTouchMove = (e: TouchEvent): void => {
    if (e.touches.length === 2 && this.touchStartDist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const factor = this.touchStartDist / Math.max(1, dist);
      this.targetZoomZ = Math.max(this.minZoomZ, Math.min(this.maxZoomZ, this.initialTouchZoomZ * factor));
    }
  };

  private updateMouseCoords(e: PointerEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private setupPointerEvents(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.addEventListener('pointerdown', this.onPointerDown);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    canvas.addEventListener('touchstart', this.onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', this.onTouchMove, { passive: true });
    window.addEventListener('pointermove', this.onPointerMove, { passive: true });
    window.addEventListener('pointerup', this.onPointerUp);
  }

  private removePointerEvents(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.removeEventListener('pointerdown', this.onPointerDown);
      canvas.removeEventListener('wheel', this.onWheel);
      canvas.removeEventListener('touchstart', this.onTouchStart);
      canvas.removeEventListener('touchmove', this.onTouchMove);
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

  private setupVisibilityObserver(): void {
    const host = this.canvasRef.nativeElement.parentElement;
    if (!host) return;

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 },
    );
    this.intersectionObserver.observe(host);
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
