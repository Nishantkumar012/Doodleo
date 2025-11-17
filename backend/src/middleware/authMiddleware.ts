import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'

export interface AuthRequst extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

export const authMiddleware = (
  req: AuthRequst,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret) as { id: string };

    req.user = { id: decoded.id };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
