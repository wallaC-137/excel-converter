const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

const reader = new Reader();

const main = async () => {
  const data = await reader.read('./user.csv');
  const processedData = Processor.process(data);
  const users = new Table(processedData);
  console.log(users.ColumnCount);
};

main();
