import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useWindowSize } from "./useWindowSize";

function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function App() {
  const size = getSize();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        {size.height} x {size.width}
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
