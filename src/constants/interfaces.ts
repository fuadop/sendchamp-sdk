import { SendchampMode, SendchampStatus } from './types';

export interface SendchampConstructor {
  publicKey: string,
  mode?: SendchampMode,
}

export interface SendchampEndpoints {
  SEND_SMS: string,
  SEND_VOICE: string,
  getReport: (sms_message_id: string) => string,
  REGISTER_SENDER: string,
  SEND_VERIFICATION_OTP: string,
  VERIFY_VERIFICATION_OTP: string,
  SEND_WHATSAPP: string,
}

export type SendchampBaseURLS = {
  [x: string]: string
};

export interface SendSMSConfig {
  route?: 'non_dnd' | 'dnd' | 'international',
  to: string | Array<string>,
  message: string,
  sender_name: string,
}

export interface SendVOICEConfig {
  message: string,
  customer_mobile_number: string[],
  repeat: number,
  type: 'outgoing'
}

export interface SendVERIFICATIONOTPConfig {
  channel: 'sms' | 'email',
  sender: string,
  token_type: 'numeric' | 'alphanumeric',
  token_length: number,
  expiration_time: number, // In minutes
  customer_email?: string,
  customer_mobile_number?: string,
  meta_data?: Record<string | number, unknown>,
}

export interface VerifyVERIFICATIONOTPConfig {
  verification_reference: string,
  verification_code: string,
}

export interface RegisterSenderConfig {
  name: string,
  use_case: 'transactional' | 'marketing' | 'transaction_marketing',
  sample: string,
}

export interface SendWHATSAPPTemplateConfig {
  sender: string,
  recipient: string,
  template_code: string,
  meta_data: { [x: string]: string }
}

export interface SendWHATSAPPTextConfig {
  recipient: string,
  sender: string,
  message: string,
}

export interface SendWHATSAPPVideoConfig {
  recipient: string,
  sender: string,
  link: string,
}

export interface SendWHATSAPPAudioConfig {
  recipient: string,
  sender: string,
  link: string,
  message: string
}

export interface SendWHATSAPPLocationConfig {
  recipient: string,
  sender: string,
  longitude: number,
  latitude: number,
  name: string,
  address: string,
}

export interface SendSMSResponse {
  message: string,
  code: string,
  status: SendchampStatus,
  data: SMSResponseData,
}

export interface SendVOICEResponse {
  message: string,
  code: string,
  data: VOICEResponseData,
  status: SendchampStatus,
}

export interface SendVERIFICATIONOTPResponse {
  message: string,
  code: string,
  status: SendchampStatus,
  data: SendVERIFICATIONOTPResponseData,
}

export interface VerifyVERIFICATIONOTPResponse {
  message: string,
  code: string,
  status: SendchampStatus,
  data: VerifyVERIFICATIONOTPResponseData,
}

export interface SendWHATSAPPResponse {
  message: string,
  code: string,
  status: SendchampStatus,
  data: SendWhatsappResponseData,
}

interface SendWhatsappResponseData {
  provider_reference: string,
  provider_message: string,
  provider_status: string
}

interface SMSResponseData {
  status: string,
  business: string,
  id: string,
  uid?: string,
  business_uid?: string,
  name?: string,
  phone_number?: string,
  amount: string,
  reference: string,
  message_references?: Array<string>,
  delivered_at?: string
  sent_at?: string
}

interface VOICEResponseData {
  phone_number: string,
  id: string,
  status: string,
  reference: string,
}

interface SendVERIFICATIONOTPResponseData {
  business_uid: string,
  reference: string,
  channel: {
    id: number,
    name: string,
    is_active: boolean
  },
  token?: string,
  status: string,
}

interface VerifyVERIFICATIONOTPResponseData {
  id: string,
  business_id: string,
  business_customer_id: string,
  channel_id: string,
  verification_code: string,
  delivery_status: string,
  verification_status: string,
  expires_at: string,
  verification_time: string,
  created_at: string,
  updated_at: string,
  verification_reference: string,
  meta_data: unknown,
}
