console.group('Reduce Method'); //

const scores = [
   { name: 'Haji', score: 55 },
   { name: 'Jin', score: 40 },
   { name: 'Ogre', score: 45 },
   { name: 'Tiger', score: 10 },
   { name: 'Nina', score: 75 },
   { name: 'Haji', score: 20 },
   { name: 'Jin', score: 35 },
   { name: 'Haji', score: 30 },
   { name: 'Tiger', score: 65 },
   { name: 'Haji', score: 50 },
];

const hajiTotal = scores.reduce((acc, curr) => {
   if (curr.name === 'Haji') {
      acc += curr.score;
   }
   return acc;
}, 0);

console.log(hajiTotal);

console.groupEnd();
//////////////////////////////////////////////////////

console.group('Find Method'); //

const cricScore = [23, 34, 54, 39, 98, 43];

const firstHighScore = cricScore.find((score) => {
   return score > 50;
});

console.log(firstHighScore);

console.groupEnd();
