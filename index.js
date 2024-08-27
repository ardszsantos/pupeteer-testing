const pt = require('puppeteer');
const fs = require('fs'); 

/* 
async function screenshot(url) {
    const browser = await pt.launch();
    const page = await browser.newPage();
    
    // Set the viewport to the desired width and height
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.goto(url);
    await page.screenshot({ path: './screenshots/screenshot.png' });
    
    await browser.close();
}
screenshot('https://github.com/ardszsantos'); 
*/

/* 

async function books(url) {
  const browser = await pt.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url);

  const books = await page.evaluate(() => {
    const bookElements = document.querySelectorAll('.product_pod'); 
    return Array.from(bookElements).map(book => {
      const titleElement = book.querySelector('h3 a');
      const priceElement = book.querySelector('.price_color');
      
      return {
        title: titleElement.getAttribute('title'),  
        url: titleElement.href,                    
        price: priceElement ? priceElement.innerText : null
      };
    });
  });


  console.log(books);

  await browser.close();

  fs.writeFile('./json/prices.json', JSON.stringify(books, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to books.json');
  });
};

books('https://books.toscrape.com/') */