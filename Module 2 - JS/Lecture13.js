// Call, Apply, Bind

const user1 = {
  name: "Shivansh",
  age: 26,
};

const user2 = {
  name: "Vidushi",
  age: 25,
};

function printDetails(city, country) {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Location: ${city} ${country}`
  );
}

printDetails.call(user1, "Bengaluru", "India"); // turant call ho jaata hai
printDetails.apply(user2, ["Pune", "India"]);

printDetails.bind(user1, "Jabalpur", "India"); // return krta hai new function

const obj = {
  name: "Shivansh",
  greet: function () {
    return `Hello, ${this.name}`;
  },
};
const greetFn = obj.greet.bind(obj);
console.log(greetFn());
