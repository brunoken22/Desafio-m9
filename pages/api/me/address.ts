import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { modAllUser } from "lib/controllers/user";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   const user = await modAllUser(req.body, token.id);
   res.send(user);
}
const met = methods({
   patch: handler,
});
export default authMiddelware(met);
