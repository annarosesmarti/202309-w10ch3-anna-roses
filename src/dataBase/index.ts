import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async (mongoURL: string) => {
  try {
    await mongoose.connect(mongoURL);
    mongoose.set("debug", true);
    console.log(chalk.green("Connected to database"));
  } catch (error) {
    console.log(`${error.message} error connecting ddbb`);
  }
};

export default connectToDatabase;
