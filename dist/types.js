"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.Types = void 0;
/**
 * Types namespace.
 *
 * @namespace
 */
var Types;
(function (Types) {
    /**
     * User type enum. This value depends on how you created your account.
     *
     * @enum
     */
    var UserType;
    (function (UserType) {
        UserType[UserType["Native"] = 0] = "Native";
        UserType[UserType["Discord"] = 1] = "Discord";
    })(UserType = Types.UserType || (Types.UserType = {}));
})(Types || (exports.Types = Types = {}));
/**
 * Events enum.
 *
 * @enum
 */
var Events;
(function (Events) {
    Events["Ready"] = "ready";
})(Events || (exports.Events = Events = {}));
