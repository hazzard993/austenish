import { check } from "./check.ts";
import { port } from "./helper/port.ts";
import { print } from "./print/markdown.ts";

const entries = [port("PORT")];
check(entries).forEach((entry) => {
  console.warn(entry.toDiagnosticString());
});

print(entries, "ENVIRONMENT.md");
