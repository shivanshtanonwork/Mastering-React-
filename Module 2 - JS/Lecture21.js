// Promises in JS

//Syntax
// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("");
//   } else {
//     reject("");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {})
//   .finally(() => {});

// function orderFood(isRestaurantOpen) {
//   return new Promise((resolve, reject) => {
//     console.log("Placing Order");
//     setTimeout(() => {
//       if (isRestaurantOpen) {
//         resolve("Order received");
//       } else {
//         reject("Restaurant is closed");
//       }
//     }, 2000);
//   });
// }
// orderFood(false)
//   .then((res) => {
//     console.log(res);
//     return "Preparing Food..!!";
//   })
//   .then((res) => {
//     console.log(res);
//     return "Out for Delivery";
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   })
//   .finally(() => {
//     console.log("Thank you for ordering food");
//   });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
