const getInput = require('./utils/getFile');
const filename = 'day-02.input.txt';



// // part 1
// getInput(filename).then((code) => {
//   //    rock(AX): 1
//   //   paper(BY): 2
//   // scissor(CZ): 3
//   //
//   //     loss: 0
//   //     draw: 3
//   //      win: 6

//   const play = {
//     'A X': 1 + 3,
//     'B X': 1 + 0,
//     'C X': 1 + 6,
//     'A Y': 2 + 6,
//     'B Y': 2 + 3,
//     'C Y': 2 + 0,
//     'A Z': 3 + 0,
//     'B Z': 3 + 6,
//     'C Z': 3 + 3,
//   };

//   const game = code.split('\n')
//     .map((round) => play[round])
//     .reduce((acc, cur) => (acc + cur), 0);

//   console.log(game);
// });

// part 2
getInput(filename).then((code) => {
  //    rock(A): 1
  //   paper(B): 2
  // scissor(C): 3
  //
  //    loss(X): 0
  //    draw(Y): 3
  //     win(Z): 6

  const play = {
    'A X': 3 + 0,
    'B X': 1 + 0,
    'C X': 2 + 0,
    'A Y': 1 + 3,
    'B Y': 2 + 3,
    'C Y': 3 + 3,
    'A Z': 2 + 6,
    'B Z': 3 + 6,
    'C Z': 1 + 6,
  };

  const game = code.split('\n')
    .map((round) => play[round])
    .reduce((acc, cur) => (acc + cur), 0);

  console.log(game);
});
