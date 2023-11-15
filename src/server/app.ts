import "dotenv/config";
import express from "express";
import chalk from "chalk";

export const app = express();

const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(
    chalk.blue(
      `Server listening on ${chalk.bgBlueBright(`http://localhost:${port}`)}`,
    ),
  );
});