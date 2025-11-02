import express from "express";
// import userRouter from "../src/infrastructure/http/routes/userRoutes.js";

const app = express();
app.use(express.json());

// mount routers by feature
// app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
