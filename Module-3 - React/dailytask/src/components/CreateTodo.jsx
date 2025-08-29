import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["task1", "task2", "task3", "task4", "task5"];

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
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
