import {NextApiRequest, NextApiResponse} from 'next';
import methods from 'micro-method-router';
import {generateToken} from 'lib/controllers/auth';
import {handlerCors} from 'lib/middelware';
import {serialize} from 'cookie';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await generateToken(req.body.email, req.body.code);
  if (!token) {
    res.send('Faltan datos');
  } else if (token.message == 'ninguno') {
    res.status(401).send('Código Incorrecto');
  } else if (token.message == 'agotado') {
    res.status(400).send('Código Vencido');
  }
  const cookie = serialize('token', token.tokenGen, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
  res.setHeader('Set-Cookie', cookie).send({login: true});
  res.end();
}
const handlerAuth = methods({
  post: handler,
});

export default handlerCors(handlerAuth);
