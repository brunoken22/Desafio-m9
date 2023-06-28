import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { searchProductById } from "lib/controllers/products";

export default methods({
   async get(req: NextApiRequest, res: NextApiResponse) {
      const { id } = req.query;
      const search = await searchProductById(id as string);
      res.send(search);
   },
});
