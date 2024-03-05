import * as Env from "../environments.js";
import Parse from "parse";

Parse.initialize(Env.PARSE_APP_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_SERVER_URL;

const getOnePuzzle = async () => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get("Gz4c9hrYnk");
      return results;
};

export default getOnePuzzle;