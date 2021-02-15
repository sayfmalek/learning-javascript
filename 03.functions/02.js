console.group('Arrow Functions');

//Regular Function expression
//const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
//};

//Arrow Functions
const calcArea_2 = (radius) => 3.14 * radius ** 2;

const area_2 = calcArea_2(5);
console.log(area_2);

console.groupEnd();
///////////////////////////////////////////

console.group('Callback & Foreach');

//Callback & Foreach
const ackermans = ['Kenny', 'Levi', 'Mikasa'];
ackermans.forEach((ackerman, index) => {
   // first argument is the value it is looping at the moment
   console.log(`${index}: ${ackerman} Ackerman`);
});

console.groupEnd();
