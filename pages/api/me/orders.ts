import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { getOrderAll } from "lib/controllers/orders";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   const user = await getOrderAll(token.id);
   res.send(user);
}
const met = methods({
   get: handler,
});
export default authMiddelware(met);
