const correctAns = ['B', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   let score = 0;
   const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

   //check answer
   userAns.forEach((answer, index) => {
      if (answer === correctAns[index]) {
         score += 25;
      }
   });

   //showing the results
   scrollTo(0, 0);
   result.classList.remove('d-none');

   let output = 0;
   const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if (score === output) {
         clearInterval(timer);
      } else {
         output++;
      }
   }, 15);
});
