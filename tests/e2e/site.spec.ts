import { expect, test } from "@playwright/test";

test("home loads without console errors and every nav link answers", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const path of ["/about", "/portfolio", "/insights", "/contact"]) {
    const r = await page.request.get(path);
    expect(r.status(), path).toBe(200);
  }
  expect(errors).toEqual([]);
});

test("leadership is retired: /leadership redirects to /about and no one is named", async ({ page }) => {
  await page.goto("/leadership");
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("header nav").getByRole("link", { name: "Leadership" })).toHaveCount(0);
  await page.goto("/");
  await expect(page.locator("#leadership")).toHaveCount(0);
  await expect(page.getByText("Alexander Reinhardt")).toHaveCount(0);
  const llms = await (await page.request.get("/llms.txt")).text();
  expect(llms).not.toMatch(/Leadership|Reinhardt|Wisner/);
});

test("contact form blocks an empty submit with an error summary", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /submit inquiry/i }).click();
  // Scoped to the form: Next.js mounts its own role="alert" route announcer.
  const alert = page.locator('form [role="alert"]');
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/problems with the form/);
});
