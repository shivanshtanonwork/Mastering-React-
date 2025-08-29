import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isDisabled = false;

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <h1 style={{ color: "red", fontSize: "45px" }} className="btn">
        Tasks: {count}
      </h1>
      <input type="text" onChange={handleChange} />
      <button value="Add Task Button" onClick={handleClick}>
        Add Task
      </button>
      <h2>{input}</h2>
    </>
  );
};

export default CreateTodo;
