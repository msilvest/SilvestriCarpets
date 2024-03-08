// This stateful child component renders all data needed for the puzzle so that 
// the user can play. Each number in the puzzle is give its own button. Currently,
// the buttons do not do anything but we plan to add operations buttons so that the 
// user can add, subtract, multiply, or divide the numbers they select from the data
// buttons.

export default function PuzzleList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }
  
    // Render the buttons
    return (
      <div>
        <h1>Puzzle!</h1>
        <ul>
          {Object.entries(parsed).map(([key, value]) => (
            <button key={key}>
              {value}
            </button>
          ))}
        </ul>
      </div>
    );
  }
  