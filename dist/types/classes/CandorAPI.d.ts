import { EventEmitter } from "events";
import { Types } from "../types";
import Config from "./Config";
import User from "./User";
import Review from "./Review";
import Cache from "./CacheAPI";
/**
 *  CondorAPI
 */
export default class CandorAPI extends EventEmitter {
    apiKey: string;
    /**
     * Configuration File
     */
    config: Config;
    cache: Cache;
    /**
     * Candor API contructor
     *
     * @param {Types.CandorAPIOptions} options - constructor options
     * @param {string} options.apiKey - Candor public API key
     * @param {Types.ConfigOptions?} options.config - Config options.
     * @param {string?} options.config.baseUrl - API base url @default https://api.candorstudios.net/api
     * @param {string?} options.config.enableCache - Enables cache @default false
     */
    constructor(options: Types.CandorAPIOptions);
    getReviews(freelancerId: string): Promise<Review[]>;
    getMe(): Promise<User>;
    private checkKey;
}
