import React from "react";
import "./App.css";
import MyForm from "./components/form";
import Counting from "./components/Functionalcounting";
import Classcounting from "./components/Classcounting";

function App() {
  return (
    <>
      <div className="my-form">
        <MyForm />
      </div>
      <hr />
      <div className="counter-component">
        <Counting />
        <h4>VS</h4>
        <Classcounting />
      </div>
    </>
  );
}

export default App;
