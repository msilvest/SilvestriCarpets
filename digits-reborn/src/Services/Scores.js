// These are the services associated with the "Scores" class.

import Parse from "parse";

export const getScoresByUserID = (userID) => {
    const Scores = Parse.Object.extend("Scores"); // Assuming your class is named "Scores"
    const query = new Parse.Query(Scores);

    query.equalTo("user", userID);

    return query.find().then((results) => {
        return results; // Array of Parse objects containing scores for the specified user ID
    }).catch((error) => {
        alert(`Error: ${error.message}`);
        return []; // Return an empty array in case of an error
    });
};