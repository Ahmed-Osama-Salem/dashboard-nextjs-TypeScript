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

  const { name, email, password, job, phone, image } = req.body;

  const userData = await userSignUp({
    name,
    email,
    password,
    job,
    phone,
    image,
  });
  // console.log(userData, 'res');

  if (userData.status === 400) {
    // console.log(userData, '400 err');

    return res.status(400).json(userData.message);
  }
  if (userData.status === 422) {
    // console.log(userData, '422 err');

    return res.status(422).json(userData.message);
  }

  return res.status(200).json(userData);
}
