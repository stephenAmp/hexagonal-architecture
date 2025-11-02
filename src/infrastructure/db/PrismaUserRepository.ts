import { prisma } from "./PrismaClient.ts";
import { User } from "../../domain/user/User.ts";
import { type UserRepositoryPort } from "../../application/ports/UserRepositoryPort.ts";

export class PrismaUserRepository implements UserRepositoryPort {
  async create(user: User): Promise<User> {
    const saved = await prisma.user.create({
      data: { id: user.id, name: user.name, email: user.email }
    });
    return new User(saved.id, saved.name, saved.email);
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = await prisma.user.findUnique({ where: { email } });
    return found ? new User(found.id, found.name, found.email) : null;
  }

  async findById(id: string): Promise<User | null> {
    const found = await prisma.user.findUnique({where: { id }});
    return found ? new User(found.id, found.name, found.email) : null
  }
}
