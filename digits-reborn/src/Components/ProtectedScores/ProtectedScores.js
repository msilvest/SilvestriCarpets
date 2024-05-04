// This is our protected route component. Only users that are logged in are able to
// view the contents on this page. Currently, the page just lets the user know that 
// they are logged in and then provides options for the user to go to different pages.
// In the future, we plan on displaying all the scores for the puzzles that the user
// completed on this page.

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import { getScoresByUserID } from "../../Services/Scores";
import Parse from "parse";

const ProtectedScores = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  const goPuzzlesHandler = () => {
    navigate("/Week");
  };

  const [scores, setScores] = useState()

  // checkUser() returns a boolean and it is used as a flag to keep the route protected
  useEffect(() => {
    if (!checkUser()) {
      alert("You must be logged in to view this page");
      navigate("/");
    }
  }, [navigate]);

  // Get one puzzle based on button selected by user
  const userID = Parse.User.current().id;
  const userName = Parse.User.current().get("firstName");
  
  useEffect(() => {
    getScoresByUserID(userID).then((scores) => {
        setScores(scores);
      });
  }, [userID]);

  console.log(scores)
  return (
        <div>
        {checkUser() ? (
            <div className="week-page">
              <div>
                <h2>{userName}'s Scores</h2>
                {scores && scores.length > 0 ? (
                <ul>
                {scores.map((score, index) => (
                <li key={index}>
                Day: {score.get("puzzleDay")} - Puzzle: {score.get("puzzleName")} - Score: {score.get("score")}
                </li>
                ))}
                </ul>
              ) : (
              <p>No scores available. Play more puzzles!</p>
              )}
              </div>
              <button className="day-btn" onClick={goHomeHandler}>Go Home</button>
              <button className="day-btn" onClick={goPuzzlesHandler}>Go to Puzzles</button>
            </div>
        ) : ( <></>
        )}
      </div>
  );
};

export default ProtectedScores;