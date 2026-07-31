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
  readonly image?: string;
}
