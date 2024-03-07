import { useState, useEffect } from "react";
import Puzzle1List from "./GameList";
// import getAllPuzzles from "../../Services/Day";
import { getOnePuzzle } from "../../Services/Puzzle";

export default function Puzzle1() {
    const [parsed, setParsed] = useState([]);

    useEffect(() => {
      getOnePuzzle("Gz4c9hrYnk").then((parsed) => {
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