import { useState, useEffect } from "react";
import Puzzle1List from "./Puzzle1List";
import getAllPuzzles from "../../Common/Data.js";

export default function Puzzle1() {
    const [parsed, setParsed] = useState([]);

    useEffect(() => {
      getAllPuzzles().then((parsed) => {
        setParsed(parsed);
      });
    }, []);
  
    if (!parsed) {
      return <div>Loading...</div>;
    }
  
    return <Puzzle1List parsed={parsed} />;
    // return (
    //     <section>
    //         <h1>Puzzle1</h1>
    //     </section>
    // );
  }