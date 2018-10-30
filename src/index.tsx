import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const root = document.getElementById("root");
const load = () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    root,
  );

// This is needed for Hot Module Replacement
if ((module as any).hot) {
  (module as any).hot.accept("./App", load);
}

load();
