"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(options) {
        this.baseUrl = "";
        this.enableCache = false;
        if (options) {
            if (options.baseUrl)
                this.baseUrl = options.baseUrl;
            if (options.enableCache)
                this.enableCache = options.enableCache;
        }
    }
    // getter
    Config.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    // setter
    Config.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl;
    };
    return Config;
}());
exports.default = Config;
