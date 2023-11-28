import {index} from 'lib/algolia';
import {base} from 'lib/airtable';
import {NextApiRequest, NextApiResponse} from 'next';
import {handlerCors} from 'lib/middelware';
import methods from 'micro-method-router';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  base('Furniture')
    .select({
      view: 'All furniture',
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      const newData = records.map(function (record) {
        return {
          objectID: record.id,
          ...record.fields,
        };
      });
      index.saveObjects(newData);
      res.status(200).json(newData);
    });
}
const met = methods({
  get: handler,
});
export default handlerCors(met);
