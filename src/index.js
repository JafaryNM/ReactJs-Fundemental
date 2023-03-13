// 1) import the React and ReactDom Libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root

const el = document.getElementById("root");

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a components

function App() {
  const date=new Date();
  const time=date.toLocaleDateString();
  

  return <h1>{time}</h1>;
  
}

// 5) Show components on screen
root.render(<App />);
