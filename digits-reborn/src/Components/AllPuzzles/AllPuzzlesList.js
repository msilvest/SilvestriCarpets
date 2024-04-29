// This stateful child component renders all the names of the puzzles for the 
// user to play. Each puzzle name is give its own button and when the user clicks
// on a button, they are routed to the proper puzzle.

import { Link } from "react-router-dom";

export default function AllPuzzlesList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }
  
    // Render the buttons
    return (
      <div className="week-page">
        <h1>All Puzzles</h1>
        <ul>
         {parsed.map((item) => (
          <Link to={`/Puzzle/${item.id}`}>
            <button className="day-btn">
              {item.attributes.name}
            </button>
          </Link>
          ))} 
         </ul>
      </div>
    );
  }