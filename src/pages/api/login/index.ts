import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/app/database/connectionDB';
import { userLogin } from '@/app/server/Auth/UserLogin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not supported' });
  }

  connectDB().catch((err) => {
    console.log(err);
  });

  const { email, password } = req.body;

  const loginData = await userLogin({ email, password });
  // console.log(loginData, 'res');

  if (loginData.status === 404) {
    // console.log(loginData, '400 err');

    return res.status(404).json(loginData.message);
  }
  if (loginData.status === 422) {
    // console.log(loginData, '422 err');

    return res.status(422).json(loginData.message);
  }
  if (loginData.status === 400) {
    // console.log(loginData, '400 err');

    return res.status(400).json(loginData.message);
  }

  return res.status(200).json(loginData);
}
