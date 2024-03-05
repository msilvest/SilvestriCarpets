import { useState, useEffect } from "react";
import Puzzle1List from "./Puzzle1List";
import getAllPuzzles from "../../Common/Data";
import getOnePuzzle from "../../Common/OnePuzzle";

export default function Puzzle1() {
    const [parsed, setParsed] = useState([]);

    useEffect(() => {
      getOnePuzzle().then((parsed) => {
        setParsed(parsed);
      });
    }, []);
  
    if (!parsed) {
      return <div>Loading...</div>;
    }
  
    console.log("parsed")
    console.log(parsed)
    return <Puzzle1List parsed={parsed} />;
    // return (
    //     <section>
    //         <h1>Puzzle1</h1>
    //     </section>
    // );
  }