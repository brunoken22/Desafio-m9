import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";

let querySchema = yup.object().shape({
   productId: yup.number().required(),
});
let bodySchema = yup
   .object()
   .shape({
      color: yup.string(),
      tamaño: yup.string(),
   })
   .strict();
export function schemaMiddelware(callback) {
   return async function (
      req: NextApiRequest,
      res: NextApiResponse,
      token: string
   ) {
      try {
         await querySchema.validate({ productId: req.query.productId });
      } catch (e) {
         res.status(400).json({ e });
         throw "Error con el query";
      }
      try {
         await bodySchema.validate(req.body);
         console.log(req.body);

         callback(req, res, token);
      } catch (e) {
         res.status(400).json({ e });
         throw "Error con el body";
      }
   };
}
