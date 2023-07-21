export class APIError extends Error {
  toString(): string {
    return this.message || "Unknown error";
  }
}
