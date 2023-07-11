import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { searchProductById } from "lib/controllers/products";
import { handlerCors } from "../middelware";

export default methods({
   async get(req: NextApiRequest, res: NextApiResponse) {
      await handlerCors(req, res);
      const { id } = req.query;
      const search = await searchProductById(id as string);
      res.send(search);
   },
});
