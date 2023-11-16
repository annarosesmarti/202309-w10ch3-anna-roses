import { type Request, type Response } from "express";
import { type ZipiZapeRepository } from "../types";

class ZipiZapeController {
  constructor(private readonly zipiZapeRepository: ZipiZapeRepository) {}

  public getZipiZape = async (_req: Request, res: Response): Promise<void> => {
    const zipiZape = await this.zipiZapeRepository.getZipiZape();

    res.status(200).json({ zipiZape });
  };
}

export default ZipiZapeController;
