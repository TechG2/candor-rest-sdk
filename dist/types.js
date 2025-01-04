"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.Types = void 0;
var Types;
(function (Types) {
    var UserType;
    (function (UserType) {
        UserType[UserType["Native"] = 0] = "Native";
        UserType[UserType["Discord"] = 1] = "Discord";
    })(UserType = Types.UserType || (Types.UserType = {}));
})(Types || (exports.Types = Types = {}));
var Events;
(function (Events) {
    Events["Ready"] = "ready";
})(Events || (exports.Events = Events = {}));
