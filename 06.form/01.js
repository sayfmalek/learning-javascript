console.group('Form & Form Event');

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

//RegEx - simple validation
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const username = form.username.value;

   if (usernamePattern.test(username)) {
      feedback.textContent = 'Username is valid!';
   } else {
      feedback.textContent = 'Username should contain letters from a to z and must be between 6 to 12 char long.';
   }
});

//live validation
form.username.addEventListener('keyup', (e) => {
   if (usernamePattern.test(e.target.value)) {
      form.username.setAttribute('class', 'success');
   } else {
      form.username.setAttribute('class', 'failed');
   }
});
