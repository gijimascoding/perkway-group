import { defineConfig, devices } from "@playwright/test";

/** Browser tests run against a production build on a spare port. */
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: "http://localhost:3123", trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    // Pixel 7 is Chromium-based, so one browser download covers both projects.
    { name: "phone", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "npx next start -p 3123",
    url: "http://localhost:3123",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
