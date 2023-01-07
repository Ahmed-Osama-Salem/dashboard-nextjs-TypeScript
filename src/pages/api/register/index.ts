import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/app/database/connectionDB';
import { userSignUp } from '@/app/server/Auth/UserSignUp';

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

  const { name, email, password, job } = req.body;

  const userData = await userSignUp({ name, email, password, job });
  console.log(userData, 'res');

  res.status(200).json(userData);
}
