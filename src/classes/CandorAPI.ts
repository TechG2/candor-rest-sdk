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
 */
export default class CandorAPI extends EventEmitter {
  apiKey: string = "";

  /**
   * Configuration File
   */
  config: Config = config;

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

  // func
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

  // private
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
