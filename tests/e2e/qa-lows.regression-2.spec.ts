import { expect, test } from "@playwright/test";

// Regression: ISSUE-002, ISSUE-003, ISSUE-004 — 404 title doubled the firm's
// name, portfolio headings skipped from H1 to H3, footer segment links lost
// their anchors.
// Found by /qa on 2026-09-07
// Report: .gstack/qa-reports/qa-report-www-perkways-com-2026-09-07.md

test("404 title carries the firm's name exactly once", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page).toHaveTitle("Page Not Found | Perkway Group");
});

test("portfolio headings step H1 → H2 with no skipped level", async ({ page }) => {
  await page.goto("/portfolio");
  const levels = await page.locator("h1, h2, h3, h4").evaluateAll((els) => els.map((e) => Number(e.tagName[1])));
  for (let i = 1; i < levels.length; i++) expect(levels[i] - levels[i - 1], `heading ${i}`).toBeLessThanOrEqual(1);
  await expect(page.locator("h2", { hasText: "Real Estate Investments" })).toBeVisible();
});

test("footer segment links land on their segment", async ({ page }) => {
  await page.goto("/about");
  const link = page.locator("footer a", { hasText: "Property Management" });
  await expect(link).toHaveAttribute("href", "/portfolio#property-management");
  await link.click();
  await expect(page).toHaveURL(/\/portfolio#property-management$/);
  await expect(page.locator("#property-management")).toBeInViewport();
});
