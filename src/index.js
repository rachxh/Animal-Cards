import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//only valid for react v18
// const container=document.getElementById('root');
// const root=ReactDOMClient.createRoot(contianer);

// root.render(<App/>);
