const getInput = require('./utils/getFile');

const testInput = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

const parseSteps = (input) => {
  return input.split('\n').map((step) => {
    const [dir, dist] = step.split(' ');
    const arr = [];
    for (let i = 0, l = Number(dist); i < l; i++) {
      arr.push(dir);
    }
    return arr;
  }).flat();
};

const pointsAreAdjacent = (head, tail) => {
  return Math.abs(head.x - tail.x) <= 1 && Math.abs(head.y - tail.y) <= 1;
}

// part 1
/*
const followSteps = (steps) => {
  const tailLocations = { '0,0': true };
  const head = { x: 0, y: 0 };
  const tail = { x: 0, y: 0 };

  const moveHead = (dir) => {
    if (dir === 'U') {
      head.y -= 1;
    } else if (dir === 'D') {
      head.y += 1;
    } else if (dir === 'L') {
      head.x -= 1;
    } else if (dir === 'R') {
      head.x += 1;
    }
  };

  const moveTailIfNeeded = () => {
    if (pointsAreAdjacent(head, tail)) {
      return;
    }

    let newTailLocation = { ...tail };

    const dx = head.x - tail.x;
    const dy = head.y - tail.y;

    if (dx !== 0) {
      newTailLocation.x += (dx / Math.abs(dx));
    }
    if (dy !== 0) {
      newTailLocation.y += (dy / Math.abs(dy));
    }

    tail.x = newTailLocation.x;
    tail.y = newTailLocation.y;
    tailLocations[`${tail.x},${tail.y}`] = true;
  };

  steps.forEach((dir) => {
    moveHead(dir);
    moveTailIfNeeded();
  });

  return Object.keys(tailLocations).length;
}
*/

// part 2
const followSteps = (steps) => {
  const tailLocations = { '0,0': true };
  const head = { x: 0, y: 0 };
  const tail = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];

  const moveHead = (dir) => {
    if (dir === 'U') {
      head.y -= 1;
    } else if (dir === 'D') {
      head.y += 1;
    } else if (dir === 'L') {
      head.x -= 1;
    } else if (dir === 'R') {
      head.x += 1;
    }
  };

  const moveTailIfNeeded = (i) => {
    const other = i === 0 ? head : tail[i-1]
    if (pointsAreAdjacent(other, tail[i])) {
      return;
    }

    let newTailLocation = { ...tail[i] };

    const dx = other.x - tail[i].x;
    const dy = other.y - tail[i].y;

    if (dx !== 0) {
      newTailLocation.x += (dx / Math.abs(dx));
    }
    if (dy !== 0) {
      newTailLocation.y += (dy / Math.abs(dy));
    }

    tail[i].x = newTailLocation.x;
    tail[i].y = newTailLocation.y;
    if (i === 8) {
      tailLocations[`${tail[i].x},${tail[i].y}`] = true;
    }
  };

  steps.forEach((dir) => {
    moveHead(dir);
    moveTailIfNeeded(0);
    moveTailIfNeeded(1);
    moveTailIfNeeded(2);
    moveTailIfNeeded(3);
    moveTailIfNeeded(4);
    moveTailIfNeeded(5);
    moveTailIfNeeded(6);
    moveTailIfNeeded(7);
    moveTailIfNeeded(8);
  });

  return Object.keys(tailLocations).length;
}

console.log(followSteps(parseSteps(testInput)));

getInput().then(data => {
  console.log(followSteps(parseSteps(data)));
});