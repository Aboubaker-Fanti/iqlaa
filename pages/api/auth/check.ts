import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

// Secret key for JWT
const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const token = req.headers.authorization?.split(' ')[1]; // Bearer Token

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, SECRET_KEY) as { id: string; role: string };

    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: Not an admin' });
    }

    res.status(200).json({ message: 'Admin verified', adminId: decoded.id });
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
