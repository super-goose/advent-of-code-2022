const getInput = require('./utils/getFile');

const parseToGrid = (data) => {
  return data
    .split('\n')
    .map(row => { return row.split('').map(n => Number(n))});
}

const testGrid = parseToGrid(`30373
25512
65332
33549
35390`);

/*
30373
25512
65332
33549
35390
*/

const calculateScenicScore = (grid, { x, y }) => {
  return (
    calculateScenicScoreUp(grid, { x, y }) *
    calculateScenicScoreDown(grid, { x, y }) *
    calculateScenicScoreLeft(grid, { x, y }) *
    calculateScenicScoreRight(grid, { x, y })
  );
}

const calculateScenicScoreUp = (grid, { x, y }) => {
  // console.log(grid, {x, y})
  const base = grid[y][x];
  let tally = 0;
  for (y--; y >= 0; y--) {
    // console.log(`  y: ${y} | base: ${base} | grid[y][x]: ${grid[y][x]}`)
    if (grid[y][x] < base) {
      tally += 1;
    } else {
      return tally + 1;
    }
  }
  return tally;
}

const calculateScenicScoreDown = (grid, { x, y }) => {
  const base = grid[y][x];
  let tally = 0;
  for (y++; y < grid.length; y++) {
    if (grid[y][x] < base) {
      tally += 1;
    } else {
      return tally + 1;
    }
  }
  return tally;
}

const calculateScenicScoreLeft = (grid, { x, y }) => {
  const base = grid[y][x];
  let tally = 0
  for (x--; x >= 0; x--) {
    if (grid[y][x] < base) {
      tally += 1;
    } else {
      return tally + 1;
    }
  }
  return tally;
}

const calculateScenicScoreRight = (grid, { x, y }) => {
  const base = grid[y][x];
  let tally = 0
  for (x++; x < grid[y].length; x++) {
    if (grid[y][x] < base) {
      tally += 1;
    } else {
      return tally + 1;
    }
  }
  return tally;
}

const calculateBestScenicScore = (grid) => {
  const width = grid[0].length;
  const height = grid.length;
  let bestScoreSoFar = 0;
  const scores = {};
  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      // console.log(`${x}, ${y}: ${calculateScenicScoreUp(grid, { x, y })}`)
      // scores[`${x},${y}`] = calculateScenicScore(grid, { x, y })
      bestScoreSoFar = Math.max(bestScoreSoFar, calculateScenicScore(grid, { x, y }));
    }
  }

  // console.log(scores)
  console.log(bestScoreSoFar)
}


// calculateBestScenicScore(testGrid)

getInput().then(parseToGrid)
  .then(calculateBestScenicScore)


// part 1
// const calculateVisible = (grid) => {
//   let visible = {};
//   const width = grid[0].length;
//   const height = grid.length;

//   console.log('calculate along the top edge');
//   for (let x = 0; x < width; x++) {
//     for (let y = 0; y < height; y++) {
//       if (x === 0 || x === width - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         break;
//       }
//       if (y === 0) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//       } else {
//         let v = true;
//         for (let i = y - 1; i >= 0; i--) {
//           if (grid[i][x] >= grid[y][x]) {
//             v = false;
//           }
//         }
//         if (v) {
//           visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//       }
//     }
//   }
//   console.log('calculate along the left edge');
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       if (y === 0 || y === height - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         break;
//       }
//       if (x === 0) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//       } else {
//         let v = true;
//         for (let i = x - 1; i >= 0; i--) {
//           if (grid[y][i] >= grid[y][x]) {
//             v = false;
//           }
//           // visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//         if (v) {
//           visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//       }
//     }
//   }
//   console.log('calculate along the right edge');
//   for (let y = 0; y < height; y++) {
//     for (let x = width - 1; x >= 0; x--) {
//       if (y === 0 || y === height - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         break;
//       }
//       if (x === width - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//       } else {
//         let v = true;
//         for (let i = x + 1; i <= width - 1; i++) {
//           if (grid[y][i] >= grid[y][x]) {
//             v = false;
//           }
//           // visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//         if (v) {
//           visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//       }
//     }
//   }
//   console.log('calculate along the bottom edge');
//   for (let x = 0; x < width; x++) {
//     for (let y = height - 1; y >= 0; y--) {
//       if (x === 0 || x === width - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         break;
//       }
//       if (y === height - 1) {
//         visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//       } else {
//         let v = true;
//         for (let i = y + 1; i <= height - 1; i++) {
//           if (grid[i][x] >= grid[y][x]) {
//             v = false;
//           }
//         }
//         if (v) {
//           visible[`${x},${y}`] = true; // console.log(`${x},${y}`);
//         }
//       }
//     }
//   }
//   // console.log(visible);
//   console.log(Object.keys(visible).length);
// }

// calculateVisible(testGrid)

// getInput().then(parseToGrid)
//   .then(calculateVisible)