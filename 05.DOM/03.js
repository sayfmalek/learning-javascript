console.group('Changing CSS classes');

const content = document.querySelectorAll('p');

content.forEach((i) => {
   let sentence = i.textContent;
   if (sentence.includes('error')) {
      i.classList.add('error');
   } else if (sentence.includes('success')) {
      i.classList.add('success');
   }
});

console.groupEnd();
/////////////////////////////////////////

console.group('Event Listening');

const ul = document.querySelector('ul');
const button = document.querySelector('button');
const items = document.querySelectorAll('li');

//adding items
button.addEventListener('click', () => {
   const li = document.createElement('li');
   li.textContent = 'some new todo';
   ul.append(li);
   //ul.innerHTML += '<li>xome new oto</li>';
});

//deleteing items
// items.forEach((item) => {
//    item.addEventListener('click', (e) => {
//       //e.target.style.textDecoration = 'line-through';
//       e.target.remove();
//    });
// });

//IMPORTANT - Event Bubbling and Delegation
//if we add a event listener to each 'li' it has two drawbacks:
//1- Bad for performance
//2- New items won't have event listeners attached to them
//we can use event bubbling and delegation to avoid these shortcomings

//we are attaching event listener to parent element and then
//bcz of bubbling it will fire this event..
ul.addEventListener('click', (e) => {
   if (e.target.tagName === 'LI') {
      e.target.remove();
   }
});
