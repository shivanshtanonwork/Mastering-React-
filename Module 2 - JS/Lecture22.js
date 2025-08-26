// Async Await in JS

// Async makes a function return a Promise.
// Await pauses the function execution until the promise is resolved or rejected

//Syntax
// async function myFunction() {
//   try {
//     const result = await someAsyncTask();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function fetchUserData() {
    console.log("Fetching user data");
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/4"
        );
        const user = await response.json();
        console.log("User loaded", user.title);
    } catch (err) {
        console.log("Failed to fetch", err);
    } finally {
        console.log("completed");
    }
}

fetchUserData();
