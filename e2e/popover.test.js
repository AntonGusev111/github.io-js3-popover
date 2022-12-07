import puppeteer from 'puppeteer';

describe ('Start', ()=>{
    let browser;
    let page;

    beforeEach(async ()=>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();

    });

    test('page test', async () =>{
        await page.goto('http://127.0.0.1:8080');

        await page.waitForTimeout('.btn');
    });

    test('show popover', async () =>{
        await page.goto('http://127.0.0.1:8080');

        const popov = await page.$('.btn')
        await popov.click();

        await page.waitForTimeout('.popover')
        
    });

    afterEach(async () =>{
        await browser.close();
    })
});