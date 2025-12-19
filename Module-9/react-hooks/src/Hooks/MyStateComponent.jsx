import React, { useState } from "react";

const MyStateComponent = () => {
  const [name, setName] = useState("Shivansh");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);
  function changeName() {
    console.log("Clicked!!");
    return setFlag(!flag);
    // return setName("Shivansh Tandon");
  }
  function increment() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Hello, {flag ? name : ""}</h1>
      <button onClick={changeName}>Click me</button>
      <hr />
      <button onClick={increment}>Increment</button>
      <div>
        <h2>{count}</h2>
      </div>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <form>
        <input type="text" placeholder="Enter name" value={name} />
      </form>
    </div>
  );
};

export default MyStateComponent;
