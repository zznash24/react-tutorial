import React from 'react'; 
import './App.css';
import MyForm from './components/form';
import FunctionalComponent from './components/functional';
import Counter from './components/class';

function App() {
  return (
    <>
    <div className="my-form">
      <MyForm />
    </div>
      <hr />
    <div className="counter-component">
      <FunctionalComponent />
      <h1>VS</h1>
      <Counter />
    </div>
    </>
  );
}

export default App;
