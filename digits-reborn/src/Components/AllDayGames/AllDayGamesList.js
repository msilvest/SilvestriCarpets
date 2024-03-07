import { Link } from "react-router-dom";

export default function AllDayGamesList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }
  
    // Render the buttons
    return (
      <div>
        <h1>All Puzzles</h1>
        <ul>
         {parsed.map((item) => (
          <Link to={`/Puzzle/${item.id}`}>
            <button>
              {item.attributes.name}
            </button>
          </Link>
          ))} 
         </ul>
      </div>
    );
  }