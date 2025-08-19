export interface Entry {
  name: string;
  examples: string[];
}

export function createEntry(name: string, examples: string[]) {
  return {
    name,
    examples,
  } satisfies Entry;
}
