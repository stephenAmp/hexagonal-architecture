PRISMA SETUP
1. Run npm install @prisma/client
2. Run npm install -D prisma
3. Run npx prisma init to create a prisma/prisma.schema and a .env file
4. Define database URL in .env eg.DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
6. Define your models in prisma.schema file
<img width="623" height="489" alt="Screenshot 2025-09-29 at 4 49 23 PM" src="https://github.com/user-attachments/assets/b1cfd2fb-bff6-4318-bd5f-dfcc25b498d7" />

7.  Run npx prisma migrate dev --name init to create User and Product tables and also generate prisma client
