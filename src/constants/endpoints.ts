import {
  SendchampEndpoints,
  SendchampBaseURLS,
} from './interfaces';

const baseUrl: SendchampBaseURLS = Object.freeze({
  LIVE: 'https://api.sendchamp.com/api/v1/',
  TEST: 'https://sandbox-api.sendchamp.com/api/v1/',
  'LOCAL-SIMULATOR': 'http://localhost:2920/api/v1/',
});

const endpoints: SendchampEndpoints = Object.freeze({
  SEND_SMS: 'sms/send',
  SEND_VOICE: 'voice/send',
  getReport: (sms_message_id: string): string =>
    `sms/status/${sms_message_id}`,
  REGISTER_SENDER: 'sms/create-sender-id',
  SEND_VERIFICATION_OTP: 'verification/create',
  VERIFY_VERIFICATION_OTP: 'verification/confirm',
  SEND_WHATSAPP: 'whatsapp/message/send',
});

export default endpoints;
export { baseUrl };
