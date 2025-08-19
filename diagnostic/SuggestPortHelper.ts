import type { Diagnostic } from "./Diagnostic.ts";

export class SuggestPortHelper implements Diagnostic {
  name: string;
  helperType: string;

  constructor(name: string, helperType: string) {
    this.name = name;
    this.helperType = helperType;
  }

  toDiagnosticString() {
    return `The variable "${this.name}" looks like a port number but the "${this.helperType}" helper was used for this variable. Use the "port()" helper for port numbers.`;
  }
}
