import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { SupportedLang } from '@core';
import {
  AdditiveBlending,
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  EdgesGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LinearFilter,
  LineSegments,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  QuadraticBezierCurve3,
  Raycaster,
  RingGeometry,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Texture,
  TubeGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import {
  CAPABILITY_NODES,
  CORE_LOOP_NODES,
  CapabilityName,
  CausalNode,
  ConnectionLine,
  DataPacket,
} from './neural-canvas.model';

@Component({
  selector: 'app-neural-canvas',
  standalone: true,
  template: `
    <div class="canvas-container">
      <canvas #canvas class="neural-canvas" [class.is-pointer]="isHoveringNode" aria-hidden="true"></canvas>
      <div class="readout-overlay" [class.is-active]="activeNodeLabel !== null">
        <span class="readout-dot" aria-hidden="true"></span>
        @if (activeNodeLabel) {
          <span class="readout-node">{{ activeNodeLabel }}</span>
          <span class="readout-sep" aria-hidden="true">·</span>
          <span class="readout-action">{{ clickHintText }}</span>
        } @else {
          <span class="readout-idle">{{ idleHintText }}</span>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      touch-action: pan-y;
    }
    .canvas-container {
      position: relative;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at 50% 45%, #131826 0%, #0b0d14 58%, #09090b 100%);
      border-radius: inherit;
      overflow: hidden;
    }
    .neural-canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: grab;

      &.is-pointer {
        cursor: pointer;
      }

      &:active {
        cursor: grabbing;
      }
    }
    .readout-overlay {
      position: absolute;
      bottom: 16px;
      right: 16px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 13px;
      border-radius: 9999px;
      background: rgba(15, 18, 28, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
      font-family: var(--font-mono, monospace);
      font-size: 11px;
      color: #cbd5e1;
      pointer-events: none;
      user-select: none;
      z-index: 10;
      transition: border-color 150ms ease, color 150ms ease;

      &.is-active {
        border-color: rgba(96, 165, 250, 0.55);
        color: #f8fafc;

        .readout-dot {
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.9);
        }
      }
    }
    .readout-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #3b82f6;
      box-shadow: 0 0 8px rgba(59, 130, 246, 0.65);
      flex-shrink: 0;
      transition: background-color 150ms ease, box-shadow 150ms ease;
    }
    .readout-node {
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.04em;
    }
    .readout-sep {
      color: #64748b;
    }
    .readout-action {
      color: #93c5fd;
    }
    .readout-idle {
      color: #cbd5e1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeuralCanvas implements OnInit, OnChanges, OnDestroy {
  @Input() lang: SupportedLang = 'pt-BR';
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Output() nodeSelect = new EventEmitter<string>();

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  private renderer: WebGLRenderer | null = null;
  private scene: Scene | null = null;
  private camera: PerspectiveCamera | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private startTime = 0;
  private isVisible = true;

  private mouse = { x: 0, y: 0 };
  private mouseVec2 = new Vector2();
  private raycaster = new Raycaster();
  private hoveredNodeIndex = -1;

  public isHoveringNode = false;
  public activeNodeLabel: string | null = null;
  public idleHintText = '';
  public clickHintText = '';

  private isDragging = false;
  private activePointerId: number | null = null;
  private dragDistance = 0;
  private previousPointer = { x: 0, y: 0 };
  private userRotation = { x: 0, y: 0 };
  private targetRotation = { x: 0, y: 0 };
  private currentRotation = { x: 0, y: 0 };

  private readonly MAX_ORBIT_Y = 1.15;
  private readonly MAX_ORBIT_X = 0.45;

  private targetZoomZ = 8.4;
  private readonly minZoomZ = 3.8;
  private readonly maxZoomZ = 14.0;

  private mainGroup: Group | null = null;
  private causalNodes: CausalNode[] = [];
  private connections: ConnectionLine[] = [];
  private dataPackets: DataPacket[] = [];
  private gridMesh: LineSegments | null = null;
  private pooledPulseLights: PointLight[] = [];

  private sharedPacketGeo: SphereGeometry | null = null;
  private sharedGlowTexture: CanvasTexture | null = null;
  private readonly pendingTimers = new Set<ReturnType<typeof setTimeout>>();

  private readonly COLOR_CHASSIS_CORE = new Color(0x23293a);
  private readonly COLOR_CHASSIS_SUPPORT = new Color(0x1b2030);
  private readonly COLOR_EDGE_BASE = new Color(0x64748b);
  private readonly COLOR_EDGE_SUPPORT = new Color(0x475569);
  private readonly COLOR_ACCENT_IDLE = new Color(0x3b82f6);
  private readonly COLOR_BRIGHT_GLOW = new Color(0x60a5fa);
  private readonly COLOR_WHITE = new Color(0xffffff);

  private disposables: (BufferGeometry | Material | Texture)[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lang']) {
      this.updateLocalizedHints();
    }
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateLocalizedHints();

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const reducedMotion = this.prefersReducedMotion();

    this.zone.runOutsideAngular(() => {
      try {
        this.initScene();
        if (!this.renderer) return;

        this.initSharedPacketResources();
        this.createRadialGrid();
        this.createOrbitalRings();
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
      }
    });
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.pendingTimers.forEach((timer) => clearTimeout(timer));
    this.pendingTimers.clear();

    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    this.removePointerEvents();

    this.dataPackets.forEach((p) => {
      (p.mesh.material as Material).dispose();
      (p.glowSprite.material as Material).dispose();
    });
    this.dataPackets = [];

    this.pooledPulseLights.forEach((l) => l.dispose());
    this.pooledPulseLights = [];

    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];

    this.renderer?.dispose();
    this.scene?.clear();
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.mainGroup = null;
    this.sharedPacketGeo = null;
    this.sharedGlowTexture = null;
    this.causalNodes = [];
    this.connections = [];
  }

  public focusNodeByName(nodeName: CapabilityName): void {
    const idx = this.causalNodes.findIndex((n) => n.name === nodeName);
    if (idx === -1) return;

    this.triggerCausalCascade(idx);
    this.activeNodeLabel = nodeName;
    this.cdr.markForCheck();
  }

  private getLangText(en: string, pt: string, es: string): string {
    if (this.lang === 'en') return en;
    if (this.lang === 'es') return es;
    return pt;
  }

  private updateLocalizedHints(): void {
    this.idleHintText = this.getLangText(
      'Click any node to inspect',
      'Clique em um nó para inspecionar',
      'Haz clic en un nodo para inspeccionar'
    );
    this.clickHintText = this.getLangText(
      'Click to inspect',
      'Clique para abrir',
      'Clic para abrir'
    );
    this.cdr.markForCheck();
  }

  private scheduleTimer(fn: () => void, ms: number): void {
    const id = setTimeout(() => {
      this.pendingTimers.delete(id);
      fn();
    }, ms);
    this.pendingTimers.add(id);
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth || 800;
    const height = canvas.clientHeight || 500;

    this.startTime = performance.now();

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(28, width / height, 0.1, 100);
    this.camera.position.set(0, 6.0, this.targetZoomZ);
    this.camera.lookAt(0, -0.15, 0);

    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.mainGroup = new Group();
    this.scene.add(this.mainGroup);

    const ambientLight = new AmbientLight(0xe2e8f0, 0.75);
    this.scene.add(ambientLight);

    const keyLight = new DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(6, 14, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0002;
    this.scene.add(keyLight);

    const fillLight = new DirectionalLight(0xc7d2fe, 1.3);
    fillLight.position.set(-6, 8, -4);
    this.scene.add(fillLight);

    const rimLight = new DirectionalLight(0x60a5fa, 1.8);
    rimLight.position.set(-8, 4, -6);
    this.scene.add(rimLight);

    const topLight = new DirectionalLight(0xf8fafc, 1.2);
    topLight.position.set(0, 11, 2);
    this.scene.add(topLight);

    for (let i = 0; i < 2; i++) {
      const pulseLight = new PointLight(0x60a5fa, 0, 3.8);
      this.mainGroup.add(pulseLight);
      this.pooledPulseLights.push(pulseLight);
    }
  }

  private initSharedPacketResources(): void {
    this.sharedPacketGeo = new SphereGeometry(0.065, 14, 14);
    this.disposables.push(this.sharedPacketGeo);

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.35, 'rgba(96, 165, 250, 0.7)');
      grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }

    this.sharedGlowTexture = new CanvasTexture(canvas);
    this.sharedGlowTexture.minFilter = LinearFilter;
    this.sharedGlowTexture.magFilter = LinearFilter;
    this.disposables.push(this.sharedGlowTexture);
  }

  private createRadialGrid(): void {
    if (!this.mainGroup) return;

    const size = 18;
    const divisions = 36;
    const step = size / divisions;
    const half = size / 2;
    const maxRadius = half * 0.96;

    const positions: number[] = [];
    const colors: number[] = [];

    const pushSegment = (x1: number, z1: number, x2: number, z2: number) => {
      const d1 = Math.hypot(x1, z1) / maxRadius;
      const d2 = Math.hypot(x2, z2) / maxRadius;
      if (d1 > 1.05 && d2 > 1.05) return;

      const f1 = Math.max(0, 1 - d1 * d1);
      const f2 = Math.max(0, 1 - d2 * d2);

      positions.push(x1, -0.46, z1, x2, -0.46, z2);
      colors.push(
        0.22 * f1, 0.28 * f1, 0.44 * f1,
        0.22 * f2, 0.28 * f2, 0.44 * f2
      );
    };

    for (let i = -half; i <= half + 0.001; i += step) {
      for (let j = -half; j < half - 0.001; j += step) {
        pushSegment(j, i, j + step, i);
        pushSegment(i, j, i, j + step);
      }
    }

    const gridGeo = new BufferGeometry();
    gridGeo.setAttribute('position', new Float32BufferAttribute(positions, 3));
    gridGeo.setAttribute('color', new Float32BufferAttribute(colors, 3));

    const gridMat = new LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
    });

    this.gridMesh = new LineSegments(gridGeo, gridMat);
    this.mainGroup.add(this.gridMesh);
    this.disposables.push(gridGeo, gridMat);
  }

  private createOrbitalRings(): void {
    if (!this.mainGroup) return;

    const outerRingGeo = new RingGeometry(4.56, 4.61, 96);
    outerRingGeo.rotateX(-Math.PI / 2);
    outerRingGeo.scale(1, 1, 2.6 / 4.6);

    const outerRingMat = new MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    });

    const outerRing = new Mesh(outerRingGeo, outerRingMat);
    outerRing.position.y = -0.44;
    this.mainGroup.add(outerRing);
    this.disposables.push(outerRingGeo, outerRingMat);
  }

  private createArchitectureTopology(): void {
    if (!this.mainGroup) return;

    const coreBoxGeo = new BoxGeometry(0.98, 0.22, 0.5);
    const coreAccentGeo = new BoxGeometry(0.74, 0.03, 0.06);
    const supportBoxGeo = new BoxGeometry(1.48, 0.18, 0.56);
    const supportAccentGeo = new BoxGeometry(1.1, 0.028, 0.055);
    const coreEdges = new EdgesGeometry(coreBoxGeo);
    const supportEdges = new EdgesGeometry(supportBoxGeo);

    this.disposables.push(
      coreBoxGeo,
      coreAccentGeo,
      supportBoxGeo,
      supportAccentGeo,
      coreEdges,
      supportEdges
    );

    const rx = 4.6;
    const rz = 2.6;

    CORE_LOOP_NODES.forEach((name, i) => {
      const nodeGroup = new Group();
      const theta = (i / CORE_LOOP_NODES.length) * Math.PI * 2 + Math.PI / 6;
      const posX = Math.cos(theta) * rx;
      const posZ = Math.sin(theta) * rz;

      const chassisMat = new MeshPhysicalMaterial({
        color: this.COLOR_CHASSIS_CORE,
        metalness: 0.72,
        roughness: 0.22,
        clearcoat: 0.45,
        clearcoatRoughness: 0.2,
      });

      const accentMat = new MeshBasicMaterial({
        color: this.COLOR_ACCENT_IDLE.clone(),
        transparent: true,
        opacity: 0.9,
      });

      const edgeMat = new LineBasicMaterial({
        color: this.COLOR_EDGE_BASE.getHex(),
        transparent: true,
        opacity: 0.9,
      });
      const glowMat = new LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.0,
      });

      this.disposables.push(chassisMat, accentMat, edgeMat, glowMat);

      const baseChassis = new Mesh(coreBoxGeo, chassisMat);
      baseChassis.castShadow = true;
      baseChassis.receiveShadow = true;
      nodeGroup.add(baseChassis);

      const accentBar = new Mesh(coreAccentGeo, accentMat);
      accentBar.position.set(0, 0.125, 0.14);
      nodeGroup.add(accentBar);

      const borderLines = new LineSegments(coreEdges, edgeMat);
      nodeGroup.add(borderLines);

      const pulseGlowLines = new LineSegments(coreEdges, glowMat);
      pulseGlowLines.scale.set(1.045, 1.045, 1.045);
      nodeGroup.add(pulseGlowLines);

      const labelSprite = this.createLabelSprite(name, `CORE LOOP // 0${i + 1}`, false);
      labelSprite.position.set(0, 0.36, 0);
      nodeGroup.add(labelSprite);

      const metaSprite = this.createMetaSprite('INTERACTIVE NODE');
      metaSprite.position.set(0, -0.27, 0);
      nodeGroup.add(metaSprite);

      nodeGroup.position.set(posX, 0, posZ);
      this.mainGroup!.add(nodeGroup);

      this.causalNodes.push({
        name,
        index: i,
        isSupporting: false,
        group: nodeGroup,
        baseChassis,
        accentBar,
        labelSprite,
        metaSprite,
        borderLines,
        pulseGlowLines,
        basePosition: new Vector3(posX, 0, posZ),
        targetY: 0,
        currentY: 0,
        velocityY: 0,
        edgePulseEnergy: 0,
      });
    });

    const supportingCoords = [
      { name: 'KNOWLEDGE' as const, tag: 'DATA LAYER', pos: new Vector3(-1.8, -0.2, 0) },
      { name: 'HUMAN JUDGMENT' as const, tag: 'GOVERNANCE', pos: new Vector3(1.8, -0.2, 0) },
    ];

    supportingCoords.forEach((sup, idx) => {
      const nodeGroup = new Group();

      const chassisMat = new MeshPhysicalMaterial({
        color: this.COLOR_CHASSIS_SUPPORT,
        metalness: 0.68,
        roughness: 0.25,
        clearcoat: 0.35,
      });

      const accentMat = new MeshBasicMaterial({
        color: new Color(0x38bdf8),
        transparent: true,
        opacity: 0.85,
      });

      const edgeMat = new LineBasicMaterial({
        color: this.COLOR_EDGE_SUPPORT.getHex(),
        transparent: true,
        opacity: 0.9,
      });
      const glowMat = new LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.0,
      });
      this.disposables.push(chassisMat, accentMat, edgeMat, glowMat);

      const baseChassis = new Mesh(supportBoxGeo, chassisMat);
      baseChassis.castShadow = true;
      baseChassis.receiveShadow = true;
      nodeGroup.add(baseChassis);

      const accentBar = new Mesh(supportAccentGeo, accentMat);
      accentBar.position.set(0, 0.104, 0.16);
      nodeGroup.add(accentBar);

      const borderLines = new LineSegments(supportEdges, edgeMat);
      nodeGroup.add(borderLines);

      const pulseGlowLines = new LineSegments(supportEdges, glowMat);
      pulseGlowLines.scale.set(1.045, 1.045, 1.045);
      nodeGroup.add(pulseGlowLines);

      const labelSprite = this.createLabelSprite(sup.name, sup.tag, true);
      labelSprite.position.set(0, 0.33, 0);
      nodeGroup.add(labelSprite);

      const metaSprite = this.createMetaSprite('BASE LAYER');
      metaSprite.position.set(0, -0.25, 0);
      nodeGroup.add(metaSprite);

      nodeGroup.position.copy(sup.pos);
      this.mainGroup!.add(nodeGroup);

      this.causalNodes.push({
        name: sup.name,
        index: CORE_LOOP_NODES.length + idx,
        isSupporting: true,
        group: nodeGroup,
        baseChassis,
        accentBar,
        labelSprite,
        metaSprite,
        borderLines,
        pulseGlowLines,
        basePosition: sup.pos.clone(),
        targetY: -0.2,
        currentY: -0.2,
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

    this.addBezierConnection(6, 1);
    this.addBezierConnection(7, 3);
  }

  private addBezierConnection(fromIdx: number, toIdx: number): void {
    const start = this.causalNodes[fromIdx].basePosition;
    const end = this.causalNodes[toIdx].basePosition;

    const mid = new Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.y += 0.42;

    const curve = new QuadraticBezierCurve3(start, mid, end);
    const tubeGeo = new TubeGeometry(curve, 32, 0.014, 8, false);
    const tubeMat = new MeshBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.65,
    });

    const tubeMesh = new Mesh(tubeGeo, tubeMat);
    this.mainGroup!.add(tubeMesh);
    this.disposables.push(tubeGeo, tubeMat);

    this.connections.push({
      curve,
      tubeMesh,
      fromIndex: fromIdx,
      toIndex: toIdx,
    });
  }

  private createLabelSprite(title: string, indexTag: string, isSupporting: boolean): Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = 420 * dpr;
    canvas.height = 68 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '600 10.5px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = isSupporting ? '#7dd3fc' : '#60a5fa';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.letterSpacing = '0.14em';
    ctx.fillText(indexTag, 210, 6);

    ctx.font = '700 14.5px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '0.09em';
    ctx.fillText(title, 210, 25);

    const texture = new CanvasTexture(canvas);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    this.disposables.push(texture);

    const mat = new SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.98,
      depthWrite: false,
    });
    this.disposables.push(mat);

    const sprite = new Sprite(mat);
    sprite.scale.set(isSupporting ? 2.5 : 2.15, 0.35, 1);
    return sprite;
  }

  private createMetaSprite(text: string): Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width = 256 * dpr;
    canvas.height = 36 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '500 9.5px "Geist Mono", "SF Mono", monospace';
    ctx.fillStyle = 'rgba(203, 213, 225, 0.78)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '0.12em';
    ctx.fillText(text, 128, 18);

    const texture = new CanvasTexture(canvas);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    this.disposables.push(texture);

    const mat = new SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    });
    this.disposables.push(mat);

    const sprite = new Sprite(mat);
    sprite.scale.set(1.38, 0.2, 1);
    return sprite;
  }

  private triggerCausalCascade(sourceIndex: number): void {
    const node = this.causalNodes[sourceIndex];
    if (!node) return;

    node.velocityY = 0.14;
    node.edgePulseEnergy = 1.0;

    this.connections.forEach((conn) => {
      if (conn.fromIndex === sourceIndex) {
        this.spawnDataPacket(conn.curve, this.COLOR_WHITE, 0.032);
        this.spawnDataPacket(conn.curve, this.COLOR_BRIGHT_GLOW, 0.023);

        const destNode = this.causalNodes[conn.toIndex];
        this.scheduleTimer(() => {
          if (destNode) {
            destNode.velocityY = -0.06;
            destNode.edgePulseEnergy = 0.9;
          }
        }, 180);
      }
    });
  }

  private spawnDataPacket(curve: QuadraticBezierCurve3, color: Color, speed: number): void {
    if (!this.mainGroup || !this.sharedPacketGeo || !this.sharedGlowTexture) return;
    if (this.dataPackets.length >= 24) return;

    const pMat = new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 1.0,
    });
    const mesh = new Mesh(this.sharedPacketGeo, pMat);

    const glowMat = new SpriteMaterial({
      map: this.sharedGlowTexture,
      color,
      transparent: true,
      opacity: 0.95,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    const glowSprite = new Sprite(glowMat);
    glowSprite.scale.set(0.46, 0.46, 1);
    mesh.add(glowSprite);

    this.mainGroup.add(mesh);

    this.dataPackets.push({
      mesh,
      glowSprite,
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
    this.camera.lookAt(0, -0.15, 0);

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

      const targetY = node.isSupporting ? -0.2 : 0;
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

      const borderMat = node.borderLines.material as LineBasicMaterial;
      const baseColor = node.isSupporting ? this.COLOR_EDGE_SUPPORT : this.COLOR_EDGE_BASE;
      borderMat.color.lerpColors(baseColor, this.COLOR_BRIGHT_GLOW, effectivePulse);

      const accentMat = node.accentBar.material as MeshBasicMaterial;
      accentMat.color.lerpColors(this.COLOR_ACCENT_IDLE, this.COLOR_WHITE, effectivePulse * 0.75);

      const glowMat = node.pulseGlowLines.material as LineBasicMaterial;
      glowMat.opacity = effectivePulse * 0.95;
      node.pulseGlowLines.scale.setScalar(1.03 + effectivePulse * 0.06);

      if (Math.floor(elapsed * 0.35) % CAPABILITY_NODES.length === i && Math.random() < 0.006) {
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
        (p.mesh.material as Material).dispose();
        (p.glowSprite.material as Material).dispose();
        this.dataPackets.splice(i, 1);
        continue;
      }

      const point = p.curve.getPoint(p.progress);
      p.mesh.position.copy(point);

      const fade = Math.sin(p.progress * Math.PI);
      (p.mesh.material as MeshBasicMaterial).opacity = 0.35 + fade * 0.65;
      (p.glowSprite.material as SpriteMaterial).opacity = fade * 0.95;
    }

    for (let i = 0; i < this.pooledPulseLights.length; i++) {
      const light = this.pooledPulseLights[i];
      const pkt = this.dataPackets[i];
      if (pkt) {
        light.position.copy(pkt.mesh.position);
        light.intensity = Math.sin(pkt.progress * Math.PI) * 2.2;
      } else {
        light.intensity = 0;
      }
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
      }
    }
    this.isDragging = false;
    this.activePointerId = null;
  };

  private readonly onWheel = (e: WheelEvent): void => {
    if (!e.ctrlKey && !e.metaKey) {
      return;
    }
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
      this.isHoveringNode = foundIndex !== -1;
      this.activeNodeLabel = foundIndex !== -1 ? this.causalNodes[foundIndex].name : null;

      if (foundIndex !== -1) {
        this.triggerCausalCascade(foundIndex);
      }
      this.cdr.markForCheck();
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

  public zoomIn(): void {
    this.targetZoomZ = Math.max(this.minZoomZ, this.targetZoomZ - 1.5);
    this.cdr.markForCheck();
  }

  public zoomOut(): void {
    this.targetZoomZ = Math.min(this.maxZoomZ, this.targetZoomZ + 1.5);
    this.cdr.markForCheck();
  }

  public resetZoom(): void {
    this.targetZoomZ = 8.4;
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
    } else {
      this.targetZoomZ = 8.4;
    }
    this.userRotation.x = 0;
    this.userRotation.y = 0;
    this.targetRotation.x = 0;
    this.targetRotation.y = 0;
    this.currentRotation.x = 0;
    this.currentRotation.y = 0;
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
