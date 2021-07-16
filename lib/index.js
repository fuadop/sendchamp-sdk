"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var endpoints_1 = require("./constants/endpoints");
var services_1 = require("./services");
var Sendchamp = /** @class */ (function () {
    function Sendchamp(config) {
        this.SMS = new services_1.SMS();
        this.VOICE = new services_1.VOICE();
        this.VERIFICATION = new services_1.VERIFICATION();
        this.WHATSAPP = new services_1.WHATSAPP();
        var publicKey = config.publicKey, mode = config.mode;
        this.axiosInstance = axios_1.default.create({
            baseURL: mode === 'test' ? endpoints_1.baseUrl.TEST : endpoints_1.baseUrl.LIVE,
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + publicKey,
                'Content-Type': 'application/json',
            },
        });
        // Initialize axios instance of subclasses
        services_1.SMS.axiosInstance = this.axiosInstance;
        services_1.VOICE.axiosInstance = this.axiosInstance;
        services_1.VERIFICATION.axiosInstance = this.axiosInstance;
        services_1.WHATSAPP.axiosInstance = this.axiosInstance;
    }
    return Sendchamp;
}());
module.exports = Sendchamp;
