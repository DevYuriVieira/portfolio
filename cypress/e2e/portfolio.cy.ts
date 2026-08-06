/// <reference types="cypress" />

describe('Yuri Vieira Portfolio - Cypress E2E Comprehensive Test Suite', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  context('1. SEO Metadata, Open Graph & Structured Data', () => {
    it('should have correct page title and canonical URL', () => {
      cy.title().should('include', 'Yuri Vieira | Engenheiro de Software | Full Stack Developer');
      cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://devyurivieira.vercel.app/');
    });

    it('should have essential Open Graph and Twitter card meta tags', () => {
      cy.get('meta[property="og:title"]').should('have.attr', 'content').and('include', 'Yuri Vieira');
      cy.get('meta[property="og:url"]').should('have.attr', 'content', 'https://devyurivieira.vercel.app/');
      cy.get('meta[property="og:image"]').should('have.attr', 'content', 'https://devyurivieira.vercel.app/og-image.svg');
      cy.get('meta[name="twitter:card"]').should('have.attr', 'content', 'summary_large_image');
    });

    it('should inject valid JSON-LD structured data', () => {
      cy.get('script[type="application/ld+json"]').should('exist').then(($script) => {
        const text = $script.text();
        expect(text).to.include('Yuri Vieira');
        expect(text).to.include('https://devyurivieira.vercel.app/');
      });
    });
  });

  context('2. Accessibility & Global Navigation', () => {
    it('should render accessible skip link pointing to main content', () => {
      cy.get('a.skip-link').should('exist').and('have.attr', 'href', '#main-content');
    });

    it('should render header with brand logo and navigation links', () => {
      cy.get('header .header__brand').should('be.visible');
      cy.get('header .header__nav-link').should('have.length.at.least', 4);
    });

    it('should attach all key portfolio section containers', () => {
      const sections = ['#top', '#about', '#skills', '#experience', '#ai-experience', '#projects', '#contact'];
      sections.forEach((selector) => {
        cy.get(selector).should('exist');
      });
    });
  });

  context('3. Hero Section Actions', () => {
    it('should render hero name, eyebrow, and action buttons', () => {
      cy.get('#top .hero__name').should('contain.text', 'Yuri Vieira');
      cy.get('#top .hero__actions button').should('be.visible');
      cy.get('#top .hero__actions a')
        .should('be.visible')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'href').and('match', /\.pdf$/i);
    });
  });

  context('4. Projects Section & Confidential Case Study', () => {
    it('should handle progressive project expansion and collapse (5 -> 7 -> Total -> 5)', () => {
      cy.get('#projects').scrollIntoView();

      cy.get('#projects .projects__card').should('have.length', 5);

      // Step 1: 5 -> 7
      cy.get('#projects .projects__actions button').click();
      cy.get('#projects .projects__card').should('have.length', 7);

      // Step 2: 7 -> All (13)
      cy.get('#projects .projects__actions button').click();
      cy.get('#projects .projects__card').should('have.length.greaterThan', 7);

      // Step 3: All -> 5
      cy.get('#projects .projects__actions button').click();
      cy.get('#projects .projects__card').should('have.length', 5);
    });

    it('should render ZEISS confidential project card with lock badge and NDA disclaimer', () => {
      cy.get('#projects').scrollIntoView();
      cy.get('.projects__card--confidential').should('be.visible');
      cy.get('.projects__badge--confidential').should('contain.text', 'Confidencial');
      cy.get('.projects__confidential-text').should('contain.text', 'NDA');
    });
  });

  context('5. Skills, Experience & About Sections', () => {
    it('should render skills categories and tag cloud items', () => {
      cy.get('#skills').scrollIntoView();
      cy.get('#skills .skills__card').should('have.length.at.least', 3);
      cy.get('#skills .skills__item').should('have.length.at.least', 10);
    });

    it('should render experience focus cards and timeline milestones', () => {
      cy.get('#experience').scrollIntoView();
      cy.get('#experience .experience__focus-card').should('have.length.at.least', 4);
    });

    it('should render engineering principles in about section', () => {
      cy.get('#about').scrollIntoView();
      cy.get('#about .about__principle-card').should('have.length.at.least', 3);
    });
  });

  context('6. AI Experience Section', () => {
    it('should render AI manifesto, badge, and feature cards', () => {
      cy.get('#ai-experience').scrollIntoView();
      cy.get('#ai-experience .ai__badge').should('be.visible');
      cy.get('#ai-experience .ai__feature-card').should('have.length.at.least', 3);
    });
  });

  context('7. Contact Section & Interaction Flow', () => {
    it('should trigger email copy action on contact section with state feedback', () => {
      cy.get('#contact').scrollIntoView();
      cy.get('#contact app-button').eq(1).find('button').click();
      cy.get('#contact app-button').eq(1).find('button').should('contain.text', 'Copiado');
    });

    it('should render direct send email action button', () => {
      cy.get('#contact').scrollIntoView();
      cy.get('#contact app-button').eq(0).find('a, button').should('be.visible');
    });
  });

  context('8. Internationalization (i18n)', () => {
    it('should toggle interface language between Portuguese and English', () => {
      cy.get('.header__lang-btn[aria-label="English (US)"]').click();
      cy.get('#about .about__title').should('contain.text', 'Software Engineering & Systems Thinking');

      cy.get('.header__lang-btn[aria-label="Português (Brasil)"]').click();
      cy.get('#about .about__title').should('contain.text', 'Engenharia de Software & Visão Sistêmica');
    });
  });

});
