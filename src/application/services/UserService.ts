import { type UserRepositoryPort } from "../ports/UserRepositoryPort";
import { User } from "../../domain/user/User";

export class UserService {
  constructor(private userRepository: UserRepositoryPort) {}

  async registerUser(name: string, email: string): Promise<User> {
    const existing = await this.userRepository.findByEmail(email);
    if (existing) throw new Error("Email already registered");

    const newUser = new User(crypto.randomUUID(), name, email);
    return this.userRepository.create(newUser);
  }
}
