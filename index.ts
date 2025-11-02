import userRouter from './src/infrastructure/http/routes/userRoutes.ts';
import Test from "./test.ts";
import express from "express";
const app = express();
const PORT = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log(Test())
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});