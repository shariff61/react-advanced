import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [peoples, setPeoples] = useState(data);
  console.log(peoples);

  const removeId = (id) => {
    const newPeople = peoples.filter((people) => people.id !== id);
    setPeoples(newPeople);
  };
  const addId = (id) => {
    const newAdd = peoples.filter((people) => people.id === id);
    setPeoples(newAdd);
  };

  return (
    <React.Fragment>
      {peoples.map((people) => {
        const { id, name } = people;
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button className="btn" onClick={() => removeId(id)}>
              remove
            </button>
            <button className="btn" onClick={() => addId(id)}>
              addId
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeoples([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
