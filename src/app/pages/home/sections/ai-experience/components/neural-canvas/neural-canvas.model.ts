import type {
  Color,
  Group,
  Line,
  LineSegments,
  Mesh,
  PointLight,
  QuadraticBezierCurve3,
  Sprite,
  Vector3,
} from 'three';

export const CORE_LOOP_NODES = [
  'OBSERVE',
  'CONTEXT',
  'REASONING',
  'DECISION',
  'EXECUTION',
  'VERIFICATION',
] as const;

export const SUPPORTING_LAYER_NODES = [
  'KNOWLEDGE',
  'HUMAN JUDGMENT',
] as const;

export const CAPABILITY_NODES = [
  ...CORE_LOOP_NODES,
  ...SUPPORTING_LAYER_NODES,
] as const;

export type CapabilityName = (typeof CAPABILITY_NODES)[number];

export interface CausalNode {
  name: CapabilityName;
  index: number;
  isSupporting: boolean;
  group: Group;
  baseChassis: Mesh;
  labelSprite: Sprite;
  metaSprite: Sprite;
  borderLines: LineSegments;
  pulseGlowLines: LineSegments;
  basePosition: Vector3;
  targetY: number;
  currentY: number;
  velocityY: number;
  edgePulseEnergy: number;
}

export interface ConnectionLine {
  curve: QuadraticBezierCurve3;
  lineMesh: Line;
  fromIndex: number;
  toIndex: number;
}

export interface DataPacket {
  mesh: Mesh;
  light: PointLight;
  curve: QuadraticBezierCurve3;
  progress: number;
  speed: number;
  color: Color;
}
