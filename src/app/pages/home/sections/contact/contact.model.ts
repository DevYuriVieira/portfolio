export interface ContactInfo {
  readonly email: string;
  readonly location: string;
  readonly availability: string;
  readonly linkedinUrl: string;
  readonly githubUrl: string;
}

export interface ContactSectionData {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly info: ContactInfo;
}
