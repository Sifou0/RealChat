import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  deleteUser,
  updateUser,
} from "../../../controller/users/userController";
import verifyUserToken from "../../../utils/auth/verifyToken";

const router = Router();

router.get("/", verifyUserToken, getUsers);
router.get("/:id", getUserById);
router.get("/email", getUserByEmail);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export { router };
