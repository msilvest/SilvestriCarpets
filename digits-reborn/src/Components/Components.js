import Home from "./Home/Home";
import Login from "./Login/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* Convenient place to put footer since outside of Routes so nav is rendered
      at all Routes */}
    </Router>
  );
}