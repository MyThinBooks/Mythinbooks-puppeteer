const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  
  await page.goto('https://twitter.com/search?q=laravel&src=typed_query&f=live');
  await page.waitFor(() => !!document.querySelector('.js-stream-tweet'));
  
  let tweets = await page.$$(".js-stream-tweet");

  for (var i = 0; i < tweets.length; i++) 
  {

    let tweet = await tweets[i].$eval('.TweetTextSize', (node) => {
      return node.innerText;
    });

    console.log(tweet);

  }
  await browser.close();

})();