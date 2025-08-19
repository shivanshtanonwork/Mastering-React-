// Destructuring in JS(Object & Array)

const User = {
  name: "Shivansh",
  age: 26,
  location: "Bangalore",
};

// const user1 = user.name;
// console.log(user1);

const {
  name,
  age,
  location: city,
  email = "shivanshtandonwork@gmail.com",
} = User; // Destructuring - modern JS
console.log(name, age, city, email);

const colors = ["Red", "Pink", "Green"];

const [first, second] = colors;
console.log(first, second);

const [, , third] = colors;
console.log(third);
