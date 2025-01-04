import axios from "axios";
import { Types } from "../types";
import Review from "./Review";
import config from "../config";
import CandorAPI from "./CandorAPI";

export default class User implements Types.UserInterface {
  candorAPI: CandorAPI;

  freelancerId: string | undefined;
  flags: string[];
  bio: string | undefined;
  avatar: string | undefined;
  type: Types.UserType;
  freelancerProfile: Types.FreelacerProfile | undefined;
  contactEmail: string | undefined;
  username: string;

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
