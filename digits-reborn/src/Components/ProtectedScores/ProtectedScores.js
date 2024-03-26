import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedScores = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  const goPuzzlesHandler = () => {
    navigate("/Week");
  };

  // checkUser() returns a boolean and it is used as a flag to keep the route protected
  useEffect(() => {
    if (!checkUser()) {
      alert("You must be logged in to view this page");
      navigate("/");
    }
  }, [navigate]);

  return (
        <div>
        {checkUser() ? (
            <div>
              <p>Welcome! You are logged in and can view your scores!</p>{" "}
              <button onClick={goHomeHandler}>Go Home</button>
              <button onClick={goPuzzlesHandler}>Go to Puzzles</button>
            </div>
        ) : ( <></>
        )}
      </div>
  );
};

export default ProtectedScores;