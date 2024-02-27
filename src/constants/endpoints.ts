import { SendchampEndpoints, SendchampBaseURLS } from "./interfaces";

const baseUrl: SendchampBaseURLS = Object.freeze({
  LIVE: "https://api.sendchamp.com/api/v1/",
  TEST: "https://sandbox-api.sendchamp.com/api/v1/",
  "LOCAL-SIMULATOR": "http://localhost:2920/api/v1/",
});

const endpoints: SendchampEndpoints = Object.freeze({
  // SMS
  SEND_SMS: "sms/send", // --> Checked
  REGISTER_SENDER: "sms/create-sender-id", // --> Checked
  getSMSReport: (sms_message_id: string): string =>
    `sms/status/${sms_message_id}`, // -- Checked
  getBulkSMSReport: (bulk_sms_message_id: string): string =>
    `sms/bulk-sms-status/${bulk_sms_message_id}`, // -- Checked

  // VOICE
  SEND_VOICE: "voice/send", // --> Checked
  getVoiceReport: (voice_id: string): string => `voice/status/${voice_id}`, // --> Checked

  // WHATSAPP
  SEND_WHATSAPP: "whatsapp/message/send",
  VERIFY_WHATSAPP: "/whatsapp/validate",

  // CALL
  getCallReport: (call_id: string) => `number/call/${call_id}`,
  CREATE_VOICE_CALL: "number/call/create",
  LIST_VOICE_CALLS: "number/call/list",

  // BASE
  NUMBER_INSIGHT: "number-insights/check", // --> Checked
  WALLET_BALANCE: "wallet/wallet_balance", // --> Checked

  // VERIFICATION
  SEND_VERIFICATION_OTP: "verification/create", // --> Pass
  VERIFY_VERIFICATION_OTP: "verification/confirm", // --> Pass

  // EMAIL
  SEND_EMAIL: "email/send", // --> Checked
});

export default endpoints;
export { baseUrl };
