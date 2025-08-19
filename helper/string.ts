import type { Helper } from "./Helper";

class StringHelper implements Helper {
  type = "string";
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
The $1 variable is a **required** variable that takes a string.
`.trim();

export function string(name: string) {
  return new StringHelper(name);
}
