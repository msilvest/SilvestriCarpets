import Home from "./Home/Home";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Puzzle1 from "./Game/Game";
import Week from "./Week/Week";
import AllDayGames from "./AllDayGames/AllDayGames"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* Handle login triggered by form submission */
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Puzzle/:puzzleId" element={<Puzzle1 />} />
        <Route path="/Week" element={<Week />} />
        <Route path="/AllPuzzles/:dayId" element={<AllDayGames />} />
      </Routes>
      {/* Convenient place to put footer since outside of Routes so nav is rendered
      at all Routes */}
    </Router>
  );
}