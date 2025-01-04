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
    private baseUrl;
    /**
     * This property enables the cache.
     *
     * @type {boolean}
     * @default false
     */
    enableCache: boolean;
    /**
     * Config constructor.
     *
     * @param {Types.ConfigOptions} options - Constructor options.
     * @param {string} [options.baseUrl] - Candor API base URL.
     *    @default options.baseUrl = "https://api.candorstudios.net/api"
     * @param {string} [options.baseUrl] - Candor API base URL.
     *    @default options.enableCache = false
     */
    constructor(options?: Types.ConfigOptions);
    /**
     * This method returns the current base url.
     *
     * @returns {string}
     */
    getBaseUrl(): string;
    /**
     * This method sets the current base url.
     *
     * @returns {void}
     * @param {string} baseUrl - New base url.
     */
    setBaseUrl(baseUrl: string): void;
}
