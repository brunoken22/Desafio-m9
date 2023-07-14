import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { sendCode } from "lib/controllers/auth";
import { handlerCors } from "lib/middelware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.body.email) {
      const aleat = await sendCode(req.body.email, req.body.name);
      res.send(aleat);
   } else {
      res.send("Falta DATOS");
   }
}

const handlerAuth = methods({
   post: handler,
});

export default handlerCors(handlerAuth);
