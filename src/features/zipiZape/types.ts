export interface ZipiZapeStructure {
  _id: string;
  name: string;
  characteristic: string;
  hair: string;
  complement: string;
  description: string;
}

export interface ZipiZapeRepository {
  getZipiZape: () => Promise<ZipiZapeStructure[]>;
}
