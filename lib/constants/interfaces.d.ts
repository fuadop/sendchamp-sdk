import { SendchampMode, SendchampStatus } from './types';
export interface SendchampConstructor {
    publicKey: string;
    mode?: SendchampMode;
}
export interface SendchampEndpoints {
    SEND_SMS: string;
    SEND_VOICE: string;
    getReport: (sms_message_id: string) => string;
    REGISTER_SENDER: string;
    SEND_VERIFICATION_OTP: string;
    VERIFY_VERIFICATION_OTP: string;
    SEND_WHATSAPP: string;
    SEND_WHATSAPP_TEMPLATE: string;
}
export interface SendchampBaseURLS {
    LIVE: string;
    TEST: string;
}
export interface SendSMSConfig {
    route?: 'NON_DND_NG' | 'DND_NG' | 'PREMIUM_NG';
    to: string | Array<string>;
    message: string;
    sender_name: string;
}
export interface SendVOICEConfig {
    message: string;
    customer_mobile_number: string;
    sender_name: string;
}
export interface SendVERIFICATIONOTPConfig {
    channel: 'VOICE' | 'SMS' | 'WHATSAPP' | 'EMAIL';
    sender: string;
    token_type: 'NUMERIC' | 'ALPHANUMERIC';
    token_length: number;
    expiration_time: number;
    customer_email?: string;
    customer_mobile_number?: string;
    meta_data?: Record<string | number, unknown>;
}
export interface VerifyVERIFICATIONOTPConfig {
    verification_reference: string;
    verification_otp: string;
}
export interface RegisterSenderConfig {
    sender_name: string;
    use_case: 'Transactional' | 'Marketing' | 'Transactional & Marketing';
    sample: string;
}
export interface SendWHATSAPPTemplateConfig {
    sender: string;
    recipient: string;
    template_code: string;
    message: string;
}
export interface SendWHATSAPPTextConfig {
    recipient: string;
    sender: string;
    type?: 'text';
    message: string;
}
export interface SendWHATSAPPImageConfig {
    recipient: string;
    from: string;
    type?: 'image';
    link: string;
    caption: string;
}
export interface SendWHATSAPPVideoConfig {
    recipient: string;
    from: string;
    type?: 'video';
    link: string;
    caption: string;
}
export interface SendWHATSAPPAudioConfig {
    recipient: string;
    from: string;
    type?: 'audio';
    link: string;
}
export interface SendWHATSAPPDocumentConfig {
    recipient: string;
    from: string;
    type?: 'document';
    link: string;
    caption: string;
}
export interface SendWHATSAPPLocationConfig {
    recipient: string;
    from: string;
    type?: 'location';
    location: SendLocationBody;
}
interface SendLocationBody {
    longitude: number;
    latitude: number;
    name: string;
    address: string;
}
export interface SendSMSResponse {
    message: string;
    status: SendchampStatus;
    data: SMSResponseData;
}
export interface SendVOICEResponse {
    message: string;
    data: VOICEResponseData;
    status: SendchampStatus;
}
export interface SendVERIFICATIONOTPResponse {
    message: string;
    status: SendchampStatus;
    data: SendVERIFICATIONOTPResponseData;
}
export interface VerifyVERIFICATIONOTPResponse {
    message: string;
    status: SendchampStatus;
    data: VerifyVERIFICATIONOTPResponseData;
}
interface SMSResponseData {
    status: string;
    business: string;
    message_references: Array<string>;
}
interface VOICEResponseData {
    phone_number: string;
    conversation_id: string;
    transaction_id: string;
    status: string;
}
interface SendVERIFICATIONOTPResponseData {
    phone_number?: string;
    email?: string;
    conversation_id: string;
    transaction_id: string;
    status: string;
    verification_reference: string;
}
interface VerifyVERIFICATIONOTPResponseData {
    id: string;
    business_id: string;
    business_customer_id: string;
    channel_id: string;
    verification_code: string;
    delivery_status: string;
    verification_status: string;
    expires_at: string;
    verification_time: string;
    created_at: string;
    updated_at: string;
    verification_reference: string;
    meta_data: unknown;
}
export {};
