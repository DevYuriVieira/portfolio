export interface AiFeature {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface AiNodeDetail {
  readonly id: string;
  readonly index: string;
  readonly name: string;
  readonly category: string;
  readonly summary: string;
  readonly practicalApplications: readonly string[];
  readonly tools: readonly string[];
}

export interface AiManifestoData {
  readonly badge: string;
  readonly title: string;
  readonly subtitle: string;
  readonly manifesto: string;
  readonly features: readonly AiFeature[];
  readonly closingStatement: string;
  readonly nodeDetails: Record<string, AiNodeDetail>;
}
