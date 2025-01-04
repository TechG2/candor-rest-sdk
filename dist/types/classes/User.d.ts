import { Types } from "../types";
import Review from "./Review";
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
    constructor(user: Types.Request.Me, candorAPI: CandorAPI);
    getReviews(): Promise<Review[]>;
}
