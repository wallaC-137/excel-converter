const Reader = require('./src/Reader');
const Writer = require('./src/Writer');
const Processor = require('./src/Processor');
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');
const PdfWriter = require('./src/PDFWriter');

const reader = new Reader();
const writer = new Writer();

const main = async () => {
  const data = await reader.read('./src/user.csv');
  const processedData = Processor.process(data);
  const users = new Table(processedData);
  const html = await HtmlParser.parse(users);

  await writer.writer(Date.now() + '.html', html);
  PdfWriter.writerPdf(Date.now() + '.PDF', html);
};

main();
