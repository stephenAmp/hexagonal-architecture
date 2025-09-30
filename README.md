PRISMA SETUP
1. Run npm install @prisma/client
2. Run npm install -D prisma
3. Run npx prisma init to create a prisma/prisma.schema and a .env file
4. Define database URL in .env eg.DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
5. Define your models in prisma.schema file
```bash
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id String @id
  name String
  email String @unique
}

```
6.  Run npx prisma migrate dev --name init to create User and Product tables and also generate prisma client
