const Reader = require('./src/Reader');
const Processor = require('./src/Processor');
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');

const reader = new Reader();

const main = async () => {
  const data = await reader.read('./src/user.csv');
  const processedData = Processor.process(data);
  const users = new Table(processedData);
  const html = await HtmlParser.parse(users);

  console.log(html);
  // console.log(users.rows);
};

main();
