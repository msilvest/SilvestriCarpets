import Parse from "parse";

export const getAllDays = async () => {
  let Days = Parse.Object.extend("Days");
  let query = new Parse.Query(Days);
  const results = await query.find();

  return results;
};