import { Types } from "../types";

/**
 * Config class.
 *
 * @class
 */
export default class Config {
  /**
   * Candor API base URL.
   *
   * @type {string}
   * @default "https://api.candorstudios.net/api"
   */
  private baseUrl: string = "";

  /**
   * This property enables the cache.
   *
   * @type {boolean}
   * @default false
   */
  enableCache: boolean = false;

  /**
   * Config constructor.
   *
   * @param {Types.ConfigOptions} options - Constructor options.
   * @param {string} [options.baseUrl] - Candor API base URL.
   *    @default options.baseUrl = "https://api.candorstudios.net/api"
   * @param {string} [options.baseUrl] - Candor API base URL.
   *    @default options.enableCache = false
   */
  constructor(options?: Types.ConfigOptions) {
    if (options) {
      if (options.baseUrl) this.baseUrl = options.baseUrl;
      if (options.enableCache) this.enableCache = options.enableCache;
    }
  }

  /**
   * This method returns the current base url.
   *
   * @returns {string}
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * This method sets the current base url.
   *
   * @returns {void}
   * @param {string} baseUrl - New base url.
   */
  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }
}
