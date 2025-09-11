import React from "react";
import "./tag.css";
import { tagStyle, tagKeyMap } from "../../constant/common";

const Tag = ({ tagName, selectedTag, selected }) => {
  //   const { tagName } = props;

  const key = tagKeyMap[tagName];
  return (
    <>
      <button
        type="button"
        style={selected ? tagStyle[key] : {}}
        className="tag"
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
