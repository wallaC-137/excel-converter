const puppeteer = require('puppeteer');

class PDFWriter {
  static async writerPdf(filename, html) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.pdf({ path: filename, format: 'A4' });

    await browser.close();
  }
}

module.exports = PDFWriter;
