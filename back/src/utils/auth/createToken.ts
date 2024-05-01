import * as jwt from "jsonwebtoken";

export default function createUserToken(email: string): string {
  const JWT_SECRET = process.env.JWT_SECRET ?? "JWT_SECRET";
  try {
    const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: "1h" });
    return token;
  } catch (e) {
    throw e;
  }
}
