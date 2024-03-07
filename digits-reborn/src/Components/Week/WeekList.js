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
      </div>
    );
  }