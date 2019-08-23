import React from "react";
import ReactDOM from "react-dom";
import store from "store2";

const Counter = props => (
  <div>
    <span>{props.value}</span>
    {props.value > 0 && (
      <button
        onClick={() => {
          props.onDecrementClicked();
        }}
      >
        -
      </button>
    )}
    {!props.hideIncrement && props.value < 10 && (
      <button
        onClick={() => {
          props.onIncrementClicked();
        }}
      >
        +
      </button>
    )}
  </div>
);

const Counters = () => {
  const [counters, setCounters] = React.useState(() => {
    return store.get("counters_state", [0, 0, 0]);
  });

  React.useEffect(() => {
    store.set("counters_state", counters);
  }, [counters]);

  const counterSum = counters.reduce((acc, val) => acc + val, 0);

  const increment = counterIndex => {
    setCounters(prevCounters => {
      const copiedCounters = [...prevCounters];
      copiedCounters[counterIndex] += 1;
      return copiedCounters;
    });
  };

  const decrement = counterIndex => {
    setCounters(prevCounters => {
      const copiedCounters = [...prevCounters];
      copiedCounters[counterIndex] -= 1;
      return copiedCounters;
    });
  };

  return (
    <div>
      <span>Sum: {counterSum}</span>
      <br />
      <button
        onClick={() => {
          // like push be we create a new array
          setCounters(prevCounters => [...prevCounters, 0]);
        }}
      >
        Add counter
      </button>
      <br />
      <button
        onClick={() => {
          store.remove("counters_state");
          setCounters([0, 0, 0]);
        }}
      >
        Reset
      </button>
      <br />
      <div>
        {counters.map((value, index) => (
          <Counter
            key={index}
            value={value}
            onIncrementClicked={() => increment(index)}
            onDecrementClicked={() => decrement(index)}
            hideIncrement={counterSum >= 20}
          />
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Counters />, rootElement);
