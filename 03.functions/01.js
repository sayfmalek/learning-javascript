console.group('Function Declaration & Expression');

greet(); // calling before declaring bcz hoisting

//Function Declaration - hoisted
function greet() {
   console.log('Hello there! from a function declaration');
}

//Function Expression - not hoisted - more preferred way
const speak = function () {
   console.log('Good day! from a function expression');
};

greet();
speak();

console.groupEnd();
///////////////////////////////////////////////

console.group('Arguments and parameters');

//Args and params
const greet1 = function (name = 'Ereh', time = 'night') {
   console.log(`Good ${time}, ${name}`);
};

greet1();
greet1('Mikasa', 'morning');

console.groupEnd();
/////////////////////////////////////////////////

console.group('Returning Value');

//Returning value
const calcArea = function (radius) {
   return 3.14 * radius ** 2;
};

const area = calcArea(3);
console.log(area);

console.groupEnd();
