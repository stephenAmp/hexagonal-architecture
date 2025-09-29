import { Request, Response } from "express";
import { UserService } from "../../../application/services/UserService";
import { PrismaUserRepository } from "../../db/PrismaUserRepository";

const repo = new PrismaUserRepository();
const userService = new UserService(repo);

export async function registerUserHandler(req: Request, res: Response) {
  try {
    const { name, email } = req.body;
    const user = await userService.registerUser(name, email);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
