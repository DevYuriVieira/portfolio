import { test, expect } from '@playwright/test';

test.describe('Visual Regression Suite: Snapshot & Pixel Comparison', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test('should verify Header component visual snapshot', async ({ page }) => {
    const header = page.locator('header.header');
    await expect(header).toBeVisible();

    await expect(header).toHaveScreenshot('header-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.05,
    });
  });

  test('should verify About section visual layout structure', async ({ page }) => {
    await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
    const aboutSection = page.locator('app-about #about');
    await expect(aboutSection).toBeVisible({ timeout: 10000 });

    await expect(aboutSection).toHaveScreenshot('about-section.png', {
      animations: 'disabled',
      mask: [page.locator('canvas')],
      maxDiffPixelRatio: 0.05,
    });
  });

  test('should verify Contact section visual layout', async ({ page }) => {
    await page.evaluate(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' }));
    const contactSection = page.locator('app-contact #contact');
    await expect(contactSection).toBeVisible({ timeout: 10000 });

    await expect(contactSection).toHaveScreenshot('contact-section.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.05,
    });
  });

  test('should verify High Contrast Accessibility Theme visual contrast shift', async ({ page }) => {
    const sections = [
      ['about', 'app-about #about'],
      ['experience', 'app-experience #experience'],
      ['skills', 'app-skills #skills'],
      ['projects', 'app-projects #projects'],
      ['ai-experience', 'app-ai-experience #ai-experience'],
      ['contact', 'app-contact #contact'],
    ] as const;

    for (const [id, hydratedSelector] of sections) {
      await page.evaluate((elId) => document.getElementById(elId)?.scrollIntoView({ behavior: 'instant' }), id);
      await expect(page.locator(hydratedSelector)).toBeVisible({ timeout: 10000 });
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

    const a11yToggle = page.locator('.a11y-trigger, app-accessibility-widget button').first();
    if (await a11yToggle.isVisible()) {
      await a11yToggle.click();
      await page.waitForTimeout(300);

      const highContrastBtn = page.locator('button:has-text("Alto Contraste"), button:has-text("High Contrast")').first();
      if (await highContrastBtn.isVisible()) {
        await highContrastBtn.click();
        await page.waitForTimeout(400);

        const body = page.locator('body');
        await expect(body).toHaveScreenshot('high-contrast-mode.png', {
          animations: 'disabled',
          mask: [page.locator('canvas')],
          maxDiffPixelRatio: 0.08,
        });
      }
    }
  });

});
