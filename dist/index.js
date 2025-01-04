"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableCache = exports.registerBaseUrl = exports.Classes = exports.Events = exports.Types = exports.API = void 0;
var CandorAPI_1 = __importDefault(require("./classes/CandorAPI"));
exports.API = CandorAPI_1.default;
var types_1 = require("./types");
Object.defineProperty(exports, "Types", { enumerable: true, get: function () { return types_1.Types; } });
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return types_1.Events; } });
var registerBaseUrl_1 = __importDefault(require("./funcs/registerBaseUrl"));
exports.registerBaseUrl = registerBaseUrl_1.default;
var enableCache_1 = __importDefault(require("./funcs/enableCache"));
exports.enableCache = enableCache_1.default;
var User_1 = __importDefault(require("./classes/User"));
var Review_1 = __importDefault(require("./classes/Review"));
var Classes = {
    CandorUser: User_1.default,
    CandorReview: Review_1.default,
};
exports.Classes = Classes;
