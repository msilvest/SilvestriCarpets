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
                <Link to="/Puzzle1">
                    <button>
                        Guest User
                    </button>
                </Link>
            </div>
      </section>
    );
  }