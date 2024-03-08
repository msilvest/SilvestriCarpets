// This is our Create Component (stateful) (parent)
// Currently, the user can type anything in and the login function will 
// work. We plan to add authentification in future iterations.

import { Link } from "react-router-dom";
import { useState } from "react";
  
  function Create({ onLogin }) {
    // Use state to monitor user login info 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    // Handle login triggered by form submission
    const handleLogin = (e) => {
      e.preventDefault();
      // Ensure that username field is not empty
      if (username.trim() !== "") {
        onLogin(username);
      }
    };
  
    return (
      <div>
        <h2>Create</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Enter Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
            required
          />
  
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/Week">
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    )
  }
  export default Create;