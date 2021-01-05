import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
