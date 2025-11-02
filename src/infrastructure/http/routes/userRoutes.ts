import { Router } from "express";
import { getUserHandler, registerUserHandler } from "../controllers/userController.ts";

const userRouter = Router();

userRouter.post("/register", registerUserHandler);
userRouter.get("/:id", getUserHandler)

export default userRouter;
