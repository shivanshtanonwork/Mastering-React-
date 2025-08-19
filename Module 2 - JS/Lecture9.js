const User = {
  name: "Shivansh",
  age: 26,
  address: {
    city: "Jabalpur",
    pinCode: "110044",
  },
  preferences: null,
  getData: function () {
    return this.name;
  },
};

const city = User?.address?.city ?? "Bangalore"; // ?. Optional chaining
console.log(city);

console.log(User.getData?.());

const prefs = User.preferences ?? "No Preferences"; // ?? Nullish Coalescing
console.log(prefs);

// Or operator ||

const quantity = 0; // 0 is false
const result = quantity || 10;
console.log(result);
