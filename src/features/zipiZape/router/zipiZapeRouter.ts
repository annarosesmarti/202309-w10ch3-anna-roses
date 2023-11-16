import { Router } from "express";
import ZipiZapeController from "../controller/ZipiZapeController.js";
import ZipiZapeMongooseRepository from "../repository/ZipiZapeMongooseRepository.js";

const zipiZapeRouter = Router();

const zipiZapeMongooseRepository = new ZipiZapeMongooseRepository();

const zipiZapeController = new ZipiZapeController(zipiZapeMongooseRepository);

zipiZapeRouter.get("/", zipiZapeController.getZipiZape);

export default zipiZapeRouter;
