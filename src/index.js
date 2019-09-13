import React from "react";
import ReactDOM from "react-dom";
import Slide from "./slide";
import "./styles.css";
import { Input, Form } from "./components";
import theme from "./theme";

import { ThemeProvider } from "emotion-theming";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div />
        {/* <Form>
          <label for="username">Username</label>
          <div>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
        </Form> */}

        <Slide number={9} />

        <footer>
          <span>@siddharthkp</span>
          <span>sid.st/reactlive</span>
        </footer>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
