import Parse from "parse";

const validKeys = [
    "target", "num1", "num2", "num3", "num4", "num5", "num6"
];

export const getAllPuzzles = async () => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.find();
      return results;
  };

export const getOnePuzzle = async (name) => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get(name);
    // console.log("results:")
    // console.log(results.attributes)

    // Filter attributes based on validKeys
    const filteredAttributes = {};
    Object.keys(results.attributes).forEach(key => {
        if (validKeys.includes(key)) {
            filteredAttributes[key] = results.attributes[key];
        }
    });

    // console.log("return")
    // console.log(typeof(filteredAttributes))
    return filteredAttributes;
};