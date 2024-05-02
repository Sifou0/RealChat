import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function verifyUserToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const JWT_SECRET = process.env.JWT_SECRET ?? "JWT_SECRET";
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader?.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
}

function isTokenValid(token: string): boolean {
  const JWT_SECRET = process.env.JWT_SECRET ?? "JWT_SECRET";
  let isValid = false;
  jwt.verify(token,JWT_SECRET,(err,user) => {
    isValid = !err;
  })
  return isValid;
}

export { verifyUserToken,isTokenValid }