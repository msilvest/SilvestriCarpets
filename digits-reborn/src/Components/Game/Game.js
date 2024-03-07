import { useState, useEffect } from "react";
import Puzzle1List from "./GameList";
import { getOnePuzzle} from "../../Services/Puzzle";
import { useParams } from "react-router-dom";

export default function Puzzle1() {
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
  
    return <Puzzle1List parsed={parsed} />;
  }