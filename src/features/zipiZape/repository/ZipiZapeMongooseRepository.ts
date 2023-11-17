import ZipiZape from "../model/zipiZape.js";
import { type ZipiZapeRepository, type ZipiZapeStructure } from "../types.js";

class ZipiZapeMongooseRepository implements ZipiZapeRepository {
  public getZipiZape = async (): Promise<ZipiZapeStructure[]> => {
    const zipiZape = await ZipiZape.find();

    return zipiZape;
  };

  public getZipiZapeById = async (
    twinId: string,
  ): Promise<ZipiZapeStructure> => {
    const zipiZape = await ZipiZape.findById(twinId);

    if (!zipiZape) {
      throw new Error("Id not found");
    }

    return zipiZape;
  };
}

export default ZipiZapeMongooseRepository;
