import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService, Title, Meta],
    });
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update document title and meta tags with defaults', () => {
    service.updateSeo();

    expect(titleService.getTitle()).toBe(
      'Yuri Vieira — Engenheiro de Software | Full Stack Developer'
    );

    const descTag = metaService.getTag('name="description"');
    expect(descTag?.content).toContain('Yuri Vieira');

    const ogTitleTag = metaService.getTag('property="og:title"');
    expect(ogTitleTag?.content).toBe(
      'Yuri Vieira — Engenheiro de Software | Full Stack Developer'
    );
  });

  it('should update meta tags with custom configuration', () => {
    service.updateSeo({
      title: 'Custom Title',
      description: 'Custom Description',
    });

    expect(titleService.getTitle()).toBe('Custom Title');
    const descTag = metaService.getTag('name="description"');
    expect(descTag?.content).toBe('Custom Description');
  });
});
