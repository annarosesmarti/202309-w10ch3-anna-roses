import { Schema, model } from "mongoose";
import { type ZipiZapeStructure } from "../types.js";

const zipiZapeSchema = new Schema<ZipiZapeStructure>({
  name: {
    type: String,
    required: true,
  },
  characteristic: {
    type: String,
    required: true,
    enum: ["Mischievous Twin"],
  },
  hair: {
    type: String,
    required: true,
    enum: ["blond", "black"],
  },
  complement: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ZipiZape = model("ZipiZape", zipiZapeSchema, "zipiZape");

export default ZipiZape;
