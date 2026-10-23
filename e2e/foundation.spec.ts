import { expect, test } from "@playwright/test";

const SECTION_IDS = [
  "hero",
  "about",
  "covers",
  "arrangements",
  "album",
  "stock-strip",
  "ads-music",
  "logos",
  "samples-strip",
  "cover-songs",
  "why-me",
  "contacts",
];

const WIDTHS = [320, 768, 1600, 2560];

test("page responds with 200", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
});

test("html lang is uk", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "uk");
});

test("document has the expected title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Денис Булах — гітарист, аранжувальник, звукозапис",
  );
});

test("all 12 sections are present in order", async ({ page }) => {
  await page.goto("/");
  const ids = await page
    .locator("main > section")
    .evaluateAll((els) => els.map((el) => el.id));
  expect(ids).toEqual(SECTION_IDS);
});

for (const width of WIDTHS) {
  test(`no horizontal scroll at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
