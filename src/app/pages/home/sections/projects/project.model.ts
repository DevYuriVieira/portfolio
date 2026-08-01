export interface ProjectLinks {
  readonly github?: string;
  readonly demo?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly links: ProjectLinks;
  readonly confidential?: boolean;
  readonly category?: string;
  readonly client?: string;
  readonly highlights?: readonly string[];
  readonly image?: string;
}

