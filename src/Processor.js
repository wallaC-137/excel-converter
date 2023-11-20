class Processor {
  static process(data) {
    const rows = data.split('\n');
    const rowsArray = [];
    rows.forEach((row) => {
      const arr = row.split(',');
      rowsArray.push(arr);
    });

    rowsArray.pop();

    return rowsArray;
    console.log(rowsArray);
  }
}

module.exports = Processor;
