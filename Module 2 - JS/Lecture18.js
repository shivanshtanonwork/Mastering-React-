// const arr = [1, 2, 3];
// Array.prototype.sayHello = function () {
//   return "Say Hello.....";
// };
// Array.prototype.last = function () {
//   return this[this.length - 1];
// };
// console.log(arr.last());
// console.log(arr.map((item) => item + 1));
// console.log(arr.sayHello());
// console.log(arr.__proto__);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return `Hello ${this.name}`;
// };

// const user = new Person("Shivash");
// console.log(user.__proto__);

// Using Object.create() for inheritance
// const userModule = {
//   sayHi: function () {
//     return `Hello ${this.name}`;
//   },
// };

// const user2 = Object.create(userModule);
// user2.name = "Shivansh";
// console.log(user2.sayHi());

// Traditonal way - inheritance
// function Animal() {
//   this.name = name;
// }
// Animal.prototype.walk = function () {
//   return `${this.name} is walking`;
// };
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   return `${this.name} is barking`;
// };

// const dog = new Dog("Tommy");
// console.log(dog.bark());
// console.log(dog.walk());
// Also called as functional programming earlier

// Modern Transition to ES6 classes
// OOP

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    return `${this.name} is walking`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog("Tommy");
console.log(dog.bark());
console.log(dog.walk());
