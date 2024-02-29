import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Convenient place to put footer since outside of Routes so nav is rendered
      at all Routes */}
    </Router>
  );
}