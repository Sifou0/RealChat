import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router as userRouter } from "./src/routes/api/users/usersRoutes";
import { router as authRouter } from "./src/routes/api/auth/authRoutes";
dotenv.config();
const LISTEN_PORT = process.env.LISTEN_PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/login", authRouter);

app.listen(LISTEN_PORT, () => {
  console.log(`Listening on port ${LISTEN_PORT}`);
});
