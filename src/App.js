// Import React library (required for JSX)
import React from "react";

// Import CSS file for styling
import "./App.css";

// Import custom components
import MyForm from "./components/form"; // Import MyForm component
import Counting from "./components/Functionalcounting"; // Import Counting (functional) component
import Classcounting from "./components/Classcounting"; // Import Classcounting (class-based) component
import Navbarcomponent from "./components/Navbarcomponent"; // Import Navbarcomponent

// Define the main App functional component
function App() {
  return (
    <>
      {/* Render the Navbarcomponent */}
      <Navbarcomponent />
      <br />
      {/* Render the MyForm component */}
      <div className="my-form">
        <MyForm />
      </div>
      <hr />
      {/* Render the Counting (functional-based) and Classcounting (class-based) components */}
      {/* Use a div to apply styling to the counter components */}
      <div className="counter-component">
        <Counting />
        <h4>VS</h4> {/* Header text to separate the two counter components */}
        <Classcounting />
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
