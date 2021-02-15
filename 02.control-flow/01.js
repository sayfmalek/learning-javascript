console.group('For Loop');

//For Loop
for (let i = 0; i < 3; i++) {
   console.log('In loop', i);
}

const names = ['Erwin', 'Hangi', 'Levi'];
for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}

console.groupEnd();
/////////////////////////

console.group('While Loop');

//While Loop
let m = 0;
while (m < names.length) {
   console.log(names[m]);
   m++;
}

console.groupEnd();
/////////////////////////

console.group('Do While Loop');

//Do While Loop
let n = 1;
do {
   console.log('Value of n is ', n); //Doing this before even checking the condition. It'll run once regardless of condition.
   n++;
} while (n < 1);

console.groupEnd();

/////////////////////////

console.group('ES6 For of');

//ES6 For of - on any iteratables arrays, strings etc

for (let x of names) {
   console.log(x);
}

console.groupEnd();
