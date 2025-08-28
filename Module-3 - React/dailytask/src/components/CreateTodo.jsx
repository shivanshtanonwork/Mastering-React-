import React from "react";

const CreateTodo = () => {
  const task = 8;
  const isDisabled = true;
  //   const styles = {
  //     color: "red",
  //   };
  const counTask = () => {
    return task === 0 ? "No Task Available" : `Total Task ${task}`;
  };
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "45px" }} className="btn">
        Tasks: {counTask()}
      </h1>
      <button disabled={isDisabled}>Add Task</button>
    </>
  );
};

export default CreateTodo;
