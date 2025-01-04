import CandorAPI from "./classes/CandorAPI";
import { Types, Events } from "./types";
import registerBaseUrl from "./funcs/registerBaseUrl";
import enableCache from "./funcs/enableCache";
import User from "./classes/User";
import Review from "./classes/Review";
declare const Classes: {
    CandorUser: typeof User;
    CandorReview: typeof Review;
};
export { CandorAPI as API, Types, Events, Classes, registerBaseUrl, enableCache, };
