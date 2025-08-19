// Array Methods

const users = [
  { id: 1, name: "Shivansh Tandon", age: 26, price: 100 },
  { id: 2, name: "Vidushi Choubey", age: 25, price: 200 },
  { id: 3, name: "Himanshu Sood", age: 40, price: 300 },
  { id: 4, name: "Palak Sood", age: 35, price: 400 },
];

// reduce
const total = users.reduce((sum, user) => sum + user.price, 0);
console.log(total);
// Map Method
const names = users.map((user) => {
  return user.name.toUpperCase();
});

console.log(users.map((user) => user.age));

console.log(names);

// Filter

console.log(
  users.filter((user) => user.age > 26).map((user) => user.name.toUpperCase()) // Method chaining
);

// Join - converts all array elements into a single string with a given separator

const nameString = names.join(", ");
console.log(nameString);

//split
const nameArray = nameString.split(", ");
console.log(nameArray);

// find
const name1 = users.find((user) => user.age > 25);
console.log(name1);

// findIndex
const nameIndex = users.findIndex((user) => user.age === 25);
console.log(nameIndex);
