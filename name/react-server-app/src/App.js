// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Comp1 from './components/aName/Comp1';
import Comp2Named from './components/aName/Comp2Named';

function App() {
  return (
    <div className="App">
      <Comp1 />
      <Comp2Named name="John" />  {/* Change "John" to any desired name */}
    </div>
  );
}

export default App;
