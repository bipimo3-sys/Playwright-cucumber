// playwright.config.js
import { chromium, firefox, webkit, devices } from 'playwright';

export const browserConfig = {
  browserType: 'chromium',
  launchOptions: {
    headless: true,
    slowMo: 50
  },
  contextOptions: {
    viewport: { width: 1280, height: 800 }
  }
};
