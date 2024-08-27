# Web scraping com Pupeteer
## Esse projeto tem o objetivo de estudar web-scraping usando a lib pupeteer.js

> Guia para Screenshots:
- 1- Definindo o pupeteer: 
 `const pt = require('puppeteer')`
 `const browser = await pt.launch(); `
 `const page = await browser.newPage(); `
  
  <hr>

- 2- Escolha o tamanho da screenshot: 
 `await page.setViewport({ width: 1920, height: 1080 });`

  <hr>

- 3- Indo para a url escolhida e tirando a screenshot: 
 `await page.goto(url);`
 `await page.screenshot({ path: './screenshots/screenshot.png' }); `



