import { prisma } from "./prismaClient";
import { User } from "../../domain/user/User";
import { UserRepositoryPort } from "../../application/ports/UserRepositoryPort";

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
}
