"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Config class.
 *
 * @class
 */
var Config = /** @class */ (function () {
    /**
     * Config constructor.
     *
     * @param {Types.ConfigOptions} options - Constructor options.
     * @param {string} [options.baseUrl] - Candor API base URL.
     *    @default options.baseUrl = "https://api.candorstudios.net/api"
     * @param {string} [options.baseUrl] - Candor API base URL.
     *    @default options.enableCache = false
     */
    function Config(options) {
        /**
         * Candor API base URL.
         *
         * @type {string}
         * @default "https://api.candorstudios.net/api"
         */
        this.baseUrl = "";
        /**
         * This property enables the cache.
         *
         * @type {boolean}
         * @default false
         */
        this.enableCache = false;
        if (options) {
            if (options.baseUrl)
                this.baseUrl = options.baseUrl;
            if (options.enableCache)
                this.enableCache = options.enableCache;
        }
    }
    /**
     * This method returns the current base url.
     *
     * @returns {string}
     */
    Config.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    /**
     * This method sets the current base url.
     *
     * @returns {void}
     * @param {string} baseUrl - New base url.
     */
    Config.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl;
    };
    return Config;
}());
exports.default = Config;
