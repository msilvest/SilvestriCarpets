// This is Components, which contains all our routes and handles our login logic.
// We plan to update the login logic when we add authentification.

import Home from "./Home/Home";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Puzzle from "./Puzzle/Puzzle";
import Week from "./Week/Week";
import AllPuzzles from "./AllPuzzles/AllPuzzles"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {

  // Handle login triggered by form submission
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Create routes to be used throughout the program
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Puzzle/:puzzleId" element={<Puzzle />} />
        <Route path="/Week" element={<Week />} />
        <Route path="/AllPuzzles/:dayId" element={<AllPuzzles />} />
      </Routes>
      {/* Convenient place to put a footer in the future since it's outside of Routes
      so navigation would be rendered at all Routes */}
    </Router>
  );
}