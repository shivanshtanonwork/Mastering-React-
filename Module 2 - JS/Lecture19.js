// Data Structures in JS
// Set is a built-in JS object that stores only unique values and automatically removes duplicates
// Map is a key-value pair collection in JS where keys can be any data type, and insertion order is preserved

// const myset = new Set();
// myset.add(10);
// myset.add(20);
// myset.add(10);

// console.log(myset.has(10));
// console.log(myset.delete(10));
// console.log(myset.size);

// for (let val of myset) {
//   console.log(val);
// }

// const tags = ["js", "html", "java", "js"];
// const uniqueTags = new Set(tags);
// console.log(uniqueTags);

// Map
const map = new Map();
map.set("name", "Shivansh");
map.set("age", 26);
console.log(map);
console.log(map.get("name"));
console.log(map.size);

// console.log(map.has("name"));
// map.delete("name");
console.log(map);

for (let [key, value] of map) {
  console.log(key, value);
}

const userScores = new Map();
userScores.set("Shivansh", 96);
userScores.set("Aanvee", 96);
userScores.set("Aanvee", 100);
console.log(userScores);
