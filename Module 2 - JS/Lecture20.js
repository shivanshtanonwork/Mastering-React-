// Event Bubbling - event flow is from child to parent
document.getElementById("grandParent").addEventListener("click", () => {
  console.log("grandParent Clicked!!");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("parent clicked!!");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("child clicked!!");
});

// Event Delegation - Parent Element handles child events efficiently
const menu = document.getElementById("menu");
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked", e.target.textContent);
  }
});
