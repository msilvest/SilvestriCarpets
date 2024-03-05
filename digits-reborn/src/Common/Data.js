import * as Env from "../environments.js";
import Parse from "parse";

Parse.initialize(Env.PARSE_APP_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_SERVER_URL;

const getAllPuzzles = async () => {
  let Puzzles = Parse.Object.extend("Puzzles");
  let query = new Parse.Query(Puzzles);
  const results = await query.find();
    return results;
};

export default getAllPuzzles;