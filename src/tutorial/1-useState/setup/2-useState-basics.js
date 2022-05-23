import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hello text");
  const handleText = () => {
    if (text === "hello text") {
      setText("this is new text");
    } else {
      setText("hello");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleText}>
        change text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
