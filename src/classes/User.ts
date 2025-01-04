import axios from "axios";
import { Types } from "../types";
import Review from "./Review";
import config from "../config";
import CandorAPI from "./CandorAPI";

/**
 * CandorUser class.
 *
 * @class
 */
export default class User implements Types.UserInterface {
  /**
   * Candor API main class.
   *
   * @type {CandorAPI}
   */
  candorAPI: CandorAPI;

  /**
   * The User ID
   *
   * @type {string | undefined}
   */
  freelancerId: string | undefined;

  /**
   * User flags.
   *
   * @type {string[]}
   */
  flags: string[];

  /**
   * User Bio.
   *
   * @type {string | undefined}
   */
  bio: string | undefined;

  /**
   * User avatar url.
   *
   * @type {string | undefined}
   */
  avatar: string | undefined;

  /**
   * Account type.
   *
   * @type {Types.UserType}
   */
  type: Types.UserType;

  /**
   * Freelancer profile informations.
   *
   * @type {Types.FreelacerProfile | undefined}
   */
  freelancerProfile: Types.FreelacerProfile | undefined;

  /**
   * User's contact email.
   *
   * @type {string | undefined}
   */
  contactEmail: string | undefined;

  /**
   * User's username.
   *
   * @type {string}
   */
  username: string;

  /**
   * CandorUser constructor.
   *
   * @param {Types.Request.Me} user - User information.
   * @param {CandorAPI} candorAPI - Candor API main class.
   */
  constructor(user: Types.Request.Me, candorAPI: CandorAPI) {
    this.freelancerId = user.uid;
    this.flags = user.flags;
    this.bio = user.bio;
    this.avatar = user.avatar;
    this.type = user.type;
    this.freelancerProfile = user.freelancer_profile;
    this.contactEmail = user.username;
    this.username = user.username;

    this.candorAPI = candorAPI;
  }

  /**
   * This method fetch all the reviews of a specific user.
   *
   * @returns {Promise<Review[]>}
   * @throws {Error}
   */
  async getReviews(): Promise<Review[]> {
    if (!this.freelancerId) throw new Error("Invalid ID.");

    try {
      const response = await axios.get(
        `${config.getBaseUrl()}/reviews/freelancer/${this.freelancerId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.candorAPI.apiKey,
          },
        }
      );
      const data: Types.Request.Review[] = response.data;

      const reviews = data.map((result) => new Review(result, this.candorAPI));
      if (config.enableCache)
        this.candorAPI.cache.reviews.set(this.freelancerId, reviews);

      return reviews;
    } catch (error) {
      throw new Error("There has been an error during the fetch: " + error);
    }
  }
}
