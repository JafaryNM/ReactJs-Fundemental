// 1) import the React and ReactDom Libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root

const el = document.getElementById("root");

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a components

function App() {
  // Passing variabe in Jsx
  //react fail to render boolen value
  const value = true  ;
  // react object

  
  const arrayValue=[1,2,3]
  let message = "Bye there !";
  if (Math.random() > 0.5) {
    message = "Hello there";
  }

  return <h1>{value}{arrayValue}</h1>;
  
}

// 5) Show components on screen
root.render(<App />);
