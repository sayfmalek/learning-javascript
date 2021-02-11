console.group('Variable & String');

//Mutable variable//
let age = 23;
let year = 1997;
console.log(age, year);

age = 30;
console.log(age);

//Immutable variable//
const points = 100;
//points = 50 will cause error
console.log(points);

//JS DATATYPES//
//Strings//
let email = 'loneflow@gmail.com';
console.log(email);

//string concate
let firstName = 'Saif';
let lastName = 'Ullah';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(firstName[1]);

//getting lenght
console.log(fullName.length);

//string method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
let index = email.indexOf('@');
console.log(index);

//common string methods
let email2 = 'saifullah2664@gmail.com';
//last indexOf
let result2 = email2.lastIndexOf('m');
console.log(result2);
//slicing
let sliceResult = email2.slice(1, 8);
console.log(sliceResult);
//substr
let substrResult = email2.substr(4, 10); //will start from 4 and get us 10 characters after
console.log(substrResult);
//replace
let replaceResult = email2.replace('l', 'x');
console.log(replaceResult);

//Numebers//
//shorthand notation
let likes = 10;
//likes++;
//likes--;
//likes += 10;
//likes *= 3;
console.log(likes);

//concate number
let result3 = 'The Blog has ' + likes + ' likes.';
console.log(result3);

console.groupEnd();
