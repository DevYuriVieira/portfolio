import { test, expect } from '@playwright/test';

test.describe('Non-Functional Testing: Security & Defensive Audit Suite', () => {

  test('should protect against reverse tabnabbing on all target="_blank" external links', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#top', { state: 'attached' });

    const blankLinks = page.locator('a[target="_blank"]');
    const count = await blankLinks.count();

    for (let i = 0; i < count; i++) {
      const link = blankLinks.nth(i);
      const rel = (await link.getAttribute('rel')) || '';
      const href = (await link.getAttribute('href')) || '';

      const isProtected = rel.includes('noopener') || rel.includes('noreferrer');
      expect(
        isProtected,
        `Link with href "${href}" must have rel="noopener" or rel="noreferrer" to prevent reverse tabnabbing`,
      ).toBeTruthy();
    }
  });

  test('should enforce secure protocols (HTTPS / Mailto) for all navigation anchors', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const allLinks = page.locator('a[href]');
    const count = await allLinks.count();

    for (let i = 0; i < count; i++) {
      const href = (await allLinks.nth(i).getAttribute('href')) || '';

      if (href.startsWith('#') || href.startsWith('/')) continue;

      const isSecure = href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
      expect(
        isSecure,
        `Link href "${href}" should use secure protocols (https, mailto, tel) and not insecure http://`,
      ).toBeTruthy();
    }
  });

  test('should prevent XSS reflection via URL parameters or hash fragments', async ({ page }) => {
    const maliciousPayload = '<script id="xss-payload">window.__xss_executed=true</script>';
    await page.goto(`/?search=${encodeURIComponent(maliciousPayload)}#${encodeURIComponent(maliciousPayload)}`);

    const injectedScript = page.locator('#xss-payload');
    await expect(injectedScript).toHaveCount(0);

    const xssExecuted = await page.evaluate(() => (window as unknown as { __xss_executed?: boolean }).__xss_executed);
    expect(xssExecuted).toBeUndefined();
  });

  test('should not leak sensitive tokens, private keys or environment secrets in client bundle', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });

    const pageContent = await page.content();

    expect(pageContent).not.toContain('BEGIN PRIVATE KEY');
    expect(pageContent).not.toContain('BEGIN RSA PRIVATE KEY');
    expect(pageContent).not.toMatch(/ai_token\s*=\s*['"][a-zA-Z0-9_\-]{20,}['"]/i);
    expect(pageContent).not.toMatch(/firebase[a-zA-Z0-9_-]*Secret/i);
  });

});
