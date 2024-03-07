import { useState, useEffect } from "react";
import WeekList  from "./WeekList";
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
  
    return <WeekList parsed={parsed} />;
  }