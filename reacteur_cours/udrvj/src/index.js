import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import "./styles.css";

const Button = styled.button(
  {
    color: "SlateGrey",
    border: "none",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    "& span": {
      color: "white"
    }
  },
  props => ({ background: props.btnColor || "Papayawhip" })
);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>Hey</Button>
      <Button btnColor="darkBlue" type="button">
        Hey
      </Button>
      <Button btnColor="red">Hey</Button>
      <Button btnColor="green">Hey</Button>
      <Button btnColor="green">
        Hey <span>Yooo</span>{" "}
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
