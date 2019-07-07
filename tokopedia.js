const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  
  await page.setDefaultNavigationTimeout(0)
  await page.goto('https://www.tokopedia.com/search?st=product&q=kaos');
  await page.waitFor(() => !!document.querySelector('.ta-product'));
  
  let products = await page.$$(".ta-product");

  for (var i = 0; i < products.length; i++) 
  {

    let productTitle = await products[i].$eval('.ta-product-title', (node) => {
      return node.innerText;
    });

    let price = await products[i].$eval('.ta-product-price', (node) => {
      return node.innerText;
    });

    console.log(productTitle + '---' + price);

  }
  await browser.close();

})();