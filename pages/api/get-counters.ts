import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import jwt from 'jsonwebtoken';

// Securely load secret key from environment variable
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'supersecretkey'; // Default to a secret key if not found in env

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Extract token from Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Decoded token:', decoded);


    // Fetch counters from the database
    const counters = await prisma.counter.findUnique({
      where: { id: 1 },
    });

    // Return counters if found
    res.status(200).json({
      visits: counters?.visits ?? 0,
      startedPoll: counters?.startedPoll ?? 0,
      finishedPoll: counters?.finishedPoll ?? 0,
    });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token expired' });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // Handle other errors
    console.error('Token verification failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
