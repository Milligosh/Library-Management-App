import crypto from "crypto";

export class GenericHelper {
  static generateId():string{
    return crypto.randomUUID().replace(/-/g, "");
  }
}
