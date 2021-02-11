console.group('If Else & Logical Ops');

//If Else conditions
const password = 'ajjklk@bad123';

if (password.length >= 12 && password.includes('@')) {
   console.log("that's a super strong password.");
} else if (password.length >= 8 || password.includes('@')) {
   console.log("that's a strong password.");
} else {
   console.log("that's a weak password.");
}

console.groupEnd();
//////////////////////////////

console.group('Break & Continue');

//Break and Continue
const scores_2 = [50, 25, 70, 0, 100, 20, 85, 65, 30];

for (let i = 0; i < scores_2.length; i++) {
   if (scores_2[i] === 0) {
      continue;
   }

   console.log(scores_2[i]);

   if (scores_2[i] === 100) {
      console.log('You have reachced max score.');
      break;
   }
}

console.groupEnd();
