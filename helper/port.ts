import { createEntry, Entry } from "../Entry.ts";

export function port(name: string): Entry {
  // minimum 0
  // maximum 65,535
  return {
    type: "port",
    name,
    examples: [],
  };
}
