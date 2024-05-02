import { Router } from "express";
import {loginController, verifyController} from "../../../controller/auth/authController";

const router = Router();

router.post("/", loginController);
router.post("/verify",verifyController)

export { router };
