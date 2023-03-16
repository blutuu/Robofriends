import React from "react";

const CounterButton = () => {
  const [count, setCount] = React.useState(0);

  const updateCount = () => {
    setCount(count + 1);
    console.log(`Counter: ${count}`);
  };

  return (
    <button
      className="mb3 "
      id="count-button"
      color="black"
      onClick={updateCount}
    >
      Count: {count}
    </button>
  );
};

export default CounterButton;
