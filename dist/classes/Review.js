"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
var Review = /** @class */ (function () {
    function Review(reviewOptions, candorAPI) {
        this.candorAPI = candorAPI;
        this.rating = reviewOptions.rating;
        this.review = reviewOptions.review;
        this.reviewer = new User_1.default(reviewOptions.reviewer, this.candorAPI);
        this.reviewed = new User_1.default(reviewOptions.reviewed, this.candorAPI);
    }
    return Review;
}());
exports.default = Review;
