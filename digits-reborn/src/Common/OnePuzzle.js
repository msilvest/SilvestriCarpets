import * as Env from "../environments.js";
import Parse from "parse";

Parse.initialize(Env.PARSE_APP_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_SERVER_URL;

const validKeys = [
    "target", "num1", "num2", "num3", "num4", "num5", "num6"
];

const getOnePuzzle = async () => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get("Gz4c9hrYnk");
    console.log("results:")
    console.log(results.attributes)

    // Filter attributes based on validKeys
    const filteredAttributes = {};
    Object.keys(results.attributes).forEach(key => {
        if (validKeys.includes(key)) {
            filteredAttributes[key] = results.attributes[key];
        }
    });

    console.log("return")
    console.log(typeof(filteredAttributes))
    return filteredAttributes;
};

export default getOnePuzzle;