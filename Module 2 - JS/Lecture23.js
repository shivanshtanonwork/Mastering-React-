// Memoization

// function slowAdd(a, b) {
//     for (let i = 0; i < 1e8; i++) { }
//     return a + b

// }
// console.time("No memo")
// console.log(slowAdd(5, 10));
// console.timeEnd("No memo")

// console.time("No memo again")
// console.log(slowAdd(5, 10));
// console.timeEnd("No memo again")

function memoizedAdd() {
  const cache = new Map();
  return function (a, b) {
    const key = `${a}_${b}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    for (let i = 0; i < 1e8; i++) {}
    const result = a + b;
    cache.set(key, result);
    return result;
  };
}

const add = memoizedAdd();

console.time("With memo");
console.log(add(5, 10));
console.timeEnd("With memo");

console.time("with memo again");
console.log(add(5, 10));
console.timeEnd("with memo again");
