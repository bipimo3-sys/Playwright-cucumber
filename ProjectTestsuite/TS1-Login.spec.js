import dotenv from "dotenv";
dotenv.config({ quiet: true });
import { test, expect } from "@playwright/test";

test.describe.parallel("Login Page Parallel Tests", () => {
  test("login-page-1load", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const title = await page.title();
      await expect(title).toBe("Login Page");
      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-2unameAndPassVisible", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const usernameField = page.locator("#username");
      const passwordField = page.locator("#password");
      await expect(usernameField).toBeVisible();
      await expect(passwordField).toBeVisible();
      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-3loginBtnVisible", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const loginButton = page.locator("#loginBtn");
      await expect(loginButton).toBeVisible();
      await expect(loginButton).toBeEnabled();
      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-4loginWithoutInputs", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText(
        "Please enter both username and password."
      );

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-5loginWithoutUname", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");

      const pass = process.env.TS1_PASSWORD;
      await page.fill("#password", pass);

      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText(
        "Please enter both username and password."
      );

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-6loginWithoutPass", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const uname = process.env.TS1_USERNAME;
      await page.fill("#username", uname);

      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText(
        "Please enter both username and password."
      );

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-7wrongUnamePass", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      await page.fill("#username", "asdad");
      await page.fill("#password", "asdasf");

      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText("Invalid credentials.");

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-8correctUnamePass", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const uname = process.env.TS1_USERNAME;
      const pass = process.env.TS1_PASSWORD;
      await page.fill("#username", uname);
      await page.fill("#password", pass);

      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText("Login successful!");

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-9unameCaseSensitivity", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const uname = process.env.TS1_USERNAME;
      const pass = process.env.TS1_PASSWORD;
      await page.fill("#username", uname.toUpperCase());
      await page.fill("#password", pass);

      const loginButton = page.locator("#loginBtn");
      await loginButton.click();
      const message = page.locator("#message");
      await expect(message).toBeVisible();
      await expect(message).toHaveText("Invalid credentials.");

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });

  test("login-page-10checkRedirect", async ({ page }, testInfo) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    try {
      await page.goto("http://localhost:3000/ProjectTSApp/TS1_Login.html");
      await page.waitForLoadState("networkidle");
      const uname = process.env.TS1_USERNAME;
      const pass = process.env.TS1_PASSWORD;
      await page.fill("#username", uname);
      await page.fill("#password", pass);
      const loginButton = page.locator("#loginBtn");
      await loginButton.click();

      await Promise.all([
        page.waitForNavigation(), // waits for the redirect to index.html
        page.click("#loginBtn"),
      ]);

      expect(page.url()).toContain("index.html");
      const pageText = await page.locator("body").textContent();
      expect(pageText).toContain("Bipi");
      expect(pageText).toContain("Email: bipi@example.com");

      await page.screenshot({
        path: `screenshots/TS1-${testInfo.title}-${timestamp}.png`,
        fullPage: true,
      }); //explicit screenshot
    } catch (err) {
      if (!page.isClosed()) {
        await testInfo.attach(`TS1-${testInfo.title}-${timestamp}`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
      throw err; 
    }
  });
});