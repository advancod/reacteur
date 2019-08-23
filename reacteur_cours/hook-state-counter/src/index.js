import React from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const [counterB, setCounterB] = React.useState(5);

  return (
    <div>
      <span onClick={() => setCounterB(counterB + 1)}>{counterB}</span>
      <span>{counter}</span>
      {counter > 0 && (
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      )}
      {counter < 10 && (
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
