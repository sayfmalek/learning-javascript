console.group('Sort Method'); //

const names_3 = ['Hanji Zoe', 'Eren Yeager', 'Erwin Smith', 'Sasha Brouse', 'Levi Ackerman'];

names_3.sort();
console.log(names_3);
/////////////////////////////////////////

const score_arr = [98, 23, 66, 48, 6, 75];

score_arr.sort((a, b) => b - a);
console.log(score_arr);
/////////////////////////////////////////

const scores_3 = [
   { name: 'Haji', score: 55 },
   { name: 'Jin', score: 40 },
   { name: 'Ogre', score: 45 },
   { name: 'Tiger', score: 10 },
   { name: 'Nina', score: 75 },
];

scores_3.sort((a, b) => b.score - a.score); // watch video - a bit complicated..

console.log(scores_3);

console.groupEnd();
