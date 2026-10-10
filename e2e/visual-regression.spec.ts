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
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();
    await expect(aboutSection).toBeVisible();

    await expect(aboutSection).toHaveScreenshot('about-section.png', {
      animations: 'disabled',
      mask: [page.locator('canvas')],
      maxDiffPixelRatio: 0.05,
    });
  });

  test('should verify Contact section visual layout', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();

    await expect(contactSection).toHaveScreenshot('contact-section.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.05,
    });
  });

  test('should verify High Contrast Accessibility Theme visual contrast shift', async ({ page }) => {
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
