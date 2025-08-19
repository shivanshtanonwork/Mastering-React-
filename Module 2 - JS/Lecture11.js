// Shallow Copy and Deep copy in JS

const originalObj = {
  name: "Ajay",
  address: {
    city: "Bangalore",
  },
};

// const shallowCopy = Object.assign({}, originalObj);
const shallowCopy = { ...originalObj };
console.log(shallowCopy);
const deepCopy = JSON.parse(JSON.stringify(originalObj));
console.log(deepCopy);

originalObj.address.city = "Jabalpur";

console.log(shallowCopy.address.city);
console.log(deepCopy.address.city);
