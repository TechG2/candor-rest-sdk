import { Types } from "../types";

export default class Config {
  private baseUrl: string = "";

  enableCache: boolean = false;

  constructor(options?: Types.ConfigOptions) {
    if (options) {
      if (options.baseUrl) this.baseUrl = options.baseUrl;
      if (options.enableCache) this.enableCache = options.enableCache;
    }
  }

  // getter
  getBaseUrl(): string {
    return this.baseUrl;
  }

  // setter
  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }
}
