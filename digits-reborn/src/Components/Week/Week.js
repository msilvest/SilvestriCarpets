// This stateless parent component is used to display all the names of the days
// of the week, whick corresponds to different puzzles when a button is clicked on

import { useState, useEffect } from "react";
import WeekList  from "./WeekList";
import { getAllDays } from "../../Services/Days";

export default function Week() {
    const [parsed, setParsed] = useState([]);

    useEffect(() => {
      getAllDays().then((parsed) => {
        setParsed(parsed);
      });
    }, []);
  
    if (!parsed) {
      return <div>Loading...</div>;
    }
  
    return <WeekList parsed={parsed} />;
  }