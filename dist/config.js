"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __importDefault(require("./classes/Config"));
exports.default = new Config_1.default({
    baseUrl: "https://api.candorstudios.net/api",
    enableCache: false,
});
