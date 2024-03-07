import { useState, useEffect } from "react";
import AllDayGamesList from "./AllDayGamesList";
import { getPuzzlesForDay } from "../../Services/Puzzle";
import { useParams } from "react-router-dom";

export default function DayGames() {
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
  
    return <AllDayGamesList parsed={parsed} />;
  }