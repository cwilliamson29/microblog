import { Router, Request, Response, NextFunction } from 'express';
import { environment } from '../../environments/environment';
import * as jwt from 'jsonwebtoken';

const axios = require('axios');

const router = Router();

router.get('/github/authorize', async (req: Request, res: Response) => {
  const { query } = req;
  const { code } = query;

  const githubAuthResult = await axios.default.post(
    `https://github.com/login/oauth/access_token?client_id=${environment.clientId}&client_secret=${environment.clientSecret}&code=${code}`,
    null,
    { headers: { Accept: 'application/json' } }
  );

  if (!githubAuthResult || !githubAuthResult.data.access_token) {
    return res.status(400).json({
      status: 'error',
      message: 'Could not identify user with GitHub',
    });
  }

  const userResponse = await axios.default.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${githubAuthResult.data.access_token}`,
      Accept: 'application/json',
    },
  });

  const { data } = userResponse;
  const { id, login, avatar_url } = data;

  const payload = { id, login, avatar_url };

  const token = generateToken(payload);

  setCookieOnResponse(`accessToken`, token, res);

  return res.redirect(environment.appUrl);
});

const generateToken = (payload: any) =>
  jwt.sign(payload, environment.appSecret);

const cookieSettings = {
  maxAge: 30 * 24 * 60 * 60 * 1000,
  secure: environment.production,
};

const setCookieOnResponse = (
  cookieName: string,
  cookieVlaue: string,
  response: Response
) => response.cookie(cookieName, cookieVlaue, cookieSettings);

export { router as AuthRoutes };
