import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter} from "react-router-dom";

import "./styles.css";


import {App} from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  rootElement
);
