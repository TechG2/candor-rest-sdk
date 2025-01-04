import CandorAPI from "./CandorAPI";
import Review from "./Review";
import User from "./User";
/**
 * Cache system.
 *
 * @class
 */
export default class CacheAPI {
    /**
     * Main class.
     *
     * @type {CandorAPI}
     */
    private client;
    /**
     * This variable stores in chache the user.
     *
     * @type {User | undefined}
     * @example
     * const api = new Candor.API({...});
     * const cacheUser = api.cache.me;
     *
     * console.log(cacheUser);
     */
    me: User | undefined;
    /**
     * This variable stores in chache the reviews.
     *
     * @type {Map<string, Review[]>}
     * @example
     * const api = new Candor.API({...});
     * const cacheReviews = api.cache.reviews.get("freelancerID");
     *
     * console.log(cacheReviews);
     */
    reviews: Map<string, Review[]>;
    /**
     * CacheAPI constructor.
     *
     * @param {CandorAPI} candorAPI
     */
    constructor(candorAPI: CandorAPI);
}
