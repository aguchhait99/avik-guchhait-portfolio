import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto('http://localhost:3000');
  
  await page.evaluate(() => {
    // switch to preview tab
    document.querySelectorAll('button').forEach(b => {
      if(b.textContent.includes('Render & Customise')) b.click();
    });
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  // mock the payment success and trigger download
  await page.evaluate(() => {
    // There is no global downloadCVBundle, but we can trigger it by clicking "Unlock & Download"
    // Wait, we need to bypass Razorpay and simulate the payment.
    // Or we can just extract the function logic and run it.
  });

  await browser.close();
})();
