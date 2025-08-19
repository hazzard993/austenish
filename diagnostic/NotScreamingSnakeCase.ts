import type { Diagnostic } from "./Diagnostic.ts";

export class NotScreamingSnakeCase implements Diagnostic {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  toDiagnosticString() {
    return `The variable "${
      this.name
    }" is not screaming snake case. Did you mean to use "${this.name.toUpperCase()}" instead?`;
  }
}
