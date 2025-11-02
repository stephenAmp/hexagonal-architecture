import { User } from "../../domain/user/User.ts";

export interface UserRepositoryPort {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string):Promise<User | null>;
}
