// This stateless parent component is used to display the actual puzzle
// game based on what button the user previously selected.  

import { useState, useEffect } from "react";
import PuzzleList from "./PuzzleList";
import { getOnePuzzle} from "../../Services/Puzzles";
import { useParams } from "react-router-dom";

export default function Puzzle() {
    const [parsed, setParsed] = useState([]);
    const { puzzleId }  = useParams();

    // Get one puzzle based on button selected by user
    useEffect(() => {
      getOnePuzzle(puzzleId).then((parsed) => {
        setParsed(parsed);
      });
    }, []);

    if (!parsed) {
      return <div>Loading...</div>;
    }
  
    return <PuzzleList parsed={parsed} />;
  }