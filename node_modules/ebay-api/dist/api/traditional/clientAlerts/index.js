import { EventType } from './types.js';
var calls;
(function (calls) {
    calls[calls["GetPublicAlerts"] = 0] = "GetPublicAlerts";
    calls[calls["GetUserAlerts"] = 1] = "GetUserAlerts";
    calls[calls["Login"] = 2] = "Login";
    calls[calls["Logout"] = 3] = "Logout";
})(calls || (calls = {}));
export { EventType };
export default calls;
