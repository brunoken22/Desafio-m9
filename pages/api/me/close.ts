import type {NextApiRequest, NextApiResponse} from 'next';
import methods from 'micro-method-router';
import {handlerCors, authMiddelware} from 'lib/middelware';
import {serialize} from 'cookie';

async function handlerCloseUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookie = serialize('token', '', {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 0,
      sameSite: 'none',
    });
    res.setHeader('Set-Cookie', cookie);
    res.send({login: true});
    res.end();
  } catch (e) {
    res.json({close: false});
  }
}

const met = methods({
  post: handlerCloseUser,
});
const authMiddlewarePass = authMiddelware(met);

export default handlerCors(authMiddlewarePass);
