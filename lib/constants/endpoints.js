"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = void 0;
var baseUrl = Object.freeze({
    LIVE: 'https://api.sendchamp.com/api/v1/',
    TEST: 'https://sandbox-api.sendchamp.com/api/v1/',
});
exports.baseUrl = baseUrl;
var endpoints = Object.freeze({
    SEND_SMS: 'sms/send',
    SEND_VOICE: 'voice/send',
    getReport: function (sms_message_id) {
        return "sms/" + sms_message_id + "/report";
    },
    REGISTER_SENDER: 'sms/sender/create',
    SEND_VERIFICATION_OTP: 'verification/create',
    VERIFY_VERIFICATION_OTP: 'verification/confirm',
    SEND_WHATSAPP: 'whatsapp/message/send',
    SEND_WHATSAPP_TEMPLATE: 'whatsapp/template/send',
});
exports.default = endpoints;
