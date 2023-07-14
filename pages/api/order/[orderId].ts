import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { getOrderId } from "lib/controllers/orders";
import { schemaMiddelware } from "lib/schemaMiddelware";
import { handlerCors } from "lib/middelware";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   const { orderId } = req.query;
   const product = await getOrderId(orderId as string);
   res.send(product);
}
const validacion = schemaMiddelware(handler);
const met = methods({
   get: validacion,
});
export default handlerCors(authMiddelware(met));
