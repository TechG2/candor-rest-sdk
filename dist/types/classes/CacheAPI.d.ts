import CandorAPI from "./CandorAPI";
import Review from "./Review";
import User from "./User";
export default class CacheAPI {
    private client;
    me: User | undefined;
    reviews: Map<string, Review[]>;
    constructor(candorAPI: CandorAPI);
}
