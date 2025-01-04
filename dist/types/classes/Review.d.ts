import { Types } from "../types";
import CandorAPI from "./CandorAPI";
import User from "./User";
/**
 * CondorReview class.
 *
 * @class
 */
export default class Review implements Types.ReviewInterface {
    /**
     * Candor API main class.
     *
     * @type {CandorAPI}
     */
    candorAPI: CandorAPI;
    /**
     * Review rating.
     *
     * @type {number}
     */
    rating: number;
    /**
     * The content of the review.
     *
     * @type {string}
     */
    review: string;
    /**
     * The user who reviewed the freelancer.
     *
     * @type {User}
     */
    reviewer: User;
    /**
     * The reviewed freelancer.
     *
     * @type {User}
     */
    reviewed: User;
    /**
     * CandorReview constructor.
     *
     * @param {Types.Request.Review} reviewOptions - Review informations.
     * @param {CandorAPI} candorAPI - Candor API main class.
     */
    constructor(reviewOptions: Types.Request.Review, candorAPI: CandorAPI);
}
