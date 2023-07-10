import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { searchProductById } from "lib/controllers/products";
import { handler } from "../middelware";

export default methods({
   async get(req: NextApiRequest, res: NextApiResponse) {
      await handler(req, res);
      const { id } = req.query;
      const search = await searchProductById(id as string);
      res.send(search);
   },
});
