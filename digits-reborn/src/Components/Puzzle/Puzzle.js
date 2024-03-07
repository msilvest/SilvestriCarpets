import { useState, useEffect } from "react";
import PuzzleList from "./PuzzleList";
import { getOnePuzzle} from "../../Services/Puzzles";
import { useParams } from "react-router-dom";

export default function Puzzle() {
    const [parsed, setParsed] = useState([]);
    const { puzzleId } = useParams();

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