import { expect, it } from "vitest";
import { check } from "./check";
import { port } from "./port";

it("warns that environment variables aren't uppercase", () => {
  const entries = [port("port")];
  const diagnostics = check(entries);
  expect(diagnostics).toHaveLength(1);
  expect(diagnostics[0].toDiagnosticString()).toMatchInlineSnapshot(
    `"The variable "port" is not screaming snake case. Did you mean to use "PORT" instead?"`
  );
});
