const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  
  await page.goto('https://twitter.com/login');
  await page.waitForNavigation();

  await page.type('.email-input', 'YourEmailGoesHere')
  await page.type('.js-password-field', 'YourPasswordGoesHere')

  await page.click('#page-container > div > div.signin-wrapper > form > div.clearfix > button')
  await page.waitForNavigation();

  await page.waitFor(() => !!document.querySelector('#global-new-tweet-button'));

  await page.click('#global-new-tweet-button')

  await page.type('.tweet-box', 'Hello World', {delay: 100})

  await page.click('.SendTweetsButton')

})();