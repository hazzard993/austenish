import { expect, it } from "vitest";
import { check } from "./check";
import { port } from "./helper/port";
import { string } from "./helper/string";

it("warns that environment variables aren't uppercase", () => {
  const entries = [port("port")];
  const diagnostics = check(entries);
  expect(diagnostics).toHaveLength(1);
  const diagnosis = diagnostics[0].toDiagnosticString();
  expect(diagnosis).toMatchInlineSnapshot(
    `"The variable "port" is not screaming snake case. Did you mean to use "PORT" instead?"`,
  );
});

it("suggests that variables with port in the name should use the port helper", () => {
  const entries = [string("MY_PORT")];
  const diagnostics = check(entries);
  expect(diagnostics).toHaveLength(1);
  const diagnosis = diagnostics[0].toDiagnosticString();
  expect(diagnosis).toMatchInlineSnapshot(
    `"The variable "MY_PORT" looks like a port number but the "string" helper was used for this variable. Use the "port()" helper for port numbers."`,
  );
});
