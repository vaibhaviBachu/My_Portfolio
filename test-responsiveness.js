const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1200, height: 800 }
];

const screenshotDir = path.join(__dirname, 'responsiveness-test');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function testResponsiveness() {
  const browser = await chromium.launch();

  try {
    for (const viewport of viewports) {
      const context = await browser.createContext({ viewport });
      const page = await context.newPage();

      await page.goto('http://localhost:3001');
      await page.waitForLoadState('networkidle');

      // Full page screenshot
      const screenshotPath = path.join(screenshotDir, `${viewport.name}-full.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✓ Captured ${viewport.name} (${viewport.width}x${viewport.height}): ${screenshotPath}`);

      // Test key sections
      const sections = ['#home', '#about', '#skills', '#experience', '#projects', '#contact'];
      for (const section of sections) {
        try {
          await page.locator(section).scrollIntoViewIfNeeded();
          await page.waitForTimeout(300);
        } catch (e) {
          console.warn(`⚠ Could not scroll to ${section}`);
        }
      }

      await context.close();
    }

    console.log('\n✅ Responsiveness test completed!');
    console.log(`Screenshots saved to: ${screenshotDir}`);
  } finally {
    await browser.close();
  }
}

testResponsiveness().catch(console.error);
