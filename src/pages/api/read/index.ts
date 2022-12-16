import type { NextApiRequest, NextApiResponse } from 'next';

import { getTableData } from '@/app/server/read/getTabledata';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'method not supported' });
  }

  const getCells = await getTableData();

  res.status(200).json({ getCells });
}
