import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { sendCode } from "lib/controllers/auth";
import { handlerCors } from "../middelware";

export default methods({
   async post(req: NextApiRequest, res: NextApiResponse) {
      await handlerCors(req, res);
      if (req.body.email) {
         const aleat = await sendCode(req.body.email, req.body.name);
         res.send(aleat);
      } else {
         res.send("Falta DATOS");
      }
   },
});
