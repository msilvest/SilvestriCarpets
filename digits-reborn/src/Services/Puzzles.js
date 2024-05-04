// These are the services associated with the "Puzzles" class. Currently,
// we have three methods that read information from the Puzzles class, each 
// of which are described below.

import Parse from "parse";

const validKeys = [
    "target", "num1", "num2", "num3", "num4", "num5", "num6"
];

// Get all puzzles in the Puzzles class
export const getAllPuzzles = async () => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.find();
      return results;
  };

// Get all puzzles associated with the inputted id, 
// which corresponds to a day in the Days class
export const getPuzzlesForDay = async (dayId) => {
    // First query to get the day from the id passed in
    let Days = Parse.Object.extend("Days");
    let query1 = new Parse.Query(Days);
    const the_day = await query1.get(dayId)

    // Now query to get the puzzles associated with the day object
    let Puzzles = Parse.Object.extend("Puzzles");
    let query2 = new Parse.Query(Puzzles);
    query2.equalTo("day", the_day);
    const results = await query2.find();

    return results;
}

// Get the puzzle from the Puzzles class associated with the inputted id
export const getOnePuzzle = async (puzzleId) => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get(puzzleId);

    // Filter attributes based on validKeys
    const filteredAttributes = {};
    Object.keys(results.attributes).forEach(key => {
        if (validKeys.includes(key)) {
            filteredAttributes[key] = results.attributes[key];
        }
    });

    return filteredAttributes;
};

// Get the name of a puzzle
export const getPuzzleName = async (puzzleId) => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get(puzzleId);

    return results.get("name");
}

// Get day name associated with a certain puzzle
export const getPuzzleDayName = async (puzzleId) => {
    let Puzzles = Parse.Object.extend("Puzzles");
    let query = new Parse.Query(Puzzles);
    const results = await query.get(puzzleId);

    const dayId = results.get("day").id

    let Days = Parse.Object.extend("Days");
    let query2 = new Parse.Query(Days);
    const results2 = await query2.get(dayId);

    return results2.get("dayName");
}
