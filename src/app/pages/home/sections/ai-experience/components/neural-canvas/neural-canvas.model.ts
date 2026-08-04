import * as THREE from 'three';

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
  group: THREE.Group;
  baseChassis: THREE.Mesh;
  labelSprite: THREE.Sprite;
  metaSprite: THREE.Sprite;
  borderLines: THREE.LineSegments;
  pulseGlowLines: THREE.LineSegments;
  basePosition: THREE.Vector3;
  targetY: number;
  currentY: number;
  velocityY: number;
  edgePulseEnergy: number;
}

export interface ConnectionLine {
  curve: THREE.QuadraticBezierCurve3;
  lineMesh: THREE.Line;
  fromIndex: number;
  toIndex: number;
}

export interface DataPacket {
  mesh: THREE.Mesh;
  light: THREE.PointLight;
  curve: THREE.QuadraticBezierCurve3;
  progress: number;
  speed: number;
  color: THREE.Color;
}
