import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello there !");
// creating a react element (h1) using first file, which contains the core react development code
// Note: react element is a normal JavaScript object
// first parameter determines the HTML element,
// second parameter contains the attributes of the html tag,
// third parameter contains the props to passed into html tag (h1)

/*
<div id = "parent">
    <div id = "child1">
        <h1> This is H11 </h1>
        <h1> This is H12 </h1>
    </div>
    <div id = "child2">
        <h1> This is H21</h1>
        <h1> This is H22</h1>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "This is H11"),
        React.createElement("h2", {}, "This is H12"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "This is H21"),
        React.createElement("h2", {}, "This is H22"),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// to put this h1 element and all other react elements into our browser or DOM, for that we use second file or reactDOM library

root.render(parent);
// rendering the heading element inside our root, converting this h1 element into h1 tage which browser understands
