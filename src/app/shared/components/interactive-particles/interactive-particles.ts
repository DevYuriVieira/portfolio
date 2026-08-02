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

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  angle: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  hue: number; // 190 to 220 (Cyan to Bright Blue)
}

@Component({
  selector: 'app-interactive-particles',
  template: `<canvas #canvas class="particles-bg" aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }
    .particles-bg {
      width: 100%;
      height: 100%;
      display: block;
      opacity: 0.95;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveParticles implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  private particles: Particle[] = [];
  private count = 75;

  private mouse = {
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    isDown: false,
    prevX: -9999,
    prevY: -9999,
  };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.prefersReducedMotion()) return;

    this.zone.runOutsideAngular(() => {
      this.initCanvas();
      this.createParticles();
      this.setupEvents();
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.resizeObserver?.disconnect();
    this.removeEvents();
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
  }

  private createParticles(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.particles = [];

    // Responsive count for vivid density
    this.count = width < 768 ? 45 : 85;

    for (let i = 0; i < this.count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const speed = 0.4 + Math.random() * 0.7; // Active continuous speed
      const angle = Math.random() * Math.PI * 2;
      const baseAlpha = 0.35 + Math.random() * 0.45; // High brightness

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        speed,
        angle,
        radius: 1.8 + Math.random() * 2.2, // Larger glowing particle radius
        alpha: baseAlpha,
        baseAlpha,
        phase: Math.random() * Math.PI * 2,
        hue: 190 + Math.random() * 30, // Cyan to electric blue range
      });
    }
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (!this.ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const now = performance.now();

    this.ctx.clearRect(0, 0, width, height);

    // Update and draw all particles with continuous random wander
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Random wander trajectory angle perturbation
      p.angle += (Math.random() - 0.5) * 0.06;
      const targetVx = Math.cos(p.angle) * p.speed;
      const targetVy = Math.sin(p.angle) * p.speed;

      // Smooth velocity interpolation towards wander direction
      p.vx += (targetVx - p.vx) * 0.05;
      p.vy += (targetVy - p.vy) * 0.05;

      p.x += p.vx;
      p.y += p.vy;

      // Smooth breathing glow pulse
      p.alpha = Math.min(0.9, Math.max(0.25, p.baseAlpha + Math.sin(now * 0.0025 + p.phase) * 0.2));

      // Screen boundary bounce / wrap with random angle shift
      if (p.x < -20) {
        p.x = width + 20;
        p.angle = Math.PI - p.angle;
      }
      if (p.x > width + 20) {
        p.x = -20;
        p.angle = Math.PI - p.angle;
      }
      if (p.y < -20) {
        p.y = height + 20;
        p.angle = -p.angle;
      }
      if (p.y > height + 20) {
        p.y = -20;
        p.angle = -p.angle;
      }

      // Mouse drag / hover physics interaction
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = this.mouse.isDown ? 200 : 130;

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * (this.mouse.isDown ? 7.0 : 3.5);
        const angle = Math.atan2(dy, dx);

        p.vx += Math.cos(angle) * force * 0.18 + this.mouse.vx * 0.08;
        p.vy += Math.sin(angle) * force * 0.18 + this.mouse.vy * 0.08;
        p.angle = Math.atan2(p.vy, p.vx); // Redirect motion vector away
      }

      // Glowing radial gradient fill
      const gradRadius = p.radius * 2.8;
      const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gradRadius);
      grad.addColorStop(0, `hsla(${p.hue}, 100%, 85%, ${p.alpha})`);
      grad.addColorStop(0.4, `hsla(${p.hue}, 100%, 55%, ${p.alpha * 0.75})`);
      grad.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, gradRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // Bright inner core dot
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, p.alpha * 1.2)})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
      this.ctx.fill();

      // Proximity connection lines with glowing cyan stroke
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const pdx = p.x - p2.x;
        const pdy = p.y - p2.y;
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pdist < 125) {
          const lineAlpha = (1 - pdist / 125) * 0.22;
          this.ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 100%, 60%, ${lineAlpha})`;
          this.ctx.lineWidth = 0.9;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    // Reset mouse velocity step
    this.mouse.vx = 0;
    this.mouse.vy = 0;
  }

  // Events
  private readonly onPointerMove = (e: PointerEvent): void => {
    if (this.mouse.prevX !== -9999) {
      this.mouse.vx = e.clientX - this.mouse.prevX;
      this.mouse.vy = e.clientY - this.mouse.prevY;
    }
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    this.mouse.prevX = e.clientX;
    this.mouse.prevY = e.clientY;
  };

  private readonly onPointerDown = (e: PointerEvent): void => {
    this.mouse.isDown = true;
    this.onPointerMove(e);
  };

  private readonly onPointerUp = (): void => {
    this.mouse.isDown = false;
  };

  private readonly onResize = (): void => {
    this.resizeCanvas();
    this.createParticles();
  };

  private setupEvents(): void {
    window.addEventListener('pointermove', this.onPointerMove, { passive: true });
    window.addEventListener('pointerdown', this.onPointerDown, { passive: true });
    window.addEventListener('pointerup', this.onPointerUp, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  private removeEvents(): void {
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('resize', this.onResize);
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}

