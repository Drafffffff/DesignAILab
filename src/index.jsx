/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./styles/index.css";
import App from "./App";
import { Route } from "@solidjs/router";

render(
  () => (
    <Router>
     <App/>
    </Router>
  ),
  document.getElementById("root")
);
