import {index} from 'lib/algolia';
import {base} from 'lib/airtable';
import {NextApiRequest, NextApiResponse} from 'next';
import {handlerCors} from 'lib/middelware';
import methods from 'micro-method-router';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let newData = [];
  return await base('Furniture')
    .select({
      view: 'All furniture',
    })
    .eachPage(
      async function page(records, fetchNextPage) {
        newData = records.map(function (record) {
          return {
            objectID: record.id,
            ...record.fields,
          };
        });
        await fetchNextPage();
      },
      async function done() {
        console.log(newData.length);
        await index.replaceAllObjects(newData);
        res.status(200).json(newData.length);
      }
    );
}
const met = methods({
  get: handler,
});

export default handlerCors(met);
