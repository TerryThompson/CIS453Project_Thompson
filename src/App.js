import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TextField from './TextField';
import logo from './logo.jpg'; // Import the image file
function App() {

  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
  setInputValue(e.target.value);
  };

  return (

    <> 
    
    <div className="App">
    <img src={logo} alt="Graphic" />
      <h1>Counter: {count}</h1>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
      <h1>Name: {inputValue}</h1>
      <TextField value={inputValue} onChange={handleChange} />
      
      </div>
    </>
  );
}
export default App;


