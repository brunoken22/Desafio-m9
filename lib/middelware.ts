import {NextApiResponse, NextApiRequest} from 'next';
import {decode} from 'lib/jwt';
import NextCors from 'nextjs-cors';

export function authMiddelware(callback) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).send('No hay Token');
    }
    const tokenVerify = decode(token);

    if (tokenVerify) {
      callback(req, res, tokenVerify);
    } else {
      res.status(401).send('Token invalido');
    }
  };
}

export function handlerCors(callback) {
  try {
    return async function (req: NextApiRequest, res: NextApiResponse) {
      // console.log(process.env.ORIGIN);
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: process.env.ORIGIN || 'http://localhost:3000',
        optionsSuccessStatus: 200,
        credentials: true,
      });
      callback(req, res);
    };
  } catch (e) {
    console.log(e);
  }
}
