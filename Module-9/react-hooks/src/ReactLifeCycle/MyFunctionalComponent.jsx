import React, { useEffect, useState } from "react";

const MyFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect: Mounting");
  }, []);
  useEffect(() => {
    console.log("useEffect: re-render");
    return () => {
      console.log("Removed component from DOM");
    };
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default MyFunctionalComponent;
