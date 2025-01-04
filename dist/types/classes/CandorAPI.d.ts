import { EventEmitter } from "events";
import { Types } from "../types";
import Config from "./Config";
import User from "./User";
import Review from "./Review";
import Cache from "./CacheAPI";
/**
 *  CondorAPI
 *
 * @extends EventEmitter
 * @class
 */
export default class CandorAPI extends EventEmitter {
    /**
     * Candor public API key.
     *
     * @type {string}
     */
    apiKey: string;
    /**
     * Configuration file.
     *
     * @type {Config}
     */
    config: Config;
    /**
     * Init cache system.
     *
     * @type {Cache}
     */
    cache: Cache;
    /**
     * Candor API constructor
     *
     * @param {Types.CandorAPIOptions} options - Constructor options.
     * @param {string} options.apiKey - Candor public API key.
     * @param {Types.ConfigOptions} [options.config] - Configuration options.
     * @param {string} [options.config.baseUrl] - API base URL.
     *    @default options.config.baseUrl = "https://api.candorstudios.net/api"
     * @param {boolean} [options.config.enableCache] - Enables cache.
     *    @default options.config.enableCache = false
     */
    constructor(options: Types.CandorAPIOptions);
    /**
     * This method returns an array of objects.
     *
     * @param {string} freelancerId - Freelancer ID
     * @returns {Promise<Review[]>}
     * @throws {Error}
     */
    getReviews(freelancerId: string): Promise<Review[]>;
    /**
     * This method retrives your informations.
     *
     * @returns {Promise<User>}
     * @throws {Error}
     */
    getMe(): Promise<User>;
    /**
     * This method checks if API Key is valid.
     *
     * @returns {Promise<void>}
     * @throws {Error}
     */
    private checkKey;
}
