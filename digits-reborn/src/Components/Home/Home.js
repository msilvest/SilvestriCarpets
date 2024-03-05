import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <h1>Digits Reborn</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
      </section>
    );
  }