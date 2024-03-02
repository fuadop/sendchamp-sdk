import { SendchampEndpoints, SendchampBaseURLS } from "./interfaces";

const baseUrl: SendchampBaseURLS = Object.freeze({
  LIVE: "https://api.sendchamp.com/api/v1/",
  TEST: "https://sandbox-api.sendchamp.com/api/v1/",
  "LOCAL-SIMULATOR": "http://localhost:2920/api/v1/",
});

const endpoints: SendchampEndpoints = Object.freeze({
  NUMBER_INSIGHT: "number-insights/check",
  WALLET_BALANCE: "wallet/wallet_balance",
  SEND_SMS: "sms/send",
  REGISTER_SENDER: "sms/create-sender-id",
  SEND_VOICE: "voice/send",
  SEND_VERIFICATION_OTP: "verification/create",
  VERIFY_VERIFICATION_OTP: "verification/confirm",

  // NOTE: Tests not yet confirmed
  SEND_WHATSAPP: "whatsapp/message/send",
  VERIFY_WHATSAPP: "/whatsapp/validate",
  getCallReport: (call_id: string) => `number/call/${call_id}`,
  CREATE_VOICE_CALL: "number/call/create",
  LIST_VOICE_CALLS: "number/call/list",
  SEND_EMAIL: "email/send",
});

export default endpoints;
export { baseUrl };
