// support/hooks.js
import { Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

let browser;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

function sanitizeFilename(name) {
  return name.replace(/[^a-zA-Z0-9-_]/g, "_");
}

AfterStep(async function ({ result, pickle, pickleStep }) {
  if (result.status === Status.FAILED && this.page) {
    const testName = sanitizeFilename(pickle.name);
    const stepName = sanitizeFilename(pickleStep.text);
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    const screenshotsDir = path.join(process.cwd(), "screenshots");
    if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

    const screenshotPath = path.join(
      screenshotsDir,
      `${testName}-${stepName}-${timestamp}.png`
    );

    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot of failed step saved: ${screenshotPath}`);
  }
});

After(async function () {
  if (this.browser) await this.browser.close();
});