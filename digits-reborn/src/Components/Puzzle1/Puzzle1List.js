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

// const validKeys = [
//     "target", "num1", "num2", "num3", "num4", "num5", "num6"
// ];

// export default function Puzzle1List({ parsed }) {
//     // Check if parsed.attributes exists and is an object
//     if (!parsed || !parsed.attributes || typeof parsed.attributes !== 'object') {
//         return <div>No attributes available</div>;
//     }

//     // Render the list if parsed.attributes is valid
//     return (
//         <div>
//             <h1>Main Component</h1>
//             <ul>
//                 {Object.entries(parsed.attributes).map(([key, value]) => (
//                     validKeys.includes(key) ? (
//                         <button key={key} onClick={() => handleButtonClick(key)}>
//                             {value}
//                         </button>
//                     ) : null
//                 ))}
//             </ul>
//         </div>
//     );
// }



// const validKeys = [
//     "target", "num1", "num2", "num3", "num4", "num5", "num6"
// ];

// export default function Puzzle1List({ parsed }) {
//     console.log("here")
//     console.log(parsed)
//     return Object.entries(parsed)
//     // Check if parsed.attributes exists and is an object
//     if (!parsed || !parsed.attributes || typeof parsed.attributes !== 'object') {
//       return <div>No attributes available</div>;
//     }
  
//     // Render the list if parsed.attributes is valid
//     return (
//       <div>
//         <h1>Main Component</h1>
//         <ul>
//           {Object.entries(parsed.attributes).map(([key, value]) => (
//             <button key={key} onClick={() => handleButtonClick(key)}>
//               {key}
//             </button>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// function handleButtonClick(key) {
//     // You can implement what happens when a button is clicked here
//     console.log(key + " button clicked");
// }

  

export default function Puzzle1List({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }
  
    // Render the buttons
    return (
      <div>
        <h1>Puzzle 1</h1>
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
  