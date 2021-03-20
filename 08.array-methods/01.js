console.group('Filter Array'); // performs a check, if the check passes keeps it in the array else
// it will filter out it from the array... if return = 'true' keep it, if return = 'false' discard it

const chars = [
   { user: 'Levi', status: true },
   { user: 'Erwin', status: false },
   { user: 'Eren', status: true },
   { user: 'Shasha', status: false },
];

// const deadchars = chars.filter((char) => {
//    return char.status;
// });

const aliveChars = chars.filter((char) => char.status); // short form

console.log(aliveChars);

console.groupEnd();
////////////////////////////////////////////////////////////////

console.group('Map Method'); // itrates on an array and returns an updated value for each item..

const products = [
   { name: 'gold star', price: 20 },
   { name: 'mushroom', price: 40 },
   { name: 'green shells', price: 30 },
   { name: 'banana skin', price: 10 },
   { name: 'red shells', price: 50 },
];

const saleProducts = products.map((product) => {
   if (product.price > 30) {
      return { name: product.name, price: product.price / 2 };
   } else {
      return product;
   }
});

console.log(saleProducts);

console.groupEnd();
