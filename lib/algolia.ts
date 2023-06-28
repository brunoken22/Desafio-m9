import algoliasearch from "algoliasearch";

const client = algoliasearch("PGV3O4P3KI", process.env.ALGOLIA);
const index = client.initIndex("products");
export { index };
