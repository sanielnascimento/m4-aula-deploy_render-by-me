import "express-async-errors";
import "dotenv/config";
import express from "express";
import { sessionRouter, userRouter } from "./routers";
import { handleErrorMiddleware } from "./middlewares";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/login", sessionRouter);

app.use(handleErrorMiddleware);

export default app;
