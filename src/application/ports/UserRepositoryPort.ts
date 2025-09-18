import { User } from "../../domain/user/User";

export interface UserRepositoryPort {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
