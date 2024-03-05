// export default function Puzzle1List({ parsed }) {
//     return (
//       <div>
//         <h1>Main Component</h1>
//         <ul>
//           {parsed.map((item) => (
//             <li>
//               {Object.keys(item.attributes).map(
//                 (key) => `${key}: ${item.attributes[key]} | `
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

export default function Puzzle1List({ parsed }) {
    // Check if parsed.attributes exists and is an object
    if (!parsed || !parsed.attributes || typeof parsed.attributes !== 'object') {
      return <div>No attributes available</div>;
    }
  
    // Render the list if parsed.attributes is valid
    return (
      <div>
        <h1>Main Component</h1>
        <ul>
          {Object.entries(parsed.attributes).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value instanceof Date ? value.toString() : value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  