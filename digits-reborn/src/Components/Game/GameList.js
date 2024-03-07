export default function Puzzle1List({ parsed }) {
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
  