import { type UserRepositoryPort } from "../ports/UserRepositoryPort.ts";
import { User } from "../../domain/user/User.ts";

export class UserService {
  private userRepository: UserRepositoryPort;

  constructor(userRepository: UserRepositoryPort) {
    this.userRepository = userRepository;
  }

  async registerUser(name: string, email: string): Promise<User> {
    const existing = await this.userRepository.findByEmail(email);
    if (existing) throw new Error("Email already registered");

    const newUser = new User(crypto.randomUUID(), name, email);
    return this.userRepository.create(newUser);
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }
}

