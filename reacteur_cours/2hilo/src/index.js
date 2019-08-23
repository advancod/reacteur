import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  React.useEffect(() => {
    console.log("effect " + counter + counterB);

    return () => {
      console.log("cleanup " + counter + counterB);
    };
  }, [counter, counterB]);

  console.log("render " + counter);

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>{counter}</button>
      <button onClick={() => setCounterB(c => c + 1)}>{counterB}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
