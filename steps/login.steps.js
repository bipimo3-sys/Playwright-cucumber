import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { chromium } from "playwright";
import dotenv from "dotenv";
dotenv.config({ path: ".env", silent: true });

let browser;
let page;

Given("I open the login page", async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
});

When(
  "I enter username {string} and password {string}",
  async function (username, password) {
    if (username === "<USERNAME>") username = process.env.TS1_USERNAME;
    if (password === "<PASSWORD>") password = process.env.TS1_PASSWORD;
    await page.fill("#username", username);
    await page.fill("#password", password);
  }
);

When("I click the login button", async function () {
  await page.click("#loginBtn");
});

Then("I should see the page title {string}", async function (title) {
  const pageTitle = await page.title();
  expect(pageTitle).to.equal(title);
  await browser.close();
});

Then("I should see the username field", async function () {
  const visible = await page.isVisible("#username");
  expect(visible).to.be.true;
});

Then("I should see the password field", async function () {
  const visible = await page.isVisible("#password");
  expect(visible).to.be.true;
});

Then("I should see the login button enabled", async function () {
  const enabled = await page.isEnabled("#loginBtn");
  expect(enabled).to.be.true;
});

Then("I should see the message {string}", async function (msg) {
  const message = await page.locator("#message").textContent();
  expect(message.trim()).to.equal(msg);
  await browser.close();
});
