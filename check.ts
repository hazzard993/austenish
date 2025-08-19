import type { Entry } from "./Entry.ts";
import type { Diagnostic } from "./diagnostic/Diagnostic.ts";
import { NotScreamingSnakeCase } from "./diagnostic/NotScreamingSnakeCase.ts";

export function check(entries: Entry[]) {
  const diagnostics: Diagnostic[] = [];

  for (const entry of entries) {
    if (entry.name !== entry.name.toUpperCase()) {
      diagnostics.push(new NotScreamingSnakeCase(entry.name));
      console.warn(`The variable ${entry.name} is not screaming snake case.`);
    }
  }

  return diagnostics;
}
