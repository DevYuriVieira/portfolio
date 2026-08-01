export interface ProjectLinks {
  readonly github?: string;
  readonly demo?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly featured?: boolean;
  readonly contextTag?: string;
  readonly year?: string;
  readonly collaboration?: string;
  readonly client?: string;
  readonly confidential?: boolean;
  readonly description: string;
  readonly context?: string;
  readonly problem?: string;
  readonly solution?: string;
  readonly architectureDecisions?: readonly string[];
  readonly development?: string;
  readonly highlights?: readonly string[];
  readonly results?: string;
  readonly technologies: readonly string[];
  readonly links: ProjectLinks;
}


