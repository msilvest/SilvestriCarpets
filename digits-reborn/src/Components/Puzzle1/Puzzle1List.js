export default function Puzzle1List({ parsed }) {
    return (
      <div>
        <h1>Main Component</h1>
        <ul>
          {parsed.map((item) => (
            <li>
              {Object.keys(item.attributes).map(
                (key) => `${key}: ${item.attributes[key]} | `
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }