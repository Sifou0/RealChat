import { Router } from "express";
import { login } from "../../../controller/auth/authController";

const router = Router();

router.post("/", login);

export { router };
