import type { Entry } from "../Entry";

export function string(name: string): Entry {
  return {
    type: "string",
    name,
    examples: [],
  };
}
