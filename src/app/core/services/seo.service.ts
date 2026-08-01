import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string;
  readonly url?: string;
  readonly image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly defaultConfig: Required<SeoConfig> = {
    title: 'Yuri Vieira — Engenheiro de Software | Full Stack Developer',
    description:
      'Portfolio de Yuri Vieira — Engenheiro de Software & Desenvolvedor Full Stack especializado em Java, Spring Boot, TypeScript, React e Angular. Casos de estudo em arquitetura limpa, sistemas distribuídos e alta performance.',
    keywords:
      'Yuri Vieira, Yuri Vieira Engenheiro de Software, Software Engineer, Desenvolvedor Full Stack, Java Developer, React Developer, Angular, Spring Boot, PostgreSQL, TypeScript, Portfolio',
    url: 'https://devyurivieira.github.io/portfolio/',
    image: 'https://devyurivieira.github.io/portfolio/og-image.png',
  };

  public updateSeo(config: SeoConfig = {}): void {
    const title = config.title || this.defaultConfig.title;
    const description = config.description || this.defaultConfig.description;
    const keywords = config.keywords || this.defaultConfig.keywords;
    const url = config.url || this.defaultConfig.url;
    const image = config.image || this.defaultConfig.image;

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
