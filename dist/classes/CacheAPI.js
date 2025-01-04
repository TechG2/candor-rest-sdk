"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cache system.
 *
 * @class
 */
var CacheAPI = /** @class */ (function () {
    /**
     * CacheAPI constructor.
     *
     * @param {CandorAPI} candorAPI
     */
    function CacheAPI(candorAPI) {
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
        this.reviews = new Map();
        this.client = candorAPI;
    }
    return CacheAPI;
}());
exports.default = CacheAPI;
