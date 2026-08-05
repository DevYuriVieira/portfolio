import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { I18nService } from '../i18n/i18n.service';

export interface SeoConfig {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string;
  readonly url?: string;
  readonly image?: string;
}

interface SeoDefaults {
  title: string;
  description: string;
  keywords: string;
}

const SEO_I18N: Record<string, SeoDefaults> = {
  'pt-BR': {
    title: 'Yuri Vieira | Engenheiro de Software | Full Stack Developer',
    description:
      'Portfolio de Yuri Vieira | Engenheiro de Software & Desenvolvedor Full Stack especializado em Java, Spring Boot, TypeScript, React e Angular. Casos de estudo em arquitetura limpa, sistemas distribuídos e alta performance.',
    keywords:
      'Yuri Vieira, Yuri Vieira Engenheiro de Software, Software Engineer, Desenvolvedor Full Stack, Java Developer, React Developer, Angular, Spring Boot, PostgreSQL, TypeScript, Portfolio',
  },
  en: {
    title: 'Yuri Vieira | Software Engineer | Full Stack Developer',
    description:
      "Yuri Vieira's Portfolio | Software Engineer & Full Stack Developer specialized in Java, Spring Boot, TypeScript, React, and Angular. Case studies in clean architecture, distributed systems, and high performance.",
    keywords:
      'Yuri Vieira, Software Engineer, Full Stack Developer, Java Developer, React Developer, Angular, Spring Boot, PostgreSQL, TypeScript, Portfolio',
  },
};

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly i18n = inject(I18nService);

  private readonly defaultUrl = 'https://devyurivieira.vercel.app/';
  private readonly defaultImage = 'https://devyurivieira.vercel.app/og-image.svg';

  public updateSeo(config: SeoConfig = {}): void {
    const lang = this.i18n.currentLang();
    const defaults = SEO_I18N[lang] || SEO_I18N['pt-BR'];

    const title = config.title || defaults.title;
    const description = config.description || defaults.description;
    const keywords = config.keywords || defaults.keywords;
    const url = config.url || this.defaultUrl;
    const image = config.image || this.defaultImage;

    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: 'Yuri Vieira' });

    // Open Graph Metadata
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:image', content: image });

    // Twitter Card Metadata
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
  }
}
