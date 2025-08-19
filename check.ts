import type { Diagnostic } from "./diagnostic/Diagnostic.ts";
import { SuggestPortHelper } from "./diagnostic/SuggestPortHelper.ts";
import { WarnNotScreamingSnakeCase } from "./diagnostic/WarnNotScreamingSnakeCase.ts";
import type { Helper } from "./helper/Helper.ts";

export function check(helpers: Helper[]) {
  const diagnostics: Diagnostic[] = [];

  for (const helper of helpers) {
    if (helper.name !== helper.name.toUpperCase()) {
      diagnostics.push(new WarnNotScreamingSnakeCase(helper.name));
    }

    if (helper.name.match(/PORT$/) && helper.type !== "port") {
      diagnostics.push(new SuggestPortHelper(helper.name, helper.type));
    }
  }

  return diagnostics;
}
