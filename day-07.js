const getInput = require('./utils/getFile');
const { getLast } = require('./utils/array');

const getCurrentDir = (s, p) => {
  p.forEach((d) => {
    s = s[d]
  })
  return s;
}

const buildTree = (input) => {
  let currentPath = [];
  const system = { '/': {} };
  const lines = input.split('\n');
  lines.forEach((line) => {
    if (line[0] === '$') {
      // this is a command
      if (line.includes('$ cd ')) {
        const dir = line.replace('$ cd ', '');
        if (dir === '..') {
          currentPath.pop();
        } else {
          currentPath.push(dir);
        }
      } else {
        // this is an ls command
      }
    } else {
      // this is data
      if (line.includes('dir ')) {
        const newDir = line.replace('dir ', '');
        getCurrentDir(system, currentPath)[newDir] = {};
      } else {
        const [size, file] = line.split(' ');
        getCurrentDir(system, currentPath)[file] = Number(size);
      }
    }
  });
  return system;
}

/*
$ cd /
$ ls
dir fts
dir jnwr
dir lrvl
dir nzgprvw
dir snwqjgj
16394 tllvcdr.sjl
195891 zbdp.gqb
dir zddrb
$ cd fts
$ ls
dir dlqtffw
dir rbfmmjvd
254713 wvwhrb.dhh
$ cd dlqtffw
$ ls
73533 nqbvg.fgd
$ cd ..
*/
const dict = {};

const getDirSizes = (system, startingPoint = []) => {
  const currentPath = [...startingPoint];
  let currentSize = 0;
  const currentDir = getCurrentDir(system, currentPath);
  Object.keys(currentDir).forEach((item) => {
    if (typeof currentDir[item] === 'number') {
      currentSize += currentDir[item];
    } else {
      const sizeOfDir = getDirSizes(system, [...currentPath, item]);
      currentSize += sizeOfDir
      dict[[...currentPath, item].join('/')] = sizeOfDir;
    }
  })
  // add all file sizes + each dir size
  return currentSize;
};

// pt 2
const TARGET = 30000000 - (70000000 - 46592386);

getInput().then((data) => {
  const tree = buildTree(data);
  getDirSizes(tree)
  // console.log(dict);
  // console.log('answer:', Object.keys(dict).reduce((acc, cur) => acc + (dict[cur] < 100000 ? dict[cur] : 0), 0))
  let targetSize = 46592386;
  // let targetDir = '/';
  // const answer = Object.keys(dict).reduce((acc, p) => {
  //   const size = Number(dict[p]);
  //   console.log(`${p}:`, size);
  //   if (size > TARGET && size < acc) {
  //     console.log(p)
  //     return size;
  //   }
  //   return acc
  // }, 46592386)
  const dirSizes = Object.keys(dict)
    .reduce((acc, p) => ([...acc, Number(dict[p])]), [])
    .sort((a, b) => a - b);
  // console.log(dirSizes);
  dirSizes.forEach(_ => console.log(_));
  // console.log(`${targetDir}: ${targetSize}`)
  console.log(`${TARGET}`);
});
