import type { Helper } from "./Helper.ts";

class PortHelper implements Helper {
  type = "port";
  name: string;
  description: string;
  examples = [];

  constructor(name: string, description: string = "No description provided") {
    this.name = name;
    this.description = description;
  }

  toMarkdownSection() {
    return template.replaceAll("$1", this.name).replace("$2", this.description);
  }
}

const template = `
## $1

_$2_

The variable $1 is required.

It takes a port number. This can be a number from 0 to 65535.
`.trim();

export function port(name: string, description: string) {
  // minimum 0
  // maximum 65,535
  return new PortHelper(name, description);
}
