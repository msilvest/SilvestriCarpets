// This is our home component. This is what the user first sees when they run our program.
// We plan to add css styling in the future, but for now there are three buttons displayed
// to the user to help them navigate depending on whether they want to sign in to an
// existing account, create an account, or play as a guest. We plan to allow users to save their
// scores if they are signed in, otherwise the scores will not be saved.

import { Link } from "react-router-dom";
import { checkUser, handleLogout } from "../Auth/AuthService";

export default function Home() {

    return (
        <section className="home-page">
            <h1 className="home-title">Digits Reborn</h1>
            {checkUser() ? 
            <div>
                <div>
                <button className="home-button" onClick={handleLogout}>
                    Sign Out
                </button>
                </div>
                <div>
                <Link to="/MyScores">
                    <button className="home-button">
                        View My Scores
                    </button>
                </Link>
                </div> 
                <div>
                <Link to="/Week">
                    <button className="home-button">
                        Go to Puzzles
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
            <div>
                <Link to="/Week">
                    <button className="home-button">
                        Guest User
                    </button>
                </Link>
            </div>
            </div>}
      </section>
    );
  }