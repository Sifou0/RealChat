import createUserToken from "../../utils/auth/createToken";
import { Request, Response } from "express";
import { getUserByEmail } from "../../utils/db/users/UsersDb";
import bcrypt from "bcrypt";

async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (user == null) {
    res.status(404).json({ error: "wrong credentials" });
    return;
  }
  const validPassword: boolean = await bcrypt.compare(password, user!.password);
  if (!validPassword) {
    res.status(404).json({ error: "wrong credentials" });
    return;
  }
  try {
    const token = createUserToken(email);
    res.status(200).json({ token });
  } catch (e) {
    res.status(401).json({ error: e });
  }
}

export { login };
