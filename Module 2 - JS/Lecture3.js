// Hoisting in JS.

// Variable Hoisting.
// console.log(a);  // undefined
// var a = 10;
// console.log(a);

// Let Hoisting.
// TDZ - Temporal Dead Zone
// try{
//     console.log(b); // ReferenceError: a is not defined value in TDZ.
//  } catch(e){
//     console.log("Error: ", e);
//  }
// let b = 10;
// console.log(b); //10

// Functional Hoisting.
// greet();
// function greet(){
//     console.log("Hello Lovely People's");
// }

// Function Expression Hoisting.
// try {
//   heyFun();
// } catch (e) {
//   console.log("Error: ", e);
// }

// var heyFun = function () {
//   console.log("Hey Function");
// };
