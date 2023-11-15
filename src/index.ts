import express from "express";
import morgan from "morgan";
import { app } from "./server/app.js";
import pingRouter from "./features/ping/router/pingRouter.js";

app.use(morgan("dev"));
app.use(express.json());
app.use("/", pingRouter);
