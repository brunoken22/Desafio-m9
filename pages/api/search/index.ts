import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFomReq } from "lib/request";
import methods from "micro-method-router";
import { index } from "lib/algolia";
import { handlerCors } from "../middelware";
export default methods({
   async get(req: NextApiRequest, res: NextApiResponse) {
      await handlerCors(req, res);

      const { finalLimit, finalOffset } = getOffsetAndLimitFomReq(req);

      const respuestaAlgolia = await index.search(req.query.q as string, {
         hitsPerPage: finalLimit,
         page: finalOffset > 1 ? Math.floor(finalOffset / finalLimit) : 0,
      });

      const results = respuestaAlgolia.hits.map((r) => (r as any).Name);
      res.send({
         results,
         pagination: {
            limit: finalLimit,
            offset: finalOffset,
            total: respuestaAlgolia.nbHits,
         },
      });
   },
});
