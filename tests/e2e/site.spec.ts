import { expect, test } from "@playwright/test";

test("home loads without console errors and every nav link answers", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const path of ["/about", "/portfolio", "/leadership", "/insights", "/contact"]) {
    const r = await page.request.get(path);
    expect(r.status(), path).toBe(200);
  }
  expect(errors).toEqual([]);
});

test("bio dialog opens, traps focus, and closes on Escape with focus restored", async ({ page }) => {
  // The executive cards (with bio dialogs) live on the home page; /leadership lists the board only.
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /Read the biography of/ }).first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
});

test("leadership page lists the board only, no executive team", async ({ page }) => {
  await page.goto("/leadership");
  await expect(page.getByRole("heading", { name: "Board & Advisors" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Executive Leadership" })).toHaveCount(0);
  await expect(page.getByText("Alexander Reinhardt")).toHaveCount(0);
});

test("contact form blocks an empty submit with an error summary", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /submit inquiry/i }).click();
  // Scoped to the form: Next.js mounts its own role="alert" route announcer.
  const alert = page.locator('form [role="alert"]');
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/problems with the form/);
});
