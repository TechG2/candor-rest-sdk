"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheAPI = /** @class */ (function () {
    function CacheAPI(candorAPI) {
        this.reviews = new Map();
        this.client = candorAPI;
    }
    return CacheAPI;
}());
exports.default = CacheAPI;
