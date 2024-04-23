// This stateful child component renders all data needed for the puzzle so that 
// the user can play. Each number in the puzzle is give its own button. Currently,
// the buttons do not do anything but we plan to add operations buttons so that the 
// user can add, subtract, multiply, or divide the numbers they select from the data
// buttons.

import React, { useState } from 'react';

export default function PuzzleList({ parsed }) {

  const [expression, setExpression] = useState('');
  const [gameLog, setGameLog] = useState('');
  const [mode, setMode] = useState('number'); // 'number' or 'operation'
  const [result, setResult] = useState(0);

  // Handle number button click and update expression
  const handleNumberClick = (number) => {
    if (mode === 'number') {
      setExpression(number);
      setMode('operation')
    }
    else {
      setExpression((prevExpression) => prevExpression + number);
      setMode('number')
    }

    console.log(number);
  };

  // Handle operator button click and update expression
  const handleOperatorClick = (operator) => {
    // if (mode === 'operation') return; // Prevent consecutive operator clicks
    setExpression((prevExpression) => prevExpression + ' ' + operator + ' ');
    setMode('operation');
    console.log(operator);
  };

  // Function to handle Enter button click and calculate result
  const handleEnterClick = () => {
    console.log(expression)
    console.log("Enter")
  };

  // Check if parsed exists and is an object
  if (!parsed || typeof parsed !== 'object') {
    return <div>No parsed data available</div>;
  }

  // Render the buttons
  return (
    <div>
      <h1>Puzzle!</h1>
      <p><b>{parsed["target"]}</b></p>
      <div>
        <button key="num1" onClick={() => handleNumberClick(parsed["num1"])}>
          {parsed["num1"]}
        </button>
        <button key="num2" onClick={() => handleNumberClick(parsed["num2"])}>
          {parsed["num2"]}
        </button>
        <button key="num3" onClick={() => handleNumberClick(parsed["num3"])}>
          {parsed["num3"]}
        </button>
        <br />
        <button key="num4" onClick={() => handleNumberClick(parsed["num4"])}>
          {parsed["num4"]}
        </button>
        <button key="num5" onClick={() => handleNumberClick(parsed["num5"])}>
          {parsed["num5"]}
        </button>
        <button key="num6" onClick={() => handleNumberClick(parsed["num6"])}>
          {parsed["num6"]}
        </button>
        <br />
        <button key="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button key="sub" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button key="mult" onClick={() => handleOperatorClick('x')}>
          x
        </button>
        <button key="div" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button key="enter" onClick={handleEnterClick}>
          Enter
        </button>
      </div>
      <p>Your Answer: {result}</p>
      <br/>
      <p>Game Log: {expression}</p>
    </div>
  );
}
  