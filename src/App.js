import './App.css';
import React from 'react';
import Buttons from './buttons/Button.jsx';
import Screen from './screen/InputScreen';

export default function App()
{
  const operators = ["clear", "plus-minus", "percentage", "times", "sub", "add", "equal", "div"];
  
  const handleClick = (e) => {

  }

  return(
    <div className="calculator-container">
      <div className="calculator center">
        <Screen/>
        <Buttons/>
      </div>
    </div>
  );
}