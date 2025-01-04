import { Types } from "../types";
import CandorAPI from "./CandorAPI";
import User from "./User";

export default class Review implements Types.ReviewInterface {
  candorAPI: CandorAPI;

  rating: number;
  review: string;
  reviewer: User;
  reviewed: User;

  constructor(reviewOptions: Types.Request.Review, candorAPI: CandorAPI) {
    this.candorAPI = candorAPI;

    this.rating = reviewOptions.rating;
    this.review = reviewOptions.review;
    this.reviewer = new User(reviewOptions.reviewer, this.candorAPI);
    this.reviewed = new User(reviewOptions.reviewed, this.candorAPI);
  }
}
