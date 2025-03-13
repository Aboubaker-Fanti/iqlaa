import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const counter = await prisma.counter.update({
      where: { id: 1 },
      data: { startedPoll: { increment: 1 } },
    });

    res.status(200).json({ startedPoll: counter.startedPoll });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error incrementing poll starts' });
  }
}
