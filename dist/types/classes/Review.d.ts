import { Types } from "../types";
import CandorAPI from "./CandorAPI";
import User from "./User";
export default class Review implements Types.ReviewInterface {
    candorAPI: CandorAPI;
    rating: number;
    review: string;
    reviewer: User;
    reviewed: User;
    constructor(reviewOptions: Types.Request.Review, candorAPI: CandorAPI);
}
