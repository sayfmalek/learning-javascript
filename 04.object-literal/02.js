console.group('Primitive vs Reference types');

//Primitive
let erenAge = 20;
let arminAge = erenAge;

console.log(`Eren age: ${erenAge}, Armin age: ${arminAge}`);

erenAge = 30;

console.log(`Eren age: ${erenAge}, Armin age: ${arminAge}`);

//Reference type
const userOne = { name: 'Levi', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'Hangi';

console.log(userOne, userTwo);
//both userOne & userTwo point to same object so if we change one the other is changed as well.
//object is stored once with 2 references userone and usertwo

console.groupEnd();
