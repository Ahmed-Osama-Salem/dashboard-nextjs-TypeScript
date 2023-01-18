import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/app/database/connectionDB';
import { insertFormData } from '@/app/server/insertFormData/insertFormData';

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

  const { time, allText, text, textMosad } = req.body;

  const insertData = await insertFormData({ time, allText, text, textMosad });

  res.status(200).json({ insertData });
}
