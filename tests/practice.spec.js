const { test, expect } = require("@playwright/test");

test("homepage has Swag Labs in title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);
});

test("User is able to login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("test menu and filter", async ({}) => {
  //tests here
});

test("user can add items to cart and checkout", async ({}) => {
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

test("test footer", async ({}) => {
  //tests here
});
