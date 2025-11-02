// import { User } from "../../../domain/user/User";
// import { UserRepositoryPort } from "../../../application/ports/UserRepositoryPort";

// export class InMemoryUserRepository implements UserRepositoryPort {
//   private users: User[] = [];

//   async create(user: User): Promise<User> {
//     this.users.push(user);
//     return user;
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     return this.users.find(u => u.email === email) || null;
//   }
// }
