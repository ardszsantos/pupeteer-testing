const puppeteer = require('puppeteer');
const fs =  require('fs');
import { Browser } from "puppeteer";

const url = 'https://books.toscrape.com/?'


const main = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)


  const bookData = await page.evaluate((url) => {

    const bookPods = Array.from(document.querySelectorAll('.product_pod'))
    const data = bookPods.map((book: any) => ({
      title: book.querySelector('h3 a').getAttribute('title'),
      price: book.querySelector('.price_color').innerText,
      imgSrc: url + book.querySelector('img').getAttribute('src'),
      rating: book.querySelector('.star-rating').classList[1] 
    }))

    return data
  }, url)


  
  console.log(bookData)

  await browser.close()

  fs.writeFile('./json/data.json', JSON.stringify(bookData), (err: any) => {
    if(err) throw err
    console.log("SUCCESS")
  })
}

main()