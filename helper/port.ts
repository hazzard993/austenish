import type { Helper } from "./Helper.ts";

class PortHelper implements Helper {
  type = "port";
  name: string;
  description = "No description provided";
  examples = [];

  constructor(name: string) {
    this.name = name;
  }

  toLongDescription() {
    return template.replace("$1", this.name);
  }
}

const template = `
The variable $1 is required.

It takes a port number. This can be a number from 0 to 65535.
`.trim();

export function port(name: string) {
  // minimum 0
  // maximum 65,535
  return new PortHelper(name);
}
