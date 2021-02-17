console.group('object literal Basics');

//Object literal

let user = {
   name: 'Charlie',
   age: 24,
   email: 'aotis@gmail.com',
   location: 'France',
   blogs: [
      //objects inside arrays
      { title: '10 things todo in Paris', likes: 12 },
      { title: 'most famous places to eat in Paris', likes: 17 },
   ],
   logIn() {
      //regular functions but in a short form
      console.log('user is logged In');
   },
   logBlogs() {
      //if we were to use arrow function it will throw error bcz then 'this' will refer to global object
      //inside objects it is advisible to use regular functions
      this.blogs.forEach((blog) => console.log(blog.title, blog.likes));
   },
};

console.log(user);
user.age = 26; //can also use- user['age']
console.log(user);

user.logIn();
user.logBlogs();

console.groupEnd();
