const { test, expect } = require("@playwright/test");

test.describe("Swag Labs E2E test", async () => {
  test.beforeEach(async ({ page }) => {
    //login before each test
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("homepage has Swag Labs in title", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test("test if Menu button works as expected", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await expect(page.locator(".bm-menu")).toBeVisible();
  });

  test("test About menu link", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await expect(page.locator(".bm-menu")).toBeVisible();
    await page.locator('[data-test="about-sidebar-link"]').click();
    await expect(page).toHaveURL("https://saucelabs.com/");
  });

  test("test Logout button inside menu", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await expect(page.locator(".bm-menu")).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test("test Reset app state button inside menu", async ({ page }) => {
    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      "1"
    );
    await page.getByRole("button", { name: "Open Menu" }).click();
    await expect(page.locator(".bm-menu")).toBeVisible();
    await page.locator('[data-test="reset-sidebar-link"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      ""
    );
    //found a bug on a page connected to remove button on this step. will add code for taking a screenshot
    await page.screenshot({ path: "./screenshots/screenshot.png" });
    await page.locator('[data-test="inventory-sidebar-link"]').click();
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test("test filter", async ({ page }) => {});

  test("user can add items to cart and checkout", async ({ page }) => {
    await page.locator('[data-test="item-4-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      "1"
    );
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-quantity"]')).toHaveText("1");
    await page.locator('[data-test="continue-shopping"]').click();
    await expect(
      page.locator('[data-test="remove-sauce-labs-backpack"]')
    ).toBeVisible();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      ""
    );
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
  });

  test("test checkout flow", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill("John");
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("Doe");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("121212");
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await expect(page.locator('[data-test="payment-info-label"]')).toHaveText(
      "Payment Information:"
    );
    await expect(page.locator('[data-test="shipping-info-label"]')).toHaveText(
      "Shipping Information:"
    );
    await expect(page.locator('[data-test="total-info-label"]')).toHaveText(
      "Price Total"
    );
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("test footer", async ({ page }) => {
    //tests here
  });
});
