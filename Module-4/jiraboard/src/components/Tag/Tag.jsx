import React from "react";
import "./tag.css";

const Tag = ({ tagName }) => {
  //   const { tagName } = props;
  return (
    <>
      <button className="tag">{tagName}</button>
    </>
  );
};

export default Tag;
