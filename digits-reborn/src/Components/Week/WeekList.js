export default function DayList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }

    return (
      <div>
        <h1>Choose a Day</h1>
        <ul>
         {parsed.map((item) => (
            <button>
              {item.attributes.dayName}
            </button>
          ))} 
         </ul>
      </div>
    );
  }