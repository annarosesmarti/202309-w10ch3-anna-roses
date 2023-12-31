import morgan from "morgan";
import express from "express";
import { app } from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import zipiZapeRouter from "../features/zipiZape/router/zipiZapeRouter.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/zipizape", zipiZapeRouter);
