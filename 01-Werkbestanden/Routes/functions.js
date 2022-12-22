const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString();
  } catch (error) {
    return console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

module.exports = { readFile };
