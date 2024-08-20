const puppeteer = require('puppeteer');

async function screenshot(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set the viewport to the desired width and height
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.goto(url);
    await page.screenshot({ path: 'screenshot.png' });
    
    await browser.close();
}
screenshot('https://github.com/ardszsantos');
