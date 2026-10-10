import { test, expect } from '@playwright/test';

test.describe('Non-Functional Testing: Performance & Core Web Vitals Suite', () => {

  test('should satisfy Navigation Timing & TTFB benchmarks', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });

    const timing = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (!nav) return null;
      return {
        dnsTime: nav.domainLookupEnd - nav.domainLookupStart,
        tcpTime: nav.connectEnd - nav.connectStart,
        ttfb: nav.responseStart - nav.requestStart,
        domInteractive: nav.domInteractive,
        domContentLoaded: nav.domContentLoadedEventEnd,
        loadTime: nav.loadEventEnd,
      };
    });

    if (timing) {
      expect(timing.ttfb).toBeLessThan(3000);
      expect(timing.domContentLoaded).toBeLessThan(6000);
    }
  });

  test('should measure First Contentful Paint (FCP) within acceptable range', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });

    const fcp = await page.evaluate(async () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
      return fcpEntry ? fcpEntry.startTime : null;
    });

    if (fcp !== null) {
      expect(fcp).toBeLessThan(3500);
    }
  });

  test('should ensure Cumulative Layout Shift (CLS) is minimal (< 0.15)', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    const cls = await page.evaluate(() => {
      let totalCls = 0;
      const entries = performance.getEntriesByType('layout-shift') as Array<PerformanceEntry & { value: number; hadRecentInput: boolean }>;
      for (const entry of entries) {
        if (!entry.hadRecentInput) {
          totalCls += entry.value;
        }
      }
      return totalCls;
    });

    expect(cls).toBeLessThan(0.15);
  });

  test('should maintain optimal DOM complexity (total nodes < 2500)', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const totalDomNodes = await page.evaluate(() => {
      return document.getElementsByTagName('*').length;
    });

    expect(totalDomNodes).toBeLessThan(2500);
    expect(totalDomNodes).toBeGreaterThan(20);
  });

  test('should produce zero 4xx or 5xx HTTP resource errors on page load', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('response', (response) => {
      const status = response.status();
      if (status >= 400 && !response.url().includes('favicon')) {
        failedRequests.push(`${response.url()} [${status}]`);
      }
    });

    await page.goto('/', { waitUntil: 'networkidle' });
    expect(failedRequests).toEqual([]);
  });

});
