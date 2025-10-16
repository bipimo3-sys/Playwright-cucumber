// steps/login.steps.js
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config({ path: ".env", silent: true });

Given("I open the login page", async function () {
  await this.page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
});

When(
  "I enter username {string} and password {string}",
  async function (username, password) {
    if (username === "<USERNAME>") username = process.env.TS1_USERNAME;
    if (password === "<PASSWORD>") password = process.env.TS1_PASSWORD;
    //await this.page.fill("#username", username);
    await this.page.fill("#username", "adminnn");
    await this.page.fill("#password", password);
  }
);

When("I click the login button", async function () {
  await this.page.click("#loginBtn");
});

Then("I should see the page title {string}", async function (title) {
  const pageTitle = await this.page.title();
  expect(pageTitle).to.equal(title);
});

Then("I should see the username field", async function () {
  const visible = await this.page.isVisible("#username");
  expect(visible).to.be.true;
});

Then("I should see the password field", async function () {
  const visible = await this.page.isVisible("#password");
  expect(visible).to.be.true;
});

Then("I should see the login button enabled", async function () {
  const enabled = await this.page.isEnabled("#loginBtn");
  expect(enabled).to.be.true;
});

Then("I should see the message {string}", async function (msg) {
  const message = await this.page.locator("#message").textContent();
  expect(message.trim()).to.equal(msg);
});
