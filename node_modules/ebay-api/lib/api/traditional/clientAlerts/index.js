"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
const types_js_1 = require("./types.js");
Object.defineProperty(exports, "EventType", { enumerable: true, get: function () { return types_js_1.EventType; } });
var calls;
(function (calls) {
    calls[calls["GetPublicAlerts"] = 0] = "GetPublicAlerts";
    calls[calls["GetUserAlerts"] = 1] = "GetUserAlerts";
    calls[calls["Login"] = 2] = "Login";
    calls[calls["Logout"] = 3] = "Logout";
})(calls || (calls = {}));
exports.default = calls;
