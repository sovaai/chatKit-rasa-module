/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var defaultSendMessage = function (data) { return console.log('no SendMessage'); };
var defaultUIManagment = function (uiManagmentEvent, data) { return console.log('no UIManagment'); };
var defaultNotifications = function (notificationsEvent, data) {
    return console.log('no Notifications');
};
var defaultModules = function (notificationsEvent, data) { return console.log('no modules'); };
var defaultUIEvents = {
    sendMessage: defaultSendMessage,
    uiManagment: defaultUIManagment,
    notifications: defaultNotifications,
    modules: defaultModules,
};

var postFetch = function (body, url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResponse, fetchResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(body),
                    })];
            case 1:
                fetchResponse = _a.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                fetchResult = _a.sent();
                return [2 /*return*/, fetchResult];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };

var resultControl = function (module, result) { return __awaiter(void 0, void 0, void 0, function () {
    var text, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = result.reduce(function (string, _a) {
                    var text = _a.text, image = _a.image;
                    if (image)
                        return string + "<img class=\"sova-ck-rasa-response-img\" style=\"width: 100%;padding: 1rem 0;\" src=\"" + image + "\"/>";
                    return string + "<span>" + text + "</span>";
                }, '');
                data = {
                    text: text,
                    sender: 'request',
                    showRate: false,
                };
                return [4 /*yield*/, module.uiDispatcher('sendMessage', data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };

var reset = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        module.uiDispatcher('modules', {
            modulesEvent: 'updateModule',
            data: { moduleName: module.name, config: { info: module.info, api: module.api } },
        });
        return [2 /*return*/];
    });
}); };
var chatRequest = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var rasaURL, text, url, body, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rasaURL = module.api.rasaURL;
                text = data.text;
                url = "" + rasaURL;
                body = {
                    sender: 'Rasa',
                    message: text,
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                result = _a.sent();
                resultControl(module, result);
                return [2 /*return*/];
        }
    });
}); };
var chatInit = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var message;
    return __generator(this, function (_a) {
        message = {
            text: 'Hi',
        };
        chatRequest(module, message);
        return [2 /*return*/];
    });
}); };
var defaultModuleEvents = { chatRequest: chatRequest, reset: reset, chatInit: chatInit };

var RASA_URL = { "env": { "RASA_URL": "" } }.env.RASA_URL;
var RasaModule = /** @class */ (function () {
    function RasaModule(config) {
        var _this = this;
        this.moduleDispatcher = function (event, data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = event === 'chatRequest' && data;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 1:
                        _a = (_d.sent());
                        _d.label = 2;
                    case 2:
                        _b = event === 'reset';
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 3:
                        _b = (_d.sent());
                        _d.label = 4;
                    case 4:
                        _c = event === 'chatInit';
                        if (!_c) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 5:
                        _c = (_d.sent());
                        _d.label = 6;
                    case 6:
                        return [2 /*return*/];
                }
            });
        }); };
        this.uiDispatcher = function (event, data) {
            event === 'sendMessage' && _this.UIEvents[event](data);
            event === 'uiManagment' &&
                _this.UIEvents[event](data.uiManagmentEvent, data.data);
            event === 'notifications' &&
                _this.UIEvents[event](data.notificationEvent, data.data);
            event === 'modules' && _this.UIEvents[event](data.modulesEvent, data.data);
        };
        var info = config.info, api = config.api, moduleEvents = config.moduleEvents, uiEvents = config.uiEvents;
        this.name = 'rasaModule';
        this.info = __assign({}, info);
        this.api = __assign({ rasaURL: (api === null || api === void 0 ? void 0 : api.rasaURL) || RASA_URL || '' }, api);
        this.UIEvents = __assign(__assign({}, defaultUIEvents), uiEvents);
        this.moduleEvents = __assign(__assign({}, defaultModuleEvents), moduleEvents);
    }
    return RasaModule;
}());

var ckRasaInit = function (config) { return new RasaModule(config); };

export default ckRasaInit;
//# sourceMappingURL=index.es.js.map
