// This stateful child component renders all the names of the days of the week for
// the user to choose from. Each day is give its own button and when the user clicks
// on a button, they are routed to the proper list of puzzles for that day.
// Currently, only the Sunday button when clicked displays any data because we have
// not finished inputting all our data.

import { Link } from "react-router-dom";
import { checkUser, handleLogout } from "../Auth/AuthService";
import Parse from "parse";


export default function WeekList({ parsed }) {
    // Check if parsed exists and is an object
    if (!parsed || typeof parsed !== 'object') {
      return <div>No parsed data available</div>;
    }

    // Display username or "Guest" depending on user login status
    var user = "Guest"
    if (checkUser()) {
      const the_user = Parse.User.current();
      user = the_user.get("firstName");
    }

    return (
      <div className="week-page">
        <h1>Choose a Day</h1>
        <p className="user-greet"> Welcome {user} </p>
        {checkUser() ? 
            <div>
              {/* <ul>
                {parsed.map((item) => (
                <Link to={`/AllPuzzles/${item.id}`}>
                  <button className="day-btn">
                    {item.attributes.dayName}
                  </button>
                </Link>
          ))} 
         </ul> */}
              <div>
                <button className="home-button" onClick={handleLogout}>
                    Sign Out
                </button>  
              </div>
              <div>
                <Link to="/MyScores" flag={checkUser()}>
                    <button className="home-button">
                        View My Scores
                    </button>
                </Link>
                </div>  
            </div> : 
            <div>
            <div>
                <Link to="/Login">
                    <button className="home-button">
                        Sign In
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/Register">
                    <button className="home-button">
                        Create Account
                    </button>
                </Link>
            </div>
            </div>}
            <div>
              <Link to="/">
                  <button className="home-button">
                      Go Home
                  </button>
              </Link>
            </div> 
        {<ul>
         {parsed.map((item) => (
          <Link to={`/AllPuzzles/${item.id}`}>
            <button className="day-btn">
              {item.attributes.dayName}
            </button>
          </Link>
          ))} 
         </ul>} 
         <p>Only Sunday has data in back4app, so it is the only button (for now) that
          when clicked, will show you buttons to the puzzles for that day. We plan to add
          more data for future iterations.
         </p>
      </div>
    );
  }