import Parse from "parse";

const validKeys = [
  "dayName"
];

export const getAllDays = async () => {
  let Days = Parse.Object.extend("Days");
  let query = new Parse.Query(Days);
  const results = await query.find();

  console.log(results);
  return results;

  // // Filter attributes based on validKeys
  // const filteredAttributes = {};
  // Object.keys(results.attributes).forEach(key => {
  //     if (validKeys.includes(key)) {
  //         filteredAttributes[key] = results.attributes[key];
  //     }
  // });

};