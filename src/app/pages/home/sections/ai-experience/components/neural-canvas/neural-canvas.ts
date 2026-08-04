import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { SupportedLang } from '@core';
import * as THREE from 'three';
import {
  CAPABILITY_NODES,
  CORE_LOOP_NODES,
  CausalNode,
  ConnectionLine,
  DataPacket,
} from './neural-canvas.model';

@Component({
  selector: 'app-neural-canvas',
  standalone: true,
  template: `
    <div class="canvas-container">
      <canvas #canvas class="neural-canvas" aria-hidden="true"></canvas>
      <div class="readout-overlay">
        <div class="readout-group">
          <span class="readout-pulse"></span>
          <span class="readout-tag readout-tag--bold">ENGINEERING INTELLIGENCE LOOP</span>
        </div>
        <span class="readout-tag readout-tag--state">{{ currentStateText }}</span>
        <span class="readout-tag readout-tag--active">{{ currentInvariantText }}</span>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      touch-action: none;
    }
    .canvas-container {
      position: relative;
      width: 100%;
      height: 100%;
      background: #0d0f17;
      border-radius: inherit;
      overflow: hidden;
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
    .readout-overlay {
      position: absolute;
      bottom: 18px;
      right: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      pointer-events: none;
      user-select: none;
      z-index: 10;
    }
    .readout-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .readout-pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #3b82f6;
      box-shadow: 0 0 12px #3b82f6;
      animation: pulseGlow 1.8s infinite ease-in-out;
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.35); }
    }
    .readout-tag {
      font-family: var(--font-mono, monospace);
      font-size: 10.5px;
      font-weight: 500;
      letter-spacing: 0.08em;
      color: rgba(255, 255, 255, 0.7);
      background: rgba(15, 18, 28, 0.88);
      padding: 6px 13px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
    }
    .readout-tag--bold {
      font-weight: 600;
      color: #ffffff;
    }
    .readout-tag--state {
      color: #f1f5f9;
      border-color: rgba(255, 255, 255, 0.2);
    }
    .readout-tag--active {
      color: #60a5fa;
      border-color: rgba(96, 165, 250, 0.45);
      background: rgba(20, 30, 50, 0.9);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeuralCanvas implements OnInit, OnDestroy {
  @Input() lang: SupportedLang = 'pt-BR';
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Output() nodeSelect = new EventEmitter<string>();

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private startTime = 0;
  private isVisible = true;

  // Mouse & Raycasting
  private mouse = { x: 0, y: 0 };
  private mouseVec2 = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();
  private hoveredNodeIndex = -1;

  // Conceptual System State Text
  public currentStateText = 'ESTADO: ESTÁVEL';
  public currentInvariantText = 'INVARIANTE: PRESERVADA';

  // Controlled 180° Orbit Drag State
  private isDragging = false;
  private activePointerId: number | null = null;
  private dragDistance = 0;
  private previousPointer = { x: 0, y: 0 };
  private userRotation = { x: 0, y: 0 };
  private targetRotation = { x: 0, y: 0 };
  private currentRotation = { x: 0, y: 0 };

  // 180° Angle Boundaries
  private readonly MAX_ORBIT_Y = 1.15;
  private readonly MAX_ORBIT_X = 0.45;

  // Camera Zoom State
  private targetZoomZ = 8.5;
  private readonly minZoomZ = 3.8;
  private readonly maxZoomZ = 14.0;

  // Scene Components
  private mainGroup: THREE.Group | null = null;
  private causalNodes: CausalNode[] = [];
  private connections: ConnectionLine[] = [];
  private dataPackets: DataPacket[] = [];
  private gridMesh: THREE.LineSegments | null = null;

  // High Contrast Colors & Glow Colors
  private readonly COLOR_CHASSIS_CORE = new THREE.Color(0x282c3d);
  private readonly COLOR_CHASSIS_SUPPORT = new THREE.Color(0x1e2230);
  private readonly COLOR_BLUE_ACCENT = new THREE.Color(0x3b82f6);
  private readonly COLOR_BRIGHT_GLOW = new THREE.Color(0x60a5fa);
  private readonly COLOR_WHITE = new THREE.Color(0xffffff);

  private disposables: (THREE.BufferGeometry | THREE.Material | THREE.Texture)[] = [];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateStateLabels();

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return; // Skip WebGL 3D neural canvas completely on mobile
    }

    const reducedMotion = this.prefersReducedMotion();

    this.zone.runOutsideAngular(() => {
      try {
        this.initScene();
        if (!this.renderer) return;

        this.createTechnicalGrid();
        this.createArchitectureTopology();
        this.setupResizeObserver();

        if (reducedMotion) {
          this.renderFrame();
        } else {
          this.setupPointerEvents();
          this.setupVisibilityObserver();
          this.animate();
        }
      } catch {
        // WebGL Fallback
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
    this.causalNodes = [];
    this.connections = [];
    this.dataPackets = [];
  }

  private updateStateLabels(overrideState?: string, overrideInvariant?: string): void {
    const isEn = this.lang === 'en';

    if (overrideState) {
      this.currentStateText = overrideState;
    } else {
      this.currentStateText = isEn ? 'STATE: STABLE' : 'ESTADO: ESTÁVEL';
    }

    if (overrideInvariant) {
      this.currentInvariantText = overrideInvariant;
    } else {
      this.currentInvariantText = isEn ? 'INVARIANT: PRESERVED' : 'INVARIANTE: PRESERVADA';
    }
    this.cdr.markForCheck();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth || 800;
    const height = canvas.clientHeight || 500;

    this.startTime = performance.now();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d0f17);

    // Camera Setup
    this.camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 100);
    this.camera.position.set(0, 6.2, 8.5);
    this.camera.lookAt(0, -0.2, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.mainGroup = new THREE.Group();
    this.scene.add(this.mainGroup);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf8fafc, 2.2);
    keyLight.position.set(6, 14, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc7d2fe, 1.2);
    fillLight.position.set(-6, 8, -4);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.4);
    rimLight.position.set(-8, 4, -6);
    this.scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 10, 0);
    this.scene.add(topLight);
  }

  private createTechnicalGrid(): void {
    if (!this.mainGroup) return;

    const size = 18;
    const divisions = 36;
    const gridGeo = new THREE.BufferGeometry();
    const positions: number[] = [];

    const step = size / divisions;
    const half = size / 2;

    for (let i = -half; i <= half; i += step) {
      positions.push(-half, -0.45, i, half, -0.45, i);
      positions.push(i, -0.45, -half, i, -0.45, half);
    }

    gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x2e354f,
      transparent: true,
      opacity: 0.5,
    });

    this.gridMesh = new THREE.LineSegments(gridGeo, gridMat);
    this.mainGroup.add(this.gridMesh);
    this.disposables.push(gridGeo, gridMat);
  }

  private createArchitectureTopology(): void {
    if (!this.mainGroup) return;

    const coreBoxGeo = new THREE.BoxGeometry(0.92, 0.22, 0.48);
    const supportBoxGeo = new THREE.BoxGeometry(1.42, 0.18, 0.56);
    const coreEdges = new THREE.EdgesGeometry(coreBoxGeo);
    const supportEdges = new THREE.EdgesGeometry(supportBoxGeo);

    this.disposables.push(coreBoxGeo, supportBoxGeo, coreEdges, supportEdges);

    const rx = 4.6;
    const rz = 2.6;

    CORE_LOOP_NODES.forEach((name, i) => {
      const nodeGroup = new THREE.Group();
      const theta = (i / CORE_LOOP_NODES.length) * Math.PI * 2 + Math.PI / 6;
      const posX = Math.cos(theta) * rx;
      const posZ = Math.sin(theta) * rz;

      const chassisMat = new THREE.MeshPhysicalMaterial({
        color: this.COLOR_CHASSIS_CORE,
        metalness: 0.75,
        roughness: 0.2,
        clearcoat: 0.3,
      });

      const edgeMat = new THREE.LineBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.8 });
      const glowMat = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.0 });

      this.disposables.push(chassisMat, edgeMat, glowMat);

      const baseChassis = new THREE.Mesh(coreBoxGeo, chassisMat);
      baseChassis.castShadow = true;
      baseChassis.receiveShadow = true;
      nodeGroup.add(baseChassis);

      const borderLines = new THREE.LineSegments(coreEdges, edgeMat);
      nodeGroup.add(borderLines);

      const pulseGlowLines = new THREE.LineSegments(coreEdges, glowMat);
      pulseGlowLines.scale.set(1.04, 1.04, 1.04);
      nodeGroup.add(pulseGlowLines);

      const labelSprite = this.createLabelSprite(name, `CORE LOOP // 0${i + 1}`, false);
      labelSprite.position.set(0, 0.34, 0);
      nodeGroup.add(labelSprite);

      const metaSprite = this.createMetaSprite('STATUS: NOMINAL');
      metaSprite.position.set(0, -0.28, 0);
      nodeGroup.add(metaSprite);

      nodeGroup.position.set(posX, 0, posZ);
      this.mainGroup!.add(nodeGroup);

      this.causalNodes.push({
        name,
        index: i,
        isSupporting: false,
        group: nodeGroup,
        baseChassis,
        labelSprite,
        metaSprite,
        borderLines,
        pulseGlowLines,
        basePosition: new THREE.Vector3(posX, 0, posZ),
        targetY: 0,
        currentY: 0,
        velocityY: 0,
        edgePulseEnergy: 0,
      });
    });

    const supportingCoords = [
      { name: 'KNOWLEDGE' as const, pos: new THREE.Vector3(-1.8, -0.22, 0) },
      { name: 'HUMAN JUDGMENT' as const, pos: new THREE.Vector3(1.8, -0.22, 0) },
    ];

    supportingCoords.forEach((sup, idx) => {
      const nodeGroup = new THREE.Group();

      const chassisMat = new THREE.MeshPhysicalMaterial({
        color: this.COLOR_CHASSIS_SUPPORT,
        metalness: 0.7,
        roughness: 0.25,
        clearcoat: 0.2,
      });

      const edgeMat = new THREE.LineBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.8 });
      const glowMat = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.0 });
      this.disposables.push(chassisMat, edgeMat, glowMat);

      const baseChassis = new THREE.Mesh(supportBoxGeo, chassisMat);
      baseChassis.castShadow = true;
      baseChassis.receiveShadow = true;
      nodeGroup.add(baseChassis);

      const borderLines = new THREE.LineSegments(supportEdges, edgeMat);
      nodeGroup.add(borderLines);

      const pulseGlowLines = new THREE.LineSegments(supportEdges, glowMat);
      pulseGlowLines.scale.set(1.04, 1.04, 1.04);
      nodeGroup.add(pulseGlowLines);

      const labelSprite = this.createLabelSprite(sup.name, `SUPPORTING LAYER // 0${idx + 1}`, true);
      labelSprite.position.set(0, 0.3, 0);
      nodeGroup.add(labelSprite);

      const metaSprite = this.createMetaSprite('FOUNDATIONAL GOVERNANCE');
      metaSprite.position.set(0, -0.26, 0);
      nodeGroup.add(metaSprite);

      nodeGroup.position.copy(sup.pos);
      this.mainGroup!.add(nodeGroup);

      this.causalNodes.push({
        name: sup.name,
        index: CORE_LOOP_NODES.length + idx,
        isSupporting: true,
        group: nodeGroup,
        baseChassis,
        labelSprite,
        metaSprite,
        borderLines,
        pulseGlowLines,
        basePosition: sup.pos.clone(),
        targetY: -0.22,
        currentY: -0.22,
        velocityY: 0,
        edgePulseEnergy: 0,
      });
    });

    this.createCausalConnections();
  }

  private createCausalConnections(): void {
    if (!this.mainGroup) return;

    for (let i = 0; i < CORE_LOOP_NODES.length; i++) {
      const nextIdx = (i + 1) % CORE_LOOP_NODES.length;
      this.addBezierConnection(i, nextIdx);
    }

    const knowledgeIdx = 6;
    const humanIdx = 7;
    const contextIdx = 1;
    const decisionIdx = 3;

    this.addBezierConnection(knowledgeIdx, contextIdx);
    this.addBezierConnection(humanIdx, decisionIdx);
  }

  private addBezierConnection(fromIdx: number, toIdx: number): void {
    const start = this.causalNodes[fromIdx].basePosition;
    const end = this.causalNodes[toIdx].basePosition;

    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.y += 0.35;

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const points = curve.getPoints(28);

    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.6,
    });

    const lineMesh = new THREE.Line(lineGeo, lineMat);
    this.mainGroup!.add(lineMesh);
    this.disposables.push(lineGeo, lineMat);

    this.connections.push({
      curve,
      lineMesh,
      fromIndex: fromIdx,
      toIndex: toIdx,
    });
  }

  private createLabelSprite(title: string, indexTag: string, isSupporting: boolean): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = 420 * dpr;
    canvas.height = 68 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '600 10.5px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = isSupporting ? '#cbd5e1' : '#60a5fa';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.letterSpacing = '0.14em';
    ctx.fillText(indexTag, 210, 6);

    ctx.font = '700 14px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '0.1em';
    ctx.fillText(title, 210, 25);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.disposables.push(texture);

    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.98,
      depthWrite: false,
    });
    this.disposables.push(mat);

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(isSupporting ? 2.5 : 2.1, 0.35, 1);
    return sprite;
  }

  private createMetaSprite(text: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = 256 * dpr;
    canvas.height = 36 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '500 9.5px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = 'rgba(203, 213, 225, 0.85)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '0.12em';
    ctx.fillText(text, 128, 18);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.disposables.push(texture);

    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.disposables.push(mat);

    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.4, 0.2, 1);
    return sprite;
  }

  private triggerCausalCascade(sourceIndex: number): void {
    const node = this.causalNodes[sourceIndex];
    if (!node) return;

    node.velocityY = 0.14;
    node.edgePulseEnergy = 1.0;

    const isEn = this.lang === 'en';

    this.updateStateLabels(
      isEn ? 'EVENT: RECEIVED' : 'EVENTO: RECEBIDO',
      isEn ? 'CONTEXT: UPDATING' : 'CONTEXTO: ATUALIZANDO',
    );

    setTimeout(() => {
      this.updateStateLabels(
        isEn ? 'PROCESS: EXECUTING' : 'PROCESSO: EXECUTANDO',
        isEn ? 'VALIDATION: CHECK' : 'VALIDAÇÃO: CHECAGEM',
      );
    }, 400);

    setTimeout(() => {
      this.updateStateLabels(
        isEn ? 'STATE: TRANSITION' : 'ESTADO: TRANSIÇÃO',
        isEn ? 'INVARIANT: PRESERVED' : 'INVARIANTE: PRESERVADA',
      );
    }, 900);

    setTimeout(() => {
      this.updateStateLabels();
    }, 1600);

    this.connections.forEach((conn) => {
      if (conn.fromIndex === sourceIndex) {
        this.spawnDataPacket(conn.curve, this.COLOR_WHITE, 0.032);
        this.spawnDataPacket(conn.curve, this.COLOR_BRIGHT_GLOW, 0.024);

        const destNode = this.causalNodes[conn.toIndex];
        setTimeout(() => {
          destNode.velocityY = -0.06;
          destNode.edgePulseEnergy = 0.85;
        }, 180);
      }
    });
  }

  private spawnDataPacket(curve: THREE.QuadraticBezierCurve3, color: THREE.Color, speed: number): void {
    if (!this.mainGroup) return;

    const pGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const pMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 1.0,
    });
    this.disposables.push(pGeo, pMat);

    const mesh = new THREE.Mesh(pGeo, pMat);

    const light = new THREE.PointLight(color.getHex(), 1.2, 2.5);
    mesh.add(light);

    this.mainGroup.add(mesh);

    this.dataPackets.push({
      mesh,
      light,
      curve,
      progress: 0,
      speed,
      color,
    });
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (!this.isVisible) return;
    if (!this.scene || !this.camera || !this.renderer || !this.mainGroup) return;

    this.camera.position.z += (this.targetZoomZ - this.camera.position.z) * 0.14;
    this.camera.position.y += (this.targetZoomZ * 0.72 - this.camera.position.y) * 0.14;
    this.camera.lookAt(0, -0.2, 0);

    const elapsed = (performance.now() - this.startTime) / 1000;

    this.updateNodesPhysics(elapsed);
    this.updateDataPackets();
    this.updateControlledOrbitPhysics();

    this.renderFrame();
  }

  private renderFrame(): void {
    if (this.scene && this.camera && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private updateNodesPhysics(elapsed: number): void {
    this.causalNodes.forEach((node, i) => {
      const stiffness = 240;
      const damping = 20;

      const targetY = node.isSupporting ? -0.22 : 0;
      const forceY = -stiffness * (node.currentY - targetY) - damping * node.velocityY;
      node.velocityY += forceY * 0.016;
      node.currentY += node.velocityY * 0.016;

      node.group.position.y = node.currentY;

      if (node.edgePulseEnergy > 0.01) {
        node.edgePulseEnergy *= 0.92;
      } else {
        node.edgePulseEnergy = 0;
      }

      const isHovered = i === this.hoveredNodeIndex;
      const effectivePulse = Math.max(isHovered ? 1.0 : 0.0, node.edgePulseEnergy);

      const borderMat = node.borderLines.material as THREE.LineBasicMaterial;
      borderMat.color.lerpColors(new THREE.Color(0x64748b), this.COLOR_BRIGHT_GLOW, effectivePulse);

      const glowMat = node.pulseGlowLines.material as THREE.LineBasicMaterial;
      glowMat.opacity = effectivePulse * 0.95;
      node.pulseGlowLines.scale.setScalar(1.02 + effectivePulse * 0.06);

      if (Math.floor(elapsed * 0.3) % CAPABILITY_NODES.length === i && Math.random() < 0.006) {
        this.triggerCausalCascade(i);
      }
    });
  }

  private updateDataPackets(): void {
    for (let i = this.dataPackets.length - 1; i >= 0; i--) {
      const p = this.dataPackets[i];
      p.progress += p.speed;

      if (p.progress >= 1.0) {
        if (this.mainGroup) this.mainGroup.remove(p.mesh);
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
        p.light.dispose();
        this.dataPackets.splice(i, 1);
        continue;
      }

      const point = p.curve.getPoint(p.progress);
      p.mesh.position.copy(point);

      const fade = Math.sin(p.progress * Math.PI);
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.3 + fade * 0.7;
      p.light.intensity = fade * 1.5;
    }
  }

  private updateControlledOrbitPhysics(): void {
    if (!this.mainGroup) return;

    this.targetRotation.x = this.userRotation.x - this.mouse.y * 0.035;
    this.targetRotation.y = this.userRotation.y + this.mouse.x * 0.035;

    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.12;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.12;

    this.mainGroup.rotation.x = this.currentRotation.x;
    this.mainGroup.rotation.y = this.currentRotation.y;
  }

  private readonly onPointerDown = (e: PointerEvent): void => {
    this.isDragging = true;
    this.activePointerId = e.pointerId;
    this.dragDistance = 0;
    this.previousPointer = { x: e.clientX, y: e.clientY };

    const canvas = this.canvasRef.nativeElement;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Fallback
    }

    this.updateMouseCoords(e);
  };

  private readonly onPointerMove = (e: PointerEvent): void => {
    if (this.isDragging && (this.activePointerId === null || e.pointerId === this.activePointerId)) {
      const dx = e.clientX - this.previousPointer.x;
      const dy = e.clientY - this.previousPointer.y;
      this.dragDistance += Math.abs(dx) + Math.abs(dy);

      this.userRotation.y = Math.max(-this.MAX_ORBIT_Y, Math.min(this.MAX_ORBIT_Y, this.userRotation.y + dx * 0.0055));
      this.userRotation.x = Math.max(-this.MAX_ORBIT_X, Math.min(this.MAX_ORBIT_X, this.userRotation.x + dy * 0.0055));

      this.previousPointer = { x: e.clientX, y: e.clientY };
    }

    this.updateMouseCoords(e);
    this.checkRaycastHover();
  };

  private readonly onPointerUp = (e: PointerEvent): void => {
    if (this.isDragging) {
      if (this.dragDistance < 8) {
        this.checkRaycastClick();
      }
      const canvas = this.canvasRef.nativeElement;
      try {
        if (this.activePointerId !== null) {
          canvas.releasePointerCapture(this.activePointerId);
        }
      } catch {
        // Fallback
      }
    }
    this.isDragging = false;
    this.activePointerId = null;
  };

  private readonly onWheel = (e: WheelEvent): void => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY) * 0.7;
    this.targetZoomZ = Math.max(this.minZoomZ, Math.min(this.maxZoomZ, this.targetZoomZ + delta));
    this.cdr.markForCheck();
  };

  private updateMouseCoords(e: PointerEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    this.mouseVec2.set(this.mouse.x, this.mouse.y);
  }

  private checkRaycastHover(): void {
    if (!this.camera || !this.scene) return;

    this.raycaster.setFromCamera(this.mouseVec2, this.camera);
    let foundIndex = -1;

    for (let i = 0; i < this.causalNodes.length; i++) {
      const intersects = this.raycaster.intersectObject(this.causalNodes[i].baseChassis);
      if (intersects.length > 0) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== this.hoveredNodeIndex) {
      this.hoveredNodeIndex = foundIndex;
      if (foundIndex !== -1) {
        this.triggerCausalCascade(foundIndex);
      }
    }
  }

  private checkRaycastClick(): void {
    if (!this.camera || !this.scene) return;

    this.raycaster.setFromCamera(this.mouseVec2, this.camera);

    for (let i = 0; i < this.causalNodes.length; i++) {
      const intersects = this.raycaster.intersectObject(this.causalNodes[i].baseChassis);
      if (intersects.length > 0) {
        const nodeName = this.causalNodes[i].name;
        this.triggerCausalCascade(i);
        this.zone.run(() => this.nodeSelect.emit(nodeName));
        return;
      }
    }
  }

  // Zoom Control API
  public zoomIn(): void {
    this.targetZoomZ = Math.max(this.minZoomZ, this.targetZoomZ - 1.5);
    this.cdr.markForCheck();
  }

  public zoomOut(): void {
    this.targetZoomZ = Math.min(this.maxZoomZ, this.targetZoomZ + 1.5);
    this.cdr.markForCheck();
  }

  public resetZoom(): void {
    this.targetZoomZ = 8.5;
    this.userRotation.x = 0;
    this.userRotation.y = 0;
    this.targetRotation.x = 0;
    this.targetRotation.y = 0;
    this.currentRotation.x = 0;
    this.currentRotation.y = 0;
    this.cdr.markForCheck();
  }

  public toggleZoomFocus(): void {
    if (this.targetZoomZ > 6.2) {
      this.targetZoomZ = 5.8;
      this.userRotation.x = 0;
      this.userRotation.y = 0;
      this.targetRotation.x = 0;
      this.targetRotation.y = 0;
      this.currentRotation.x = 0;
      this.currentRotation.y = 0;
    } else {
      this.targetZoomZ = 8.5;
      this.userRotation.x = 0;
      this.userRotation.y = 0;
      this.targetRotation.x = 0;
      this.targetRotation.y = 0;
      this.currentRotation.x = 0;
      this.currentRotation.y = 0;
    }
    this.cdr.markForCheck();
  }

  public get isZoomedIn(): boolean {
    return this.targetZoomZ <= 6.2;
  }

  public get currentZoomPercent(): number {
    return Math.round((8.8 / this.targetZoomZ) * 100);
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }

  private setupResizeObserver(): void {
    const canvas = this.canvasRef.nativeElement;
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.renderer || !this.camera) return;
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 500;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
    this.resizeObserver.observe(canvas.parentElement || canvas);
  }

  private setupVisibilityObserver(): void {
    const canvas = this.canvasRef.nativeElement;
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
    });
    this.intersectionObserver.observe(canvas);
  }

  private setupPointerEvents(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.addEventListener('pointerdown', this.onPointerDown, { passive: true });
    canvas.addEventListener('pointermove', this.onPointerMove, { passive: true });
    canvas.addEventListener('pointerup', this.onPointerUp, { passive: true });
    canvas.addEventListener('pointercancel', this.onPointerUp, { passive: true });
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
  }

  private removePointerEvents(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas?.removeEventListener('pointerdown', this.onPointerDown);
    canvas?.removeEventListener('pointermove', this.onPointerMove);
    canvas?.removeEventListener('pointerup', this.onPointerUp);
    canvas?.removeEventListener('pointercancel', this.onPointerUp);
    canvas?.removeEventListener('wheel', this.onWheel);
  }
}
