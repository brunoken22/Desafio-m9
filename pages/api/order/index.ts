import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { createPreferenceControllers } from "lib/controllers/orders";
import { schemaMiddelware } from "lib/schemaMiddelware";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   const product = await createPreferenceControllers(
      req.body,
      req.query.productId,
      token.id
   );
   res.status(200).send(product);
}
const validacion = schemaMiddelware(handler);
const met = methods({
   post: validacion,
});
export default authMiddelware(met);
