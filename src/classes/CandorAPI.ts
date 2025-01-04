import axios from "axios";
import { EventEmitter } from "events";
import { Events, Types } from "../types";
import Config from "./Config";
import config from "../config";
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
  config: Config = config;

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
  constructor(options: Types.CandorAPIOptions) {
    super();

    if (options.config) {
      if (options.config.enableCache)
        this.config.enableCache = options.config.enableCache;
      if (options.config.baseUrl)
        this.config.setBaseUrl(options.config.baseUrl);
    }

    this.apiKey = options.apiKey;
    this.checkKey();

    this.cache = new Cache(this);
  }

  /**
   * This method returns an array of objects.
   *
   * @param {string} freelancerId - Freelancer ID
   * @returns {Promise<Review[]>}
   * @throws {Error}
   */
  async getReviews(freelancerId: string): Promise<Review[]> {
    try {
      const response = await axios.get(
        `${config.getBaseUrl()}/reviews/freelancer/${freelancerId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.apiKey,
          },
        }
      );
      const data: Types.Request.Review[] = response.data;

      const reviews = data.map((result) => new Review(result, this));
      if (config.enableCache) this.cache.reviews.set(freelancerId, reviews);

      return reviews;
    } catch (error) {
      throw new Error("An error during the fetch: " + error);
    }
  }

  /**
   * This method retrives your informations.
   *
   * @returns {Promise<User>}
   * @throws {Error}
   */
  async getMe(): Promise<User> {
    try {
      const response = await axios.get(
        `${config.getBaseUrl()}/freelancers/@me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.apiKey,
          },
        }
      );
      const data: Types.Request.Me = response.data;

      const user = new User(data, this);

      if (config.enableCache) this.cache.me = user;
      return user;
    } catch (error) {
      throw new Error("There has been an error during the fetch: " + error);
    }
  }

  /**
   * This method checks if API Key is valid.
   *
   * @returns {Promise<void>}
   * @throws {Error}
   */
  private async checkKey(): Promise<void> {
    try {
      const response = await axios.get(
        `${config.getBaseUrl()}/freelancers/@me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.apiKey,
          },
        }
      );
      const data: Types.Request.Me = response.data;
      if (config.enableCache) this.cache.me = new User(data, this);
    } catch (error) {
      throw new Error("Invalid api key: " + error);
    } finally {
      this.emit(Events.Ready, this);
    }
  }
}
