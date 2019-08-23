import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  decrement = name => {
    console.log(name);
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        {this.state.counter > 0 && (
          <button
            onClick={() => {
              this.decrement("paul");
            }}
          >
            -
          </button>
        )}
        {this.state.counter < 10 && <button onClick={this.increment}>+</button>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
