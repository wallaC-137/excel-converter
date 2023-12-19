const fs = require('fs');
const util = require('util');

class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async writer(filepath, data) {
    try {
      return await this.writer(filepath, data);
    } catch (error) {
      return;
    }
  }
}

module.exports = Writer;
