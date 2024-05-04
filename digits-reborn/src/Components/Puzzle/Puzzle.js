// This stateless parent component is used to display the actual puzzle
// game based on what button the user previously selected.  

import { useState, useEffect } from "react";
import PuzzleList from "./PuzzleList";
import { getOnePuzzle} from "../../Services/Puzzles";
import { useParams } from "react-router-dom";
import { getPuzzleDayName, getPuzzleName } from "../../Services/Puzzles";

export default function Puzzle() {
    const [parsed, setParsed] = useState([]);
    const [parsedReset, setParsedReset] = useState([]);
    const { puzzleId }  = useParams();
    const [puzzleName, setPuzzleName] = useState([]);
    const [puzzleDayName, setPuzzleDayName] = useState([]);

    // Get puzzle's name based on button selected by user
    useEffect(() => {
      getPuzzleName(puzzleId).then((puzzleName) => {
        setPuzzleName(puzzleName);
      });
    }, [puzzleId]);

    // Get puzzle's day of the week name based on button selected by user
    useEffect(() => {
      getPuzzleDayName(puzzleId).then((puzzleDayName) => {
        setPuzzleDayName(puzzleDayName);
      });
    }, [puzzleId]);

    // Get one puzzle based on button selected by user
    useEffect(() => {
      getOnePuzzle(puzzleId).then((parsed) => {
        setParsed(parsed);
      });
    }, [puzzleId]);

    // Get a second instance of this puzzle to use on game's reset functionality
    useEffect(() => {
      getOnePuzzle(puzzleId).then((parsedReset) => {
        setParsedReset(parsedReset);
      });
    }, [puzzleId]);

    if (!parsed) {
      return <div>Loading...</div>;
    }

    return <PuzzleList parsed={parsed} parsedReset={parsedReset} puzzleId={puzzleId} puzzleName={puzzleName} puzzleDayName={puzzleDayName} />;
  }