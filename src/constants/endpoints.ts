import {
  SendchampEndpoints,
  SendchampBaseURLS,
} from './interfaces';

const baseUrl: SendchampBaseURLS = Object.freeze({
  LIVE: 'https://api.sendchamp.com/api/v1/',
  TEST: 'https://sandbox-api.sendchamp.com/api/v1/',
});

const endpoints: SendchampEndpoints = Object.freeze({
  SEND_SMS: 'sms/send',
  SEND_VOICE: 'voice/send',
  getReport: (sms_message_id: string): string =>
    `sms/${sms_message_id}/report`,
  REGISTER_SENDER: 'sms/sender/create',
  SEND_VERIFICATION_OTP: 'verification/create',
  VERIFY_VERIFICATION_OTP: 'verification/confirm',
});

export default endpoints;
export { baseUrl };
