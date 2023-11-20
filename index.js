const fs = require('fs');

// exemplo de leitura no node
fs.readFile('user.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file');
    return;
  }
  const obj = JSON.parse(data);
  console.log(obj);
});

// // exemplo de escrita no node
// fs.writeFile('file2.txt', 'Hello Node.js', (err) => {
//   if (err) {
//     console.log('Error writing file');
//     return;
//   }
//   console.log('Successfully wrote to file');
// });
