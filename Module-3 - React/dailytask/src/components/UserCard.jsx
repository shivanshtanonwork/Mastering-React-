import React from "react";

const UserCard = ({ name, profession }) => {
  const newName = name || "default value";
  return (
    <div>
      <h2>{newName}</h2>
      <p>{profession}</p>
    </div>
  );
};

export default UserCard;
