import { Router } from "express";
import { registerUserHandler } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/register", registerUserHandler);

export default userRouter;
