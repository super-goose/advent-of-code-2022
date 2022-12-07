const getInput = require('./utils/getFile');

const AMOUNT = 14;
// PART 2
getInput().then((data) => {
  for (let i = AMOUNT - 1, l = data.length; i < l; i++) {
    const _ = {};

    for (let j = 0; j < AMOUNT; j++) {
      _[data[i - j]] = true
    }

    if (Object.keys(_).length === AMOUNT) {
      return i+1;
    }
  }
}).then(console.log)

// PART 1
// getInput().then((data) => {
//   for (let i = 3, l = data.length; i < l; i++) {
//     if (Object.keys({
//       [data[i]] : true,
//       [data[i-1]] : true,
//       [data[i-2]] : true,
//       [data[i-3]] : true,
//     }).length === 4) {
//       return i+1;
//     }
//   }
// }).then(console.log)