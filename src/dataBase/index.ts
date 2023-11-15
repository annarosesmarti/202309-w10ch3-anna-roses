import chalk from "chalk";
import mongoose from "mongoose";

export const connectToDatabase = async (mongoURL: string) => {
  try {
    await mongoose.connect(mongoURL);
    console.log(chalk.green("Connected to database"));
  } catch (error) {
    console.log(`${error.message} error connecting ddbb`);
  }
};
