import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const isDisabled = false;

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 style={{ color: "red", fontSize: "45px" }} className="btn">
        Tasks: {count}
      </h1>
      <input type="text" />
      <button value="Add Task Button" onClick={handleClick}>
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
