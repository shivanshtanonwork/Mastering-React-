const Person = {
  name: "Shivansh",
  age: 28,
  getData: function () {
    return this.name;
  },
};

// console.log(Person.name);

// console.log("toString" in Person);
// console.log(Person.hasOwnProperty("toString"));

// const Person = new Object();
// Person.name = "Shivansh Tandon";
// console.log(typeof Person);

// for (let key in Person) {
//   console.log(key + ": " + Person[key]);
// }

// console.log(Object.keys(Person));
// console.log(Object.values(Person));
// console.log(Object.entries(Person));

for (const [key, value] of Object.entries(Person)) {
  console.log(key, value);
}
