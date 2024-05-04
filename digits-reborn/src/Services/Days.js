// These are the services associated with the "Days" class. Currently,
// we only need to get all the items in this class to display to the 
// user. 

import Parse from "parse";

// Get all items from the Days class
export const getAllDays = async () => {
  let Days = Parse.Object.extend("Days");
  let query = new Parse.Query(Days);
  const results = await query.find();

  return results;
};
