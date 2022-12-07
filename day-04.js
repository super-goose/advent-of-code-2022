const getInput = require('./utils/getFile');

const between = (rangeMin, rangeMax, n) => {
  return n >= rangeMin && n <= rangeMax;
}

// part 2
getInput().then((text) => {
  const _ = text.split('\n')
    .filter((pairing) => {
      const [a, b] = pairing.split(',');
      const [aMin, aMax] = a.split('-').map((n) => Number(n));
      const [bMin, bMax] = b.split('-').map((n) => Number(n));

      return (between(aMin, aMax, bMin) || between(aMin, aMax, bMax) || between(bMin, bMax, aMin) || between(bMin, bMax, aMax));
    });
  console.log(_.length)
})

// part 1
// getInput().then((text) => {
//   const _ = text.split('\n')
//     .filter((pairing) => {
//       const [a, b] = pairing.split(',');
//       const [aMin, aMax] = a.split('-').map((n) => Number(n));
//       const [bMin, bMax] = b.split('-').map((n) => Number(n));

//       return (aMin <= bMin && aMax >= bMax) || (bMin <= aMin && bMax >= aMax);
//     });
//   console.log(_.length)
// })