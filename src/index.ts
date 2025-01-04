import CandorAPI from "./classes/CandorAPI";
import { Types, Events } from "./types";
import registerBaseUrl from "./funcs/registerBaseUrl";
import enableCache from "./funcs/enableCache";
import User from "./classes/User";
import Review from "./classes/Review";

const Classes = {
  CandorUser: User,
  CandorReview: Review,
};

export {
  CandorAPI as API,
  Types,
  Events,
  Classes,
  registerBaseUrl,
  enableCache,
};
