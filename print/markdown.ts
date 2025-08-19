import { createWriteStream } from "fs";
import type { Helper } from "../helper/Helper.ts";

export function print(helpers: Helper[], outputFilePath: string) {
  const stream = createWriteStream(outputFilePath);
  stream.write("# Environment variables\n");
  stream.write("\n");
  stream.write(
    "The `example` app uses **declarative environment variables** powered by **xyz**.\n"
  );
  stream.write("\n");
  stream.write("| Name | Usage | Description |\n");
  stream.write("| - | - | - |\n");

  for (const helper of helpers) {
    stream.write(`| ${helper.name} | Required | ${helper.description} |`);
  }

  stream.write("\n");
  stream.write("\n");

  for (const helper of helpers) {
    stream.write(`## ${helper.name}\n`);
    stream.write("\n");
    stream.write(`_${helper.description}_`);
    stream.write("\n");
    stream.write("\n");
    stream.write(helper.toLongDescription());
  }

  stream.end();
}
