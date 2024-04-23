// This stateful child component renders all data needed for the puzzle so that 
// the user can play. Each number in the puzzle is give its own button. Currently,
// the buttons do not do anything but we plan to add operations buttons so that the 
// user can add, subtract, multiply, or divide the numbers they select from the data
// buttons.

import React, { useState } from 'react';

export default function PuzzleList({ parsed }) {

  // Keep track of what the user inputted and what button needs to be clicked next
  const [expression, setExpression] = useState('');
  const [gameLog, setGameLog] = useState([]);
  const [mode, setMode] = useState('number'); // 'number' or 'operation'

  // Keep track of which buttons have been clicked
  const [clickedNumbers, setClickedNumbers] = useState({
    num1: false,
    num2: false,
    num3: false,
    num4: false,
    num5: false,
    num6: false,
  });

  // Keep track of which buttons should disappear
  const [showNumbers, setShowNumbers] = useState({
    num1: true,
    num2: true,
    num3: true,
    num4: true,
    num5: true,
    num6: true,
  });

  // Handle number button click and update expression
  const handleNumberClick = (numberKey, numberValue) => {
    // Set button as clicked
    setClickedNumbers((prevState) => ({
      ...prevState,
      [numberKey]: true,
    }));

    // If a number has not been selected yet (first num)
    if (mode === 'number') {
      setExpression(numberValue);
      setMode('operation')
    }
    // If a number has been selected (second num)
    else {
      setExpression((prevExpression) => prevExpression + numberValue);
      setMode('number')
    }
  };

  // Handle operator button click and update expression
  const handleOperatorClick = (operator) => {
    // if (mode === 'operation') return; // Prevent consecutive operator clicks
    setExpression((prevExpression) => prevExpression + ' ' + operator + ' ');
    setMode('operation');
  };

  // Function to handle Enter button click and calculate result
  const handleEnterClick = () => {
    // Find out which two buttons have been clicked
    const clickedNums = checkClickedNumbers();
    console.log("clickedNums")
    console.log(clickedNums)

    // Calculate the expression set the result
    // const calculatedExpression = eval(expression);
    // const newResult = result + calculatedExpression;
    // setResult(newResult);
    const newResult = eval(expression);

    // Hide one button then update another
    hideAndUpdate(clickedNums, newResult);

    // Update Gamelog
    const newExpression = expression + " = " + newResult
    setGameLog([...gameLog, newExpression]);
    console.log(gameLog)
    // setGameLog((prevLog) => prevLog + expression + " = " + calculatedExpression + "\t");
    resetClickedNumbers();
    console.log(expression)
    console.log("Enter")
  };

  const hideAndUpdate = (clickedNums, newResult) => {
    // Hide first button
    setShowNumbers((prevState) => ({
      ...prevState,
      [clickedNums[0]]: false,
    }));

    // Update value of second
    console.log("howdy")
    console.log(parsed[clickedNums[1]]);
    parsed[clickedNums[1]] = newResult
    console.log(parsed[clickedNums[1]]);

  }

  const resetClickedNumbers = () => {
    setClickedNumbers({
      num1: false,
      num2: false,
      num3: false,
      num4: false,
      num5: false,
      num6: false,
    });
  }
  const checkClickedNumbers = () => {
    const clickedNums = []
    if (clickedNumbers.num1) {
      clickedNums.push("num1")
    }
    if (clickedNumbers.num2) {
      clickedNums.push("num2")
    }
    if (clickedNumbers.num3) {
      clickedNums.push("num3")
    }
    if (clickedNumbers.num4) {
      clickedNums.push("num4")
    }
    if (clickedNumbers.num5) {
      clickedNums.push("num5")
    }
    if (clickedNumbers.num6) {
      clickedNums.push("num6")
    }

    return clickedNums;
  }

  // Check if parsed exists and is an object
  if (!parsed || typeof parsed !== 'object') {
    return <div>No parsed data available</div>;
  }

  // Render the buttons
  return (
    <div>
      <h1>Puzzle!</h1>
      <p><b>Target: {parsed["target"]}</b></p>
      <div>
      {showNumbers.num1 && (
          <button key="num1" onClick={() => handleNumberClick('num1', parsed["num1"])}>
            {parsed["num1"]}
          </button>
        )}
        {showNumbers.num2 && (
          <button key="num2" onClick={() => handleNumberClick('num2', parsed["num2"])}>
            {parsed["num2"]}
          </button>
        )}
        {showNumbers.num3 && (
          <button key="num3" onClick={() => handleNumberClick('num3', parsed["num3"])}>
            {parsed["num3"]}
          </button>
        )}
        <br/>
        {showNumbers.num4 && (
          <button key="num4" onClick={() => handleNumberClick('num4', parsed["num4"])}>
            {parsed["num4"]}
          </button>
        )}
        {showNumbers.num5 && (
          <button key="num5" onClick={() => handleNumberClick('num5', parsed["num5"])}>
            {parsed["num5"]}
          </button>
        )}
        {showNumbers.num6 && (
          <button key="num6" onClick={() => handleNumberClick('num6', parsed["num6"])}>
            {parsed["num6"]}
          </button>
        )}
        <br />
        <button key="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button key="sub" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button key="mult" onClick={() => handleOperatorClick('*')}>
          x
        </button>
        <button key="div" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button key="enter" onClick={handleEnterClick}>
          Enter
        </button>
      </div>
      <br/>
      <div>
        <p>Game Log:</p>
        <ul>
          {gameLog.map((logEntry, index) => (
          <li key={index}>{logEntry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  