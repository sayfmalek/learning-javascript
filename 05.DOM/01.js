console.group('Query Selectors');

//Query Selector
const span = document.querySelector('.error');

console.log(span);

const paras = document.querySelectorAll('p');
paras.forEach((para) => {
   para.innerText += ' (some new text)';
});

//an example
const names = ['Jean', 'Shasha', 'Connie'];

const content = document.querySelector('.content');

names.forEach((name) => {
   content.innerHTML += `<p>${name}</p>`;
});

//Get & Set Attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.duckduckgo.com');
link.innerText = 'Link to duckduckgo.com!!!!!!!';

console.groupEnd();
