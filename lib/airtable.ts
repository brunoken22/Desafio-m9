import Airtable from 'airtable';
let base = new Airtable({apiKey: process.env.AIRTABLE}).base(
  'appuSU1zq7Ki50EmC'
);

export {base};
