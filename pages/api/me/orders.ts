import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { getOrderAll } from "lib/controllers/orders";
import { handlerCors } from "../middelware";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   await handlerCors(req, res);
   const user = await getOrderAll(token.id);
   res.send(user);
}
const met = methods({
   get: handler,
});
export default authMiddelware(met);
