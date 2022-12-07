const fs = require('fs');
const pathToFile = `${__dirname}/../`;

console.log(process.argv[1])
filename = process.argv[1].replace('.js', '.input.txt')
module.exports = () => new Promise((resolve, reject) => {
  fs.readFile(`${filename}`, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});