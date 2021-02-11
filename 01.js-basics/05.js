console.group('Booleans & Mics');

//Booleans
let email_5 = 'sayfmalik@gmail.com';
let result_5 = email_5.includes('@');
console.log(result_5);

//Comparison operator
let age_5 = 32;
console.log(age_5 == 35);
console.log(age_5 != 32);
console.log(age_5 > 20);
console.log(age_5 < 50);

//Loose comparison
console.log(age_5 == '32'); // Implicit type conversion

//Strict comparison
console.log(age_5 === '32');

//Explicit type convertion
let score_5 = '100';
console.log(score_5 + 12); // Concat

score_5 = Number(score_5);
console.log(score_5 + 12);

console.groupEnd();
