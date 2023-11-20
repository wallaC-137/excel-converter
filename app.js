const Reader = require('./src/Reader');
const Processor = require('./src/Processor');
const Table = require('./src/Table');

const reader = new Reader();

const main = async () => {
  const data = await reader.read('./src/user.csv');
  const processedData = Processor.process(data);
  const users = new Table(processedData);
  console.log(users.ColumnCount);
};

main();
