export interface Helper {
  type: string;
  name: string;
  description: string;
  examples: string[];
  toLongDescription(): string;
}
