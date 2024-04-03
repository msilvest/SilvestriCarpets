// This is Components, which contains all our routes. Our login and register
// functionalities are now being handled by the AuthLogin and AuthRegister
// components.

import Home from "./Home/Home";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import Puzzle from "./Puzzle/Puzzle";
import Week from "./Week/Week";
import AllPuzzles from "./AllPuzzles/AllPuzzles"
import ProtectedScores from "./ProtectedScores/ProtectedScores"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function Components() {

  // Create routes to be used throughout the program
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<AuthLogin />} />
        <Route path="/Register" element={<AuthRegister />} />
        <Route path="/Puzzle/:puzzleId" element={<Puzzle />} />
        <Route path="/Week" element={<Week />} />
        <Route path="/AllPuzzles/:dayId" element={<AllPuzzles />} />
        {/* Protected Route: */}
        <Route path ="/MyScores" element={<ProtectedScores />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Convenient place to put a footer in the future since it's outside of Routes
      so navigation would be rendered at all Routes */}
    </Router>
  );
}