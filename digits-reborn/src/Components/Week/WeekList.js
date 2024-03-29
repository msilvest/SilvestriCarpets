// This stateful child component renders all the names of the days of the week for
// the user to choose from. Each day is give its own button and when the user clicks
// on a button, they are routed to the proper list of puzzles for that day.
// Currently, only the Sunday button when clicked displays any data because we have
// not finished inputting all our data.

import { Link } from "react-router-dom";

export default function WeekList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }

    return (
      <div>
        <h1>Choose a Day</h1>
        <ul>
         {parsed.map((item) => (
          <Link to={`/AllPuzzles/${item.id}`}>
            <button>
              {item.attributes.dayName}
            </button>
          </Link>
          ))} 
         </ul>
         <p>Only Sunday has data in back4app, so it is the only button (for now) that
          when clicked, will show you buttons to the puzzles for that day. We plan to add
          more data for future iterations.
         </p>
      </div>
    );
  }