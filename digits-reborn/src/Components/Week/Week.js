import { useState, useEffect } from "react";
import DayList  from "./WeekList";
import {getAllDays} from "../../Services/Day";

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
  
    return <DayList parsed={parsed} />;
    // return (
    //     <section>
    //         <h1>Puzzle1</h1>
    //     </section>
    // );
  }