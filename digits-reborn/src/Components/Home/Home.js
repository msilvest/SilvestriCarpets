// This is our home component. This is what the user first sees when they run our program.
// We plan to add css styling in the future, but for now there are three buttons displayed
// to the user to help them navigate depending on whether they want to sign in to an
// existing account, create an account, or play as a guest. We plan to allow users to save their
// scores if they are signed in, otherwise the scores will not be saved.

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <h1>Digits Reborn</h1>
            <div>
                <Link to="/Login">
                    <button>
                        Sign In
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/Create">
                    <button>
                        Create Account
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/Week">
                    <button>
                        Guest User
                    </button>
                </Link>
            </div>
      </section>
    );
  }