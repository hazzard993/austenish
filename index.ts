import { print } from "./print/markdown.ts";

print([{ name: "test", examples: ["one", "two", "three"] }], "ENVIRONMENT.md");
