const fs = require('fs');
const pathToFile = `${__dirname}/../`;

module.exports = (filename) => new Promise((resolve, reject) => {
  fs.readFile(`${pathToFile}${filename}`, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});