// This is our protected route component. Only users that are logged in are able to
// view the contents on this page. Currently, the page just lets the user know that 
// they are logged in and then provides options for the user to go to different pages.
// In the future, we plan on displaying all the scores for the puzzles that the user
// completed on this page.

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