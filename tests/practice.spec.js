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

  test("thest if the menu button works as expected", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click(); //from here i test the menu. put it in the right test after
    await expect(page.locator(".bm-menu")).toBeVisible();
  });

  test("thest the menu about link", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click(); //from here i test the menu. put it in the right test after
    await expect(page.locator(".bm-menu")).toBeVisible();
    await page.locator('[data-test="about-sidebar-link"]').click();
    await expect(page).toHaveURL("https://saucelabs.com/");
  });

  test("menu works as expected and all the links inside", async ({ page }) => {
    await page.locator().getByRole("button", { name: "Open Menu" }).click();
  });

  test("test filter", async ({ page }) => {
    //tests here
  });

  test("user can add items to cart and checkout", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    //   await page.locator(add to cart first button here).click();
    //here you check the cart does it have a notification of 1
    //here you add a few more items and see if the cart not.is updated
    //here you remove an item and see if the cart updates
    //here you remove all and see if it updates
    //here you add one and go to cart and expect that the right one is there and that the right qty is shown
    //here you proceed to checkout
    //here you try to continue without info
    //here you check the error is there
    //here you input the info
    //here you click on continue
    //here you expect that info is shown on the screen
    //here you cancel
    //here you finish
    //here you expect the thank you screen
    //here you click on the back home button
    //here you expect the starting url
  });

  test("test footer", async ({ page }) => {
    //tests here
  });
});

//TODO:
//1. take screenshot
//2.
