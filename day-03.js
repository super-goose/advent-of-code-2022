const getInput = require('./utils/getFile');

const values = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26,
  A:26 + 1,
  B:26 + 2,
  C:26 + 3,
  D:26 + 4,
  E:26 + 5,
  F:26 + 6,
  G:26 + 7,
  H:26 + 8,
  I:26 + 9,
  J:26 + 10,
  K:26 + 11,
  L:26 + 12,
  M:26 + 13,
  N:26 + 14,
  O:26 + 15,
  P:26 + 16,
  Q:26 + 17,
  R:26 + 18,
  S:26 + 19,
  T:26 + 20,
  U:26 + 21,
  V:26 + 22,
  W:26 + 23,
  X:26 + 24,
  Y:26 + 25,
  Z:26 + 26,
}

const findCommonItem = ([ pack1, pack2, pack3 ]) => {
  for (let i = 0, l = pack1.length; i < l; i++) {
    if (pack2.includes(pack1[i]) && pack3.includes(pack1[i])) {
      return pack1[i];
    }
  }
};

// part 2
getInput().then((code) => {
  let sum = 0;
  let currentGroup = []
  code.split('\n').forEach((pack, index) => {
    if (index % 3 === 0) {
      currentGroup = [];
    }
    currentGroup.push(pack);
    if (index % 3 === 2) {
      sum += values[findCommonItem(currentGroup)];
    }
  });
  console.log(sum)
});

// part 1
// getInput().then((code) => {
//   const sums = code.split('\n').map((pack) => {
//     const m = pack.length / 2;
//     const pack1 = pack.substring(0, m);
//     const pack2 = pack.substring(m);
//     for (let i = 0; i < m; i++) {
//       if (pack2.includes(pack1[i])) {
//         return values[pack1[i]]
//       }
//     }
//     return 0;
//   }).reduce((acc, cur) => acc + cur, 0);
//   console.log(sums);
// });