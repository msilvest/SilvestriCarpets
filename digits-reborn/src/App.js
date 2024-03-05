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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          pookie was here
        </p>
      </header> */}
      <Components></Components>
    </div>
  );
}

export default App;
