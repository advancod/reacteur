import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input, setInput] = React.useState("");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      How are you ?
      <input
        value={input}
        onChange={event => {
          console.log({
            input,
            value: event.target.value
          });
          setInput("Awesome !".slice(event.target.value.length));
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
