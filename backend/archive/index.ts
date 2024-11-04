import { chromium } from 'playwright'

async function scrape() {
    const browser = await chromium.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://amazon.in'); // Replace with target URL
    
    // Extract data here
    await page.waitForSelector('#a-page');
    // const title = await page.$eval('#a-page', (element) => element.textContent);
    // console.log(title);

    
    await browser.close();
  }
  
  scrape();
  