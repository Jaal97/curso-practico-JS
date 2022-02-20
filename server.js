const puppeter = require('puppeteer');

const randomUseragent = require('random-useragent');

const initialization = async () =>
{
    const header = randomUseragent.getRandom();
    const browser = await puppeter.launch();
    const page = await browser.nextPage();
    await page.setUserAgent(header)
    await page.setViewport({ Width: 1920, height: 1080});
    await page.goto('https://dolar.wilkinsonpc.com.co/');
    await page.screenshot({path: 'example.png'});
    await browser.close();

}

initialization();