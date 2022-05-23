import React, { useState } from "react";

const UseStateCounter = () => {
  let [count, setCount] = useState(0);
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    count = 0;
    setCount(count);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setCount((useCount) => useCount + 5);
    }, 1000);
  };
  return (
    <React.Fragment>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
      <h1>MOre complex counter</h1>
      <h1>{count}</h1>

      <button className="btn" onClick={complexIncrease}>
        increase later
      </button>
    </React.Fragment>
  );
};

export default UseStateCounter;
