import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { generateToken } from "lib/controllers/auth";
import { handlerCors } from "lib/middelware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
   const token = await generateToken(req.body.email, req.body.code);
   if (!token) {
      res.send("Faltan datos");
   } else if (token == "ninguno") {
      res.status(401).send("Código Incorrecto");
   } else if (token == "agotado") {
      res.status(400).send("Código Vencido");
   }
   res.status(200).json({ messsage: "Accedistes", token });
}
const handlerAuth = methods({
   post: handler,
});

export default handlerCors(handlerAuth);
