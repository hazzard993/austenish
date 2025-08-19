import type { Entry } from "./Entry.ts";
import type { Diagnostic } from "./diagnostic/Diagnostic.ts";
import { SuggestPortHelper } from "./diagnostic/SuggestPortHelper.ts";
import { WarnNotScreamingSnakeCase } from "./diagnostic/WarnNotScreamingSnakeCase.ts";

export function check(entries: Entry[]) {
  const diagnostics: Diagnostic[] = [];

  for (const entry of entries) {
    if (entry.name !== entry.name.toUpperCase()) {
      diagnostics.push(new WarnNotScreamingSnakeCase(entry.name));
    }

    if (entry.name.match(/PORT$/)) {
      diagnostics.push(new SuggestPortHelper(entry.name, entry.type));
    }
  }

  return diagnostics;
}
