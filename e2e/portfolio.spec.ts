import { test, expect } from '@playwright/test';

test.describe('Yuri Vieira Portfolio - Comprehensive E2E Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('1. SEO Metadata, Open Graph & Structured Data', () => {
    test('should have correct page title and canonical URL', async ({ page }) => {
      await expect(page).toHaveTitle(/Yuri Vieira | Engenheiro de Software | Full Stack Developer/);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', 'https://devyurivieira.vercel.app/');
    });

    test('should have essential Open Graph and Twitter card meta tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toHaveAttribute('content', /Yuri Vieira/);

      const ogUrl = page.locator('meta[property="og:url"]');
      await expect(ogUrl).toHaveAttribute('content', 'https://devyurivieira.vercel.app/');

      const ogImage = page.locator('meta[property="og:image"]');
      await expect(ogImage).toHaveAttribute('content', 'https://devyurivieira.vercel.app/og-image.png');

      const ogImageType = page.locator('meta[property="og:image:type"]');
      await expect(ogImageType).toHaveAttribute('content', 'image/png');

      const twitterCard = page.locator('meta[name="twitter:card"]');
      await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    });

    test('should inject valid JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
      const content = await jsonLd.innerText();
      expect(content).toContain('Yuri Vieira');
      expect(content).toContain('https://devyurivieira.vercel.app/');
    });
  });

  test.describe('2. Accessibility & Global Navigation', () => {
    test('should render accessible skip link pointing to main content', async ({ page }) => {
      const skipLink = page.locator('a.skip-link');
      await expect(skipLink).toBeAttached();
      await expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('should render header with brand logo and navigation links', async ({ page }) => {
      const brandLogo = page.locator('header .header__brand');
      await expect(brandLogo).toBeVisible();

      const navLinks = page.locator('header .header__nav-link');
      const count = await navLinks.count();
      expect(count).toBeGreaterThanOrEqual(4);
    });

    test('should attach all key portfolio section containers', async ({ page }) => {
      const sections = ['top', 'about', 'skills', 'experience', 'ai-experience', 'projects', 'contact'];

      for (const sectionId of sections) {
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeAttached();
      }
    });
  });

  test.describe('3. Hero Section Actions', () => {
    test('should render hero eyebrow, name and action buttons', async ({ page }) => {
      const heroName = page.locator('#top .hero__name');
      await expect(heroName).toHaveText(/Yuri Vieira/i);

      const projectsCta = page.locator('#top .hero__actions button');
      await expect(projectsCta).toBeVisible();

      const cvLink = page.locator('#top .hero__actions a');
      await expect(cvLink).toBeVisible();
      await expect(cvLink).toHaveAttribute('target', '_blank');
      await expect(cvLink).toHaveAttribute('href', /\.pdf/i);
    });
  });

  test.describe('4. Projects Section & Confidential Case Study', () => {
    test('should handle progressive project expansion and collapse (5 -> 7 -> Total -> 5)', async ({ page }) => {
      const projectsSection = page.locator('#projects');
      await projectsSection.scrollIntoViewIfNeeded();

      const projectCards = page.locator('#projects .projects__card');
      const initialCount = await projectCards.count();
      expect(initialCount).toBe(5);

      const expandButton = page.locator('#projects .projects__actions button');
      await expect(expandButton).toBeVisible();

      // Step 1: 5 -> 7
      await expandButton.click();
      expect(await projectCards.count()).toBe(7);

      // Step 2: 7 -> All (13)
      await expandButton.click();
      const allCount = await projectCards.count();
      expect(allCount).toBeGreaterThan(7);

      // Step 3: All -> 5
      await expandButton.click();
      expect(await projectCards.count()).toBe(5);
    });

    test('should render ZEISS confidential project card with lock badge and NDA disclaimer', async ({ page }) => {
      const projectsSection = page.locator('#projects');
      await projectsSection.scrollIntoViewIfNeeded();

      const confidentialCard = page.locator('.projects__card--confidential');
      await expect(confidentialCard).toBeVisible();

      const lockBadge = confidentialCard.locator('.projects__badge--confidential');
      await expect(lockBadge).toBeVisible();
      await expect(lockBadge).toHaveText(/🔒|Confidencial|Confidential/i);

      const ndaText = confidentialCard.locator('.projects__confidential-text');
      await expect(ndaText).toHaveText(/NDA|Serratec/i);
    });
  });

  test.describe('5. Skills, Experience & About Sections', () => {
    test('should render skills categories and tag cloud items', async ({ page }) => {
      const skillsSection = page.locator('#skills');
      await skillsSection.scrollIntoViewIfNeeded();

      const skillCards = page.locator('#skills .skills__card');
      const cardCount = await skillCards.count();
      expect(cardCount).toBeGreaterThanOrEqual(3);

      const skillItems = page.locator('#skills .skills__item');
      const itemCount = await skillItems.count();
      expect(itemCount).toBeGreaterThan(10);
    });

    test('should render experience focus cards and timeline milestones', async ({ page }) => {
      const expSection = page.locator('#experience');
      await expSection.scrollIntoViewIfNeeded();

      const focusCards = page.locator('#experience .experience__focus-card');
      const count = await focusCards.count();
      expect(count).toBeGreaterThanOrEqual(4);
    });

    test('should render engineering principles in about section', async ({ page }) => {
      const aboutSection = page.locator('#about');
      await aboutSection.scrollIntoViewIfNeeded();

      const principles = page.locator('#about .about__principle-card');
      const count = await principles.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe('6. AI Experience Section & Interactive Controls', () => {
    test('should render AI manifesto, feature cards and zoom toolbar (on desktop)', async ({ page, isMobile }) => {
      const aiSection = page.locator('#ai-experience');
      await aiSection.scrollIntoViewIfNeeded();

      const badge = page.locator('#ai-experience .ai__badge');
      await expect(badge).toBeVisible();

      const featureCards = page.locator('#ai-experience .ai__feature-card');
      const count = await featureCards.count();
      expect(count).toBeGreaterThanOrEqual(3);

      if (!isMobile) {
        const zoomToolbar = page.locator('#ai-experience .ai__zoom-toolbar');
        await expect(zoomToolbar).toBeVisible();

        const zoomButtons = zoomToolbar.locator('button');
        const btnCount = await zoomButtons.count();
        expect(btnCount).toBeGreaterThanOrEqual(3);
      }
    });
  });

  test.describe('7. Contact Section & Interaction Flow', () => {
    test('should handle copy email action with visual state feedback', async ({ page, context }) => {
      await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'http://localhost:4200' });

      const contactSection = page.locator('#contact');
      await contactSection.scrollIntoViewIfNeeded();

      const copyBtnHost = page.locator('#contact app-button').nth(1);
      const copyButton = copyBtnHost.locator('button');
      await expect(copyButton).toBeVisible();

      await copyButton.click();
      await expect(copyButton).toHaveText(/Copiado|Copied/i);
    });

    test('should render direct send email action button', async ({ page }) => {
      const contactSection = page.locator('#contact');
      await contactSection.scrollIntoViewIfNeeded();

      const sendBtn = page.locator('#contact app-button').nth(0).locator('a, button');
      await expect(sendBtn).toBeVisible();
    });
  });

  test.describe('8. Internationalization (i18n)', () => {
    test('should toggle interface language between Portuguese and English', async ({ page }) => {
      const langButton = page.locator('header app-button').filter({ hasText: /EN|PT/i });
      if (await langButton.isVisible()) {
        const initialText = await langButton.innerText();
        await langButton.click();
        const updatedText = await langButton.innerText();
        expect(updatedText).not.toBe(initialText);

        await langButton.click();
        const restoredText = await langButton.innerText();
        expect(restoredText).toBe(initialText);
      }
    });

    test('should update document metadata after switching language', async ({ page }) => {
      await page.locator('.header__lang-btn[aria-label="English (US)"]').click();

      await expect(page).toHaveTitle(/Software Engineer/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        'content',
        /Software Engineer/,
      );
    });
  });

});
