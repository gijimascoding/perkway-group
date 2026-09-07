import { expect, test } from "@playwright/test";

// Regression: ISSUE-001 — the navigation bar stayed transparent with white
// text on pages whose first section is paper (legal pages, 404), so the nav
// was invisible until the visitor scrolled.
// Found by /qa on 2026-09-07
// Report: .gstack/qa-reports/qa-report-www-perkways-com-2026-09-07.md

const paperFirst = ["/privacy", "/terms", "/disclosures", "/this-page-does-not-exist"];
const darkFirst = ["/", "/about", "/leadership"];

for (const path of paperFirst) {
  test(`nav is solid from the top on ${path}`, async ({ page }) => {
    await page.goto(path);
    const header = page.locator("header");
    await expect(header).not.toHaveClass(/is-overlay/);
    await expect(header).toHaveCSS("background-color", "rgb(247, 245, 240)");
    await expect(page.locator("header nav a").first()).toHaveCSS("color", "rgb(58, 61, 66)");
  });
}

for (const path of darkFirst) {
  test(`nav still overlays the dark hero on ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("header")).toHaveClass(/is-overlay/);
  });
}
