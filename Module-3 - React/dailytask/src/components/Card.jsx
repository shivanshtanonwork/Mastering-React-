import React from "react";
import CreateTodo from "./card-todo";
import UserCard from "./UserCard";

const Card = () => {
  return (
    <div>
      <h1>Hello Card Component</h1>
      <CreateTodo />
      <UserCard name="Shivansh Tandon" profession="Software Engineer" />
      <UserCard name="Vidushi Choubey" profession="Data Analyst" />
    </div>
  );
};

export default Card;
