import { Router } from "express";
import PingController from "../controller/PingController.js";

const pingRouter = Router();

const pingController = new PingController();

pingRouter.use("/", pingController.getPong);

export default pingRouter;
