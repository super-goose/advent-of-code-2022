const getInput = require('./utils/getFile');
const filename = 'day-01.input.txt';

// part 1
// getInput(filename).then((code) => {
//   const elves = code.split('\n\n')
//     .map((elf) => {
//       return elf
//         .trim()
//         .split('\n')
//         .map(cal => Number(cal.trim()))
//         .reduce((acc, cur) => (acc + cur), 0)
//     })
//     .reduce((acc, cur) => (Math.max(acc, cur)), 0);

//   console.log(elves);
// });

// part 2
getInput(filename).then((code) => {
  const elves = code.split('\n\n')
    .map((elf) => {
      return elf
        .trim()
        .split('\n')
        .map(cal => Number(cal.trim()))
        .reduce((acc, cur) => (acc + cur), 0)
    })
    .sort()
    .reverse();

  console.log(elves[0] + elves[1] + elves[2]);
});