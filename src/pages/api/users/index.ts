import type { NextApiRequest, NextApiResponse } from 'next';

import { getUsersData } from '@/app/server/users/getUsersData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  try {
    const getUsers = await getUsersData();
    res.status(200).json({ success: true, getUsers, code: 200 });
  } catch (err) {
    res.status(404).json({ success: false, err, code: 404 });
  }
}
