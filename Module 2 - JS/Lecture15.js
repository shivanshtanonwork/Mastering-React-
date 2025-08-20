// Spread and Rest operator
const nums = [1, 2, 3, 4, 5];
const copy = [...nums, 6];
console.log(copy);

const newStudent = {
  name: "Shivansh",
};

const copy1 = { ...newStudent, age: 26 };
console.log(copy1);

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c);

function sum(a, b, c) {
  return a + b + c;
}
const values = [1, 2, 3];
console.log(sum(...values));

// rest operator
function logAll(...items) {
  console.log(items);
}

logAll("Pen", "Pencil", "Eraser");

const [first, ...rest] = [10, 30, 40, 50];
console.log(first, rest);
