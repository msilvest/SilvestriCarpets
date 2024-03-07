// This stateless parent component is used to display all the names of the puzzles 
// available for a user to play given what day of the week they selected.

import { useState, useEffect } from "react";
import AllPuzzlesList from "./AllPuzzlesList";
import { getPuzzlesForDay } from "../../Services/Puzzle";
import { useParams } from "react-router-dom";

export default function AllPuzzles() {
    const [parsed, setParsed] = useState([]);
    const { dayId } = useParams();

    useEffect(() => {
        getPuzzlesForDay(dayId).then((parsed) => {
          setParsed(parsed);
        });
      }, []);
  
    if (!parsed) {
      return <div>Loading...</div>;
    }
  
    return <AllPuzzlesList parsed={parsed} />;
  }