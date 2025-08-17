console.log("Start");
setTimeout(() => {
    console.log("setTimeout Callback");
}, 4000);


Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("End");
// Event Loop, Call Stack, Concurrency in JS.




