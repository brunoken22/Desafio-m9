import type { NextApiRequest, NextApiResponse } from "next";
import { getOffsetAndLimitFomReq } from "lib/request";
import methods from "micro-method-router";
import { index } from "lib/algolia";
import { handlerCors } from "lib/middelware";
async function handler(req: NextApiRequest, res: NextApiResponse) {
   const { finalLimit, finalOffset } = getOffsetAndLimitFomReq(req);
   // console.log(finalLimit, finalOffset);
   const respuestaAlgolia = await index.search(req.query.q as string, {
      hitsPerPage: finalLimit,
      // page: finalOffset > 1 ? Math.floor(finalOffset / finalLimit) : 0,
      offset: finalOffset,
      length: finalLimit,
   });

   // const results = respuestaAlgolia.hits.map((r) => (r as any).Name);
   res.send({
      results: respuestaAlgolia.hits,
      pagination: {
         limit: finalLimit,
         offset: finalOffset,
         total: respuestaAlgolia.nbHits,
      },
   });
}

const handlerAuth = methods({
   get: handler,
});

export default handlerCors(handlerAuth);
