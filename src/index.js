import React from "react";
import ReactDOM from "react-dom";
import { signUp } from "./userService";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App signUp={signUp} />, rootElement);
