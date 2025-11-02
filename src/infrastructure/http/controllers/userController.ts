import  { type Request, type Response } from "express";
import { UserService } from "../../../application/services/UserService.ts";
import { PrismaUserRepository } from "../../db/PrismaUserRepository.ts";

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

export async function getUserHandler(req:Request, res:Response){
  try{
    const { id } = req.params
    const user = await userService.getUserById(id)
    return res.json(user);
  }catch(error:any){
        console.error("Error in getUserHandler:", error.message);
    res.status(404).json({error: error.message})
  }
}