import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import parseBearerToken from "parse-bearer-token";
import { decode } from "lib/jwt";
import NextCors from "nextjs-cors";

export function authMiddelware(callback) {
   return function (req: NextApiRequest, res: NextApiResponse) {
      const token = parseBearerToken(req);

      if (!token) {
         res.status(401).send("No hay Token");
      }

      const tokenVerify = decode(token);

      if (tokenVerify) {
         callback(req, res, tokenVerify);
      } else {
         res.status(401).send("Token invalido");
      }
   };
}

export function handlerCors(callback) {
   try {
      return async function (req: NextApiRequest, res: NextApiResponse) {
         // Run the cors middleware
         // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
         await NextCors(req, res, {
            // Options
            methods: [
               "GET",
               "HEAD",
               "PUT",
               "PATCH",
               "POST",
               "DELETE",
               "OPTIONS",
            ],
            origin: "*",
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
         });

         // Rest of the API logic
         if (req.method === "PATCH") {
            console.log(req.method);
            // Agrega encabezados CORS adicionales específicos para el método PATCH
            res.setHeader("Access-Control-Allow-Methods", "PATCH");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
         }

         callback(req, res);
         //res.json({ message: "Hello NextJs Cors!" });
      };
   } catch (e) {
      console.log(e);
   }
}

// export function handlerCors(handler: NextApiHandler): NextApiHandler {
//    return async function nextApiHandlerWrappedWithNextCors(req, res) {
//       const methods = ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"];
//       await NextCors(req, res, {
//          methods,
//          origin: "*",
//          optionsSuccessStatus: 200,
//       });

//       return handler(req, res);
//    };
// }
