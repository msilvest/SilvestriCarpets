// import logo from './logo.svg';
import './App.css';
import Components from "./Components/Components.js";
import * as Env from "./environments.js";
import Parse from "parse";

Parse.initialize(Env.PARSE_APP_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_SERVER_URL;

function App() {
  return (
    <div className="App">
      <Components></Components>
    </div>
  );
}

export default App;
