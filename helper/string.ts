import type { Helper } from "./Helper";

class StringHelper implements Helper {
  type = "string";
  name: string;
  description = "No description provided";
  examples = [];

  constructor(name: string) {
    this.name = name;
  }

  toMarkdownSection() {
    return template.replaceAll("$1", this.name).replace("$2", this.description);
  }
}

const template = `
## $1

_$2_

The $1 variable is a **required** variable that takes a string.
`.trim();

export function string(name: string) {
  return new StringHelper(name);
}
