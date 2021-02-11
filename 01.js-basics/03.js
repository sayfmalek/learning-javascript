console.group('Array');

//Array - object datatype
let squad = ['Levi', 'Eren', 'Mikasa', 'Armin', 'Shasha'];

//console.log(squad[1]);
squad[4] = 'Jean';
console.log(squad);

//Array Methods
let joinResult_3 = squad.join(', ');
console.log(joinResult_3);

let indexResult_3 = squad.indexOf('Armin');
console.log(indexResult_3);

let concatResult_3 = squad.concat(['Connie', 'Historia']);
console.log(concatResult_3, squad);

let pushResult_3 = squad.push('Ymir'); //alters the original array
console.log(pushResult_3, squad);

let popResult_3 = squad.pop(); //alters the original array
console.log(popResult_3, squad);

console.groupEnd();
