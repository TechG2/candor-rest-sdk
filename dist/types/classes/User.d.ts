import { Types } from "../types";
import Review from "./Review";
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
    constructor(user: Types.Request.Me, candorAPI: CandorAPI);
    /**
     * This method fetch all the reviews of a specific user.
     *
     * @returns {Promise<Review[]>}
     * @throws {Error}
     */
    getReviews(): Promise<Review[]>;
}
