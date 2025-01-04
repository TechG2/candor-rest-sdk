import CandorAPI from "./classes/CandorAPI";
import { Types, Events } from "./types";
import registerBaseUrl from "./funcs/registerBaseUrl";
import enableCache from "./funcs/enableCache";
import User from "./classes/User";
import Review from "./classes/Review";
import CacheAPI from "./classes/CacheAPI";
import Config from "./classes/Config";

export {
  CandorAPI as API,
  Types,
  Events,
  User as CandorUser,
  Review as CandorReview,
  CacheAPI,
  Config,
  registerBaseUrl,
  enableCache,
};
