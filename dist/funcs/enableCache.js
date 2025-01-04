"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config"));
/**
 * This function is one of the ways you can enable and disable the cache.
 *
 * @param {boolean} enable
 * @returns {void}
 */
exports.default = (function (enable) {
    config_1.default.enableCache = enable;
});
