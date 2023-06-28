import Airtable from "airtable";
var base = new Airtable({ apiKey: process.env.AIRTABLE }).base(
   "appuSU1zq7Ki50EmC"
);

export { base };
