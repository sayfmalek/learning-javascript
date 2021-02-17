console.group('Changing CSS Styles');

//changing css styles
const heading = document.querySelector('.heading');

console.log(heading.style);

heading.style.color = 'red';
heading.style.border = 'solid 2px black';

console.groupEnd();
