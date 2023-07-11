import { NextApiRequest, NextApiResponse } from "next";
import { authMiddelware } from "lib/middelware";
import methods from "micro-method-router";
import { User } from "lib/models/user";
import { modXUser } from "lib/controllers/user";
import { handlerCors } from "../middelware";

async function handler(req: NextApiRequest, res: NextApiResponse, token: any) {
   await handlerCors(req, res);

   const user = new User(token.id);
   await user.pull();
   res.send(user.data);
}
async function modHandler(
   req: NextApiRequest,
   res: NextApiResponse,
   token: any
) {
   const mod = await modXUser(req.body, token.id);

   res.send(mod);
}
const met = methods({
   get: handler,
   patch: modHandler,
});
export default authMiddelware(met);
