import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import { app, startServer } from "./server/app.js";
import pingRouter from "./features/ping/router/pingRouter.js";
import { connectToDatabase } from "./dataBase/index.js";

app.use(morgan("dev"));
app.use(express.json());
app.use("/", pingRouter);

if (!process.env.MONGODB_URL) {
  console.log(chalk.red(chalk.red("Missing MongoDB Connection String")));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;
const port = process.env.PORT ?? 4000;

await connectToDatabase(mongoUrl);
startServer(+port);
