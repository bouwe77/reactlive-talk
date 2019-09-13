import React from "react";
import ReactDOM from "react-dom";
import Slide from "./slide";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div />

      <Slide number={12} />

      <footer>
        <span>@bouwe</span>
        <span>https://bouwe.io</span>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
