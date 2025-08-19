import { createWriteStream } from "fs";
import type { Entry } from "../Entry.ts";

export function print(entries: Entry[], outputFilePath: string) {
  const stream = createWriteStream(outputFilePath);
  stream.write("# Environment variables\n");
  stream.write("\n");
  stream.write(
    "The `example` app uses **declarative environment variables** powered by **xyz**.\n"
  );
  stream.write("\n");
  stream.write("| Name | Usage | Description |\n");
  stream.write("| - | - | - |\n");

  for (const entry of entries) {
    stream.write(`| ${entry.name} | Required | No description provided |`);
  }

  stream.end();
}
