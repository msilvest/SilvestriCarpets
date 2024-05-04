// This stateful child component renders all data needed for the puzzle so that 
// the user can play. Each number in the puzzle is give its own button. Currently,
// the buttons do not do anything but we plan to add operations buttons so that the 
// user can add, subtract, multiply, or divide the numbers they select from the data
// buttons.

import React, { useState } from 'react';
import { checkUser, addScore } from "../Auth/AuthService";
import Parse from "parse";

export default function PuzzleList({ parsed, parsedReset, puzzleId, puzzleName, puzzleDayName }) {
  // Keep track of what the user inputted and what button needs to be clicked next
  const [gameLog, setGameLog] = useState([]);

  // Keep track of the first num, second num, and operator
  const [firstNum, setFirstNum] = useState('');
  const [firstNumKey, setFirstNumKey] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [operation, setOperation] = useState('');

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

  // Handle number button clicks
  const handleNumberClick = (numberKey, numberValue) => {
    // Set button as clicked
    setClickedNumbers((prevState) => ({
      ...prevState,
      [numberKey]: true,
    }));

    // If a number has been selected (second num)
    if (firstNum !== '' && firstNumKey !== numberKey && operation !== '') {
      setSecondNum(numberValue)
    }
    // If a number has not been selected yet (first num)
    else {
      setFirstNumKey(numberKey);
      setFirstNum(numberValue);
    }

  };

  // Handle operator button clicks
  const handleOperatorClick = (operator) => {
    if (firstNum !== '') {
      setOperation(operator)
    }
  };

  // Handle reset button clicks
  const handleResetClick = () => {
    // Reset game log
    setGameLog([])

    // Reset all button statuses
    resetClickedNumbers();
    resetShowNumbers();

    // Reset all button values
    resetButtons();

    // Reset both numbers and operation
    resetExpression();
  };

  const validResult = (newResult) => {
    // Check for division by 0
    if (secondNum === 0 && operation === '/') {
      alert('Error! You cannot divide by 0')
      resetExpression();
      return false
    }

    // Check for negative numbers
    if (firstNum < secondNum && operation === '-') {
      alert('Error! You cannot have negative numbers')
      resetExpression();
      return false
    }

    // Check for non-integer division
    if (operation === '/' && !Number.isInteger(newResult)) {
      alert('Error! You must divide evenly')
      resetExpression();
      return false
    }

    return true
  }

  const evalExpression = (the_first_num, the_sec_num) => {
    if (operation === '+') {
      return the_first_num + the_sec_num 
    }
    else if (operation === '-') {
      return the_first_num - the_sec_num
    }
    else if (operation === '*') {
      return the_first_num * the_sec_num
    }
    else if (operation === '/') {
      return the_first_num / the_sec_num
    }

  }

  // Used to insert new score entry into scores database
  const insertNewScore = () => {
    // Add a score if user is logged in
    if (checkUser()) {
      const scoreEntry = {
        user: Parse.User.current().id,
        puzzle: puzzleId,
        puzzleName: puzzleName,
        puzzleDay: puzzleDayName,
        score: 3
      }
      addScore(scoreEntry);
    }
  }

  // Handle Enter button click and calculate result
  const handleEnterClick = () => {
    // Find out which two buttons have been clicked
    const clickedNums = checkClickedNumbers();

    // Evaluate the expression 
    const expression = firstNum.toString() + operation + secondNum.toString()
    const newResult = evalExpression(parseInt(firstNum), parseInt(secondNum));

    // Ensure the result is valid
    if (!validResult(newResult)) {
      return
    }

    // Hide one button then update another
    hideAndUpdate(clickedNums, newResult);

    // Update Gamelog
    const newExpression = expression + " = " + newResult
    setGameLog([...gameLog, newExpression]);
    
    // Reset all buttons to be unclicked
    resetClickedNumbers();

    // Reset the values of the two numbers and operator
    resetExpression();

    // Check if the user won the puzzle
    if (newResult === parsed["target"]) {
      alert("Congratulations! You won! :)")
      insertNewScore();
    }
  };

  // Used for gameplay to keep one button and hide the other
  const hideAndUpdate = (clickedNums, newResult) => {
    // Hide first button
    setShowNumbers((prevState) => ({
      ...prevState,
      [clickedNums[0]]: false,
    }));

    // Update value of second button
    parsed[clickedNums[1]] = newResult

  }

  // Set all buttons to be not clicked
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

  // Set all buttons to be shown
  const resetShowNumbers = () => {
    setShowNumbers({
      num1: true,
      num2: true,
      num3: true,
      num4: true,
      num5: true,
      num6: true,
    });
  }

  // Reset both numbers and operation
  const resetExpression = () => {
    setFirstNum('')
    setSecondNum('')
    setOperation('')
  }

  // Reset the values of all the buttons
  const resetButtons = () => {
    parsed["num1"] = parsedReset["num1"];
    parsed["num2"] = parsedReset["num2"];
    parsed["num3"] = parsedReset["num3"];
    parsed["num4"] = parsedReset["num4"];
    parsed["num5"] = parsedReset["num5"];
    parsed["num6"] = parsedReset["num6"];
  }

  // Find which buttons have been clicked
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

  const openPopup = () => {
    var popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  }

  const closePopup = () => {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  // Check if parsed exists and is an object
  if (!parsed || typeof parsed !== 'object') {
    return <div>No parsed data available</div>;
  }

  // Render the buttons
  return (
    <div className="puzzle-page">
      <h1>Puzzle!</h1>
      <button className="day-btn" onClick={openPopup}> How to Play </button>
        <div id="popup" class="popup">
          <h2>How to Play Digits Reborn</h2>
          <p><b>Combine Numbers to Reach the Target</b></p>
          <ul>
            <li>Add, subtract, multiply, and divide any of the six numbers to get the target.</li>
            <li>You do not have to use all of the numbers.</li>
            <li>As you select buttons, your expression will appear on screen. Hit enter to carry out the expression.</li>
            <li>Operations that produce fractions or negative numbers will not be accepted.</li>
          </ul>
          <button className="day-btn" onClick={closePopup}>Close</button>
        </div>
      <p><b>Target: {parsed["target"]}</b></p>
      <div>
      {showNumbers.num1 && (
          <button className="home-button" key="num1" onClick={() => handleNumberClick('num1', parsed["num1"])}>
            {parsed["num1"]}
          </button>
        )}
        {showNumbers.num2 && (
          <button className="home-button" key="num2" onClick={() => handleNumberClick('num2', parsed["num2"])}>
            {parsed["num2"]}
          </button>
        )}
        {showNumbers.num3 && (
          <button className="home-button" key="num3" onClick={() => handleNumberClick('num3', parsed["num3"])}>
            {parsed["num3"]}
          </button>
        )}
        <br/>
        {showNumbers.num4 && (
          <button className="home-button" key="num4" onClick={() => handleNumberClick('num4', parsed["num4"])}>
            {parsed["num4"]}
          </button>
        )}
        {showNumbers.num5 && (
          <button className="home-button" key="num5" onClick={() => handleNumberClick('num5', parsed["num5"])}>
            {parsed["num5"]}
          </button>
        )}
        {showNumbers.num6 && (
          <button className="home-button" key="num6" onClick={() => handleNumberClick('num6', parsed["num6"])}>
            {parsed["num6"]}
          </button>
        )}
        <br />
        <button className="day-btn" key="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className="day-btn" key="sub" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button className="day-btn" key="mult" onClick={() => handleOperatorClick('*')}>
          x
        </button>
        <button className="day-btn" key="div" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button className="day-btn" key="enter" onClick={handleEnterClick}>
          Enter
        </button>
        <br/>
        <button className="day-btn" key="reset" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      <br/>
      <div>
        <p>My selection: {firstNum} {operation} {secondNum}</p>
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
  