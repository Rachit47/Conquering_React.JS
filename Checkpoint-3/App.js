import React from "react";
import ReactDOM from "react-dom/client";

// React Element = JS object
// const jsxHeading = <h1 className="heading">Conquering React _JSX</h1>;

// React Component
// Class based component - OLD
// Functional component - NEW

const element = <span>React Element</span>;
//Component Composition
const Deb = 505;
const HeadingComponent = () => (
  <div className="container">
    <h3>{Deb}</h3>
    <h3 className="Heading">Conquering React functional component</h3>
  </div>
);

const Title = () => (
  <h1 className="Title" tabIndex={"5"}>
    To be Conquered {element}
    {HeadingComponent()}
    <HeadingComponent></HeadingComponent>
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<Title />);
