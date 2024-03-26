// This is Components, which contains all our routes and handles our login logic.
// We plan to update the login logic when we add authentification.

import Home from "./Home/Home";
// import Login from "./Login/Login";
// import Create from "./Create/Create";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import Puzzle from "./Puzzle/Puzzle";
import Week from "./Week/Week";
import AllPuzzles from "./AllPuzzles/AllPuzzles"
import ProtectedScores from "./Protected/ProtectedScores"
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { checkUser } from "./Auth/AuthService";

export default function Components() {

  // Handle login triggered by form submission
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  const user = checkUser();

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
        <Route path ="MyScores" element={<ProtectedScores flag={user}/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Convenient place to put a footer in the future since it's outside of Routes
      so navigation would be rendered at all Routes */}
    </Router>
  );
}