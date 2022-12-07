const getInput = require('./utils/getFile');

const stacks = [
  ['N', 'C', 'R', 'T', 'M', 'Z', 'P'],
  ['D', 'N', 'T', 'S', 'B', 'Z'],
  ['M', 'H', 'Q', 'R', 'F', 'C', 'T', 'G'],
  ['G', 'R', 'Z'],
  ['Z', 'N', 'R', 'H'],
  ['F', 'H', 'S', 'W', 'P', 'Z', 'L', 'D'],
  ['W', 'D', 'Z', 'R', 'C', 'G', 'M'],
  ['S', 'J', 'F', 'L', 'H', 'W', 'Z', 'Q'],
  ['S', 'Q', 'P', 'W', 'N'],
]

const parseMove = (m) => {
  const [amount, from, to] = m
    .replace('move ', '')
    .replace(' from ', '|')
    .replace(' to ', '|')
    .split('|')
    .map((n) => Number(n));
  return { amount, from, to }
}

// PART 2
const manipulateStacks = ({ amount, from, to }) => {
  const cache = []
  for (let i = 0; i < amount; i++) {
    cache.push(stacks[from - 1].pop())
  }
  for (let i = 0; i < amount; i++) {
    stacks[to - 1].push(cache.pop())
  }
  
}

// PART 1
// const manipulateStacks = ({ amount, from, to }) => {
//   for (let i = 0; i < amount; i++) {
//     stacks[to - 1].push(stacks[from - 1].pop())
//   }
// }

getInput().then((text) => {
  const _ = text.split('\n').forEach((command) => {
    manipulateStacks(parseMove(command));
  })
  console.log(stacks.map((s) => s[s.length-1]));
});
/*
 1   2   3   4   5   6   7   8   9 
[N] [D] [M] [G] [Z] [F] [W] [S] [S]
[C] [N] [H] [R] [N] [H] [D] [J] [Q]
[R] [T] [Q] [Z] [R] [S] [Z] [F] [P]
[T] [S] [R]     [H] [W] [R] [L] [W]
[M] [B] [F]         [P] [C] [H] [N]
[Z] [Z] [C]         [Z] [G] [W]    
[P]     [T]         [L] [M] [Z]    
        [G]         [D]     [Q]    


1: ['N', 'C', 'R', 'T', 'M', 'Z', 'P']
2: ['D', 'N', 'T', 'S', 'B', 'Z']
3: ['M', 'H', 'Q', 'R', 'F', 'C', 'T', 'G']
4: ['G', 'R', 'Z']
5: ['Z', 'N', 'R', 'H']
6: ['F', 'H', 'S', 'W', 'P', 'Z', 'L', 'D']
7: ['W', 'D', 'Z', 'R', 'C', 'G', 'M']
8: ['S', 'J', 'F', 'L', 'H', 'W', 'Z', 'Q']
9: ['S', 'Q', 'P', 'W', 'N']
*/

