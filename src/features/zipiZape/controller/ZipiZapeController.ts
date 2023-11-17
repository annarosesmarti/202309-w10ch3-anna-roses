import { type Request, type Response } from "express";
import {
  type ZipiZapeStructure,
  type ZipiZapeRepository,
  type ZipiZapeByIdRequest,
} from "../types";
import chalk from "chalk";
import zipiZape from "../model/zipiZape";

class ZipiZapeController {
  constructor(private readonly zipiZapeRepository: ZipiZapeRepository) {}

  public getZipiZape = async (_req: Request, res: Response): Promise<void> => {
    const zipiZape = await this.zipiZapeRepository.getZipiZape();

    res.status(200).json({ zipiZape });
  };

  public getZipiZapeById = async (
    req: ZipiZapeByIdRequest,
    res: Response,
  ): Promise<void> => {
    const { twinId } = req.params;

    try {
      const zipiZape = await this.zipiZapeRepository.getZipiZapeById(twinId);

      res.status(200).json({ zipiZape });
    } catch (error) {
      console.log(chalk.red("Id not found"));
    }
  };
}

export default ZipiZapeController;
