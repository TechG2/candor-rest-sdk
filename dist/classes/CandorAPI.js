"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var events_1 = require("events");
var types_1 = require("../types");
var config_1 = __importDefault(require("../config"));
var User_1 = __importDefault(require("./User"));
var Review_1 = __importDefault(require("./Review"));
var CacheAPI_1 = __importDefault(require("./CacheAPI"));
/**
 *  CondorAPI
 *
 * @extends EventEmitter
 * @class
 */
var CandorAPI = /** @class */ (function (_super) {
    __extends(CandorAPI, _super);
    /**
     * Candor API constructor
     *
     * @param {Types.CandorAPIOptions} options - Constructor options.
     * @param {string} options.apiKey - Candor public API key.
     * @param {Types.ConfigOptions} [options.config] - Configuration options.
     * @param {string} [options.config.baseUrl] - API base URL.
     *    @default options.config.baseUrl = "https://api.candorstudios.net/api"
     * @param {boolean} [options.config.enableCache] - Enables cache.
     *    @default options.config.enableCache = false
     */
    function CandorAPI(options) {
        var _this = _super.call(this) || this;
        /**
         * Configuration file.
         *
         * @type {Config}
         */
        _this.config = config_1.default;
        if (options.config) {
            if (options.config.enableCache)
                _this.config.enableCache = options.config.enableCache;
            if (options.config.baseUrl)
                _this.config.setBaseUrl(options.config.baseUrl);
        }
        _this.apiKey = options.apiKey;
        _this.checkKey();
        _this.cache = new CacheAPI_1.default(_this);
        return _this;
    }
    /**
     * This method returns an array of objects.
     *
     * @param {string} freelancerId - Freelancer ID
     * @returns {Promise<Review[]>}
     * @throws {Error}
     */
    CandorAPI.prototype.getReviews = function (freelancerId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, reviews, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(config_1.default.getBaseUrl(), "/reviews/freelancer/").concat(freelancerId), {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: this.apiKey,
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        reviews = data.map(function (result) { return new Review_1.default(result, _this); });
                        if (config_1.default.enableCache)
                            this.cache.reviews.set(freelancerId, reviews);
                        return [2 /*return*/, reviews];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error("An error during the fetch: " + error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method retrives your informations.
     *
     * @returns {Promise<User>}
     * @throws {Error}
     */
    CandorAPI.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("".concat(config_1.default.getBaseUrl(), "/freelancers/@me"), {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: this.apiKey,
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        user = new User_1.default(data, this);
                        if (config_1.default.enableCache)
                            this.cache.me = user;
                        return [2 /*return*/, user];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error("There has been an error during the fetch: " + error_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method checks if API Key is valid.
     *
     * @returns {Promise<void>}
     * @throws {Error}
     */
    CandorAPI.prototype.checkKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, axios_1.default.get("".concat(config_1.default.getBaseUrl(), "/freelancers/@me"), {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: this.apiKey,
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        if (config_1.default.enableCache)
                            this.cache.me = new User_1.default(data, this);
                        return [3 /*break*/, 4];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error("Invalid api key: " + error_3);
                    case 3:
                        this.emit(types_1.Events.Ready, this);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CandorAPI;
}(events_1.EventEmitter));
exports.default = CandorAPI;
