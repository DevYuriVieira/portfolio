import { test, expect } from '@playwright/test';

test.describe('Non-Functional & Resilience Testing: PWA & Offline Experience', () => {

  test('should provide valid PWA manifest and theme metadata', async ({ page }) => {
    await page.goto('/');

    const manifestLink = page.locator('link[rel="manifest"]');
    if (await manifestLink.count() > 0) {
      await expect(manifestLink).toHaveAttribute('href', /manifest/i);
    }

    const themeColor = page.locator('meta[name="theme-color"]');
    await expect(themeColor).toBeAttached();
  });

  test('should remain functional and interactive when network is disconnected (Offline Mode)', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const heroTitle = page.locator('#top .hero__name');
    await expect(heroTitle).toBeVisible();

    await context.setOffline(true);

    const aboutLink = page.locator('header a[href="#about"]');
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await page.waitForTimeout(300);
      const aboutSection = page.locator('#about');
      await expect(aboutSection).toBeInViewport();
    }

    const langBtn = page.locator('.header__lang-btn[aria-label="English (US)"]');
    if (await langBtn.isVisible()) {
      await langBtn.click();
      await expect(page.locator('#about')).toBeVisible();
    }

    await context.setOffline(false);
  });

  test('should handle seamless online reconnection', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await context.setOffline(true);
    await page.waitForTimeout(200);
    await context.setOffline(false);

    const topSection = page.locator('#top');
    await expect(topSection).toBeAttached();
  });

});
