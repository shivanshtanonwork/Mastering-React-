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

// Promise.all() - is a method that takes an array of promises and returns a new Promise that resolves when all of them are resolved, or rejects if any one fails.
const fetchUser1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);
const fetchUser2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (res) => res.json()
);
const fetchUser3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
  (res) => res.json()
);

Promise.all([fetchUser1, fetchUser2, fetchUser3])
  .then((users) => {
    console.log("All users loaded");
    users.forEach((element) => {
      console.log(element.title);
    });
  })
  .catch((err) => {
    console.log(err, "Error fetching user info");
  });
