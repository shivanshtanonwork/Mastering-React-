// greet(); // calling it here also doesn't makes any difference as fnx calls always go on top - it can be hoisted
// function greet(){
//     console.log("Hello Shivansh");
// }

// greet();

// Arrow function

// const greet = () => {
//     console.log("Hey Shivansh");
// }

// greet()

const user = {
    name: "Shivansh",
    sayHi: function(){
        console.log("Hey", this.name);
    }
}

user.sayHi()

const user1 = {
    name: "Shivansh",
    sayHi: ()=>{
        console.log("Hey", this.name);   //incase of arrow function yeh global object ko dekhta hai lexical hota hai
    }
}

user1.sayHi()