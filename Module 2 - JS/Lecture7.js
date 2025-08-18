// class Person{
//     constructor(name){
//         this._name = name
//     }
//     get name(){     // getter method
//         return this._name
//     }
//     set name(newName){
//         if(newName){
//             this._name = newName
//         }else {
//             console.log("New name cannot be accessed");
//         }
//     }
// }

// const person = new Person('Shivansh')
// console.log(person.name);

// person.name = 'Shivansh Tandon'  // call setter method
// console.log(person.name);   // getter

// class A {
//     constructor(name){
//         this.name = name
//     }
// }

// class B extends A {
//     getDetails(){
//         return `Here is ${this.name}`
//     }
// }

// const obj = new B("SHIVA");
// console.log(obj.getDetails());

// class User {
//     #logAccess(){
//         console.log("Private logging...");
//     }
//     showProfile(){
//         console.log("Show Profile");
//         this.#logAccess()
//     }
// }

// const u = new User()
// u.showProfile()

class Animal {
  eat() {
    console.log("Eating");
  }
}

const flyable = (Base) =>
  class extends Base {
    fly() {
      console.log("Flying");
    }
  }; // Mixins

class Bird extends flyable(Animal) {
  bird() {
    console.log("Bird");
  }
}

const myBird = new Bird();
myBird.fly();
myBird.eat();
myBird.bird();
