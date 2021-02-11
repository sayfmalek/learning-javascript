console.group('Variable & block scope');

//Variable & block scope

const age_4 = 20; // _4 just refers to the file...

if (true) {
   const age_4 = 30; // creating local scope
   const name = 'Saif';
   console.log('Inside 1st code block ', age_4, name);

   if (true) {
      const age_4 = 40;
      const score_4 = 100;
      console.log('Inside 2nd code block ', age_4, name, score_4);
   }
}

console.log('Outside code block ', age_4, name);

console.groupEnd();
