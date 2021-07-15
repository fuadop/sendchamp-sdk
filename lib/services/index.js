"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VOICE = exports.VERIFICATION = exports.WHATSAPP = exports.EMAIL = exports.SMS = void 0;
var sms_1 = __importDefault(require("./sms"));
exports.SMS = sms_1.default;
var email_1 = __importDefault(require("./email"));
exports.EMAIL = email_1.default;
var whatsapp_1 = __importDefault(require("./whatsapp"));
exports.WHATSAPP = whatsapp_1.default;
var verification_1 = __importDefault(require("./verification"));
exports.VERIFICATION = verification_1.default;
var voice_1 = __importDefault(require("./voice"));
exports.VOICE = voice_1.default;
