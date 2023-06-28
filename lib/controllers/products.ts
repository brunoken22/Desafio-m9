import { index } from "lib/algolia";

export async function searchProductById(id: string) {
   const product = await index.getObject(id);
   return product;
}
