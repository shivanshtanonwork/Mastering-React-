function createCounter() {
    let count = 0;
    return function(){  // anonymous function
        count++
        return count
    }
}

const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

for(let i = 0; i< 5;i++){
    console.log(counter());
}