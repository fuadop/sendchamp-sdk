import { SendchampMode } from './types';
export interface SendchampConstructor {
    publicKey: string;
    mode: SendchampMode;
}
export interface SendchampEndpoints {
    SEND_SMS: string;
    SEND_VOICE: string;
    getReport: (sms_message_id: string) => string;
    REGISTER_SENDER: string;
}
export interface SendchampBaseURLS {
    LIVE: string;
    TEST: string;
}
export interface SendSMSConfig {
    route?: string;
    to: string | Array<string>;
    message: string;
    sender_name: string;
}
export interface RegisterSenderConfig {
    sender_name: string;
    use_case: 'Transactional' | 'Marketing' | 'Transactional & Marketing';
    sample: string;
}
export interface SendSMSResponse {
    message: string;
    status: string;
    data: SMSResponseData;
}
interface SMSResponseData {
    status: string;
    business: string;
    message_references: Array<string>;
}
export {};
