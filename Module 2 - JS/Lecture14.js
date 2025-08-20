let items = ["Pen", "Pencil", "Notesbook", "Eraser", "Sharpener"];
//splice me original array modify ho jaata hai

items.splice(4, 1);
items.splice(1, 0, "Marker");
items.splice(2, 2, "Scale", "Sharpener");
console.log(items);

let cart = ["Milk", "Bread", "Butter", "Eggs", "Juice"];
const preview = cart.slice(1, 3);
console.log(preview);
console.log(cart);
