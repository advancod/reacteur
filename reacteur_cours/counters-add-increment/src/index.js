import React from "react";
import ReactDOM from "react-dom";

const Counter = React.memo(props => (
  <div>
    <span>{props.value}</span>
    {props.value > 0 && (
      <button
        onClick={() => {
          props.onDecrementClicked(props.counterIndex);
        }}
      >
        -
      </button>
    )}
    {props.value < 10 && (
      <button
        onClick={() => {
          console.log("click", props.onIncrementClicked);
          props.onIncrementClicked(props.counterIndex);
        }}
      >
        +
      </button>
    )}
  </div>
));

class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0, 0, 0]
    };
  }

  increment(counterIndex) {
    console.log(counterIndex);

    this.setState(prevState => {
      const copiedCounters = [...prevState.counters];
      copiedCounters[counterIndex] += 1;
      return { counters: copiedCounters };
    });
  }

  decrement(counterIndex) {
    this.setState(prevState => {
      const copiedCounters = [...prevState.counters];
      copiedCounters[counterIndex] -= 1;
      return { counters: copiedCounters };
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            // like push be we create a new array
            this.setState(prevState => ({
              counters: [...prevState.counters, 0]
            }));
          }}
        >
          Add counter
        </button>
        <br />
        <div>
          {this.state.counters.map((value, index) => (
            <Counter
              value={value}
              counterIndex={index}
              onIncrementClicked={this.increment}
              onDecrementClicked={this.decrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counters />, rootElement);
