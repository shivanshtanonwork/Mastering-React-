import React from "react";

const CreateTodo = () => {
  const task = 8;
  const counTask = () => {
    task === 0 ? "No Task Available" : `Total Task ${task}`;
  };
  return (
    <>
      <h1>Tasks: {counTask()}</h1>
      <button>Add Task</button>
    </>
  );
};

export default CreateTodo;
