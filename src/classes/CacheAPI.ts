import CandorAPI from "./CandorAPI";
import Review from "./Review";
import User from "./User";

export default class CacheAPI {
  private client: CandorAPI;

  me: User | undefined;
  reviews: Map<string, Review[]> = new Map();

  constructor(candorAPI: CandorAPI) {
    this.client = candorAPI;
  }
}
