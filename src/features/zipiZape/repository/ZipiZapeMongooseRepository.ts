import ZipiZape from "../model/zipiZape.js";
import { type ZipiZapeRepository, type ZipiZapeStructure } from "../types.js";

class ZipiZapeMongooseRepository implements ZipiZapeRepository {
  public getZipiZape = async (): Promise<ZipiZapeStructure[]> => {
    const zipiZape = await ZipiZape.find();

    return zipiZape;
  };
}

export default ZipiZapeMongooseRepository;
