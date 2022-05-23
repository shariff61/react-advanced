import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sharif ul islam",
    age: 27,
    job: "web developer",
    message: "change yourself",
  });
  const { name, age, job, message } = person;

  const changePerson = () => {
    setPerson({
      ...person,
      name: "SHARIFUL ISLAM",
      message: "if you work hard you will success",
    });
  };
  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{job}</h4>
      <h5>{message}</h5>
      <button className="btn" onClick={changePerson}>
        Change Button
      </button>
    </>
  );
};

export default UseStateObject;
