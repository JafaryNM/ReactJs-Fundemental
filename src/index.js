// 1) import the React and ReactDom Libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root

const el = document.getElementById("root");

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a components

function App() {
  // create props
  const message='Enter age'
  const type="number"
  return (<input 
  type={type}
  min={5} 
  max={10}
  list={[1,2,3]}
  style={{border:'3px solid red'}}
  alt={message}
  />
  );
}

// 5) Show components on screen
root.render(<App />);
