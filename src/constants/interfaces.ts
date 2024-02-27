import {
  Channel,
  InsightType,
  SMSRoute,
  SendchampMode,
  SendchampStatus,
  SenderUseCase,
  TokenType,
  VoiceType,
  WhatsAppType,
} from "./types";

export interface SendchampConstructor {
  publicKey: string;
  mode?: SendchampMode;
}

export interface SendchampEndpoints {
  SEND_SMS: string;
  SEND_EMAIL: string;
  SEND_VOICE: string;
  getSMSReport: (sms_message_id: string) => string;
  getBulkSMSReport: (bulk_sms_message_id: string) => string;
  getVoiceReport: (voice_id: string) => string;
  getCallReport: (call_id: string) => string;
  REGISTER_SENDER: string;
  SEND_VERIFICATION_OTP: string;
  VERIFY_VERIFICATION_OTP: string;
  SEND_WHATSAPP: string;
  VERIFY_WHATSAPP: string;
  WALLET_BALANCE: string;
  CREATE_VOICE_CALL: string;
  LIST_VOICE_CALLS: string;
  NUMBER_INSIGHT: string;
}

export type SendchampBaseURLS = {
  [x: string]: string;
};

export interface SendSMSConfig {
  route: SMSRoute;
  to: string | Array<string>;
  message: string;
  sender_name: string;
}

export interface SendVOICETextToSpeechConfig {
  message: string;
  customer_mobile_number: string[];
  repeat: number;
  type: VoiceType;
}

export interface SendVOICEAudioToSpeechConfig {
  path: string;
  customer_mobile_number: string[];
  repeat: number;
  type: VoiceType;
}

export interface VerifyWHATSAPPConfig {
  phone_number: string;
}

export interface SendVERIFICATIONOTPConfig {
  channel: Channel;
  sender: string;
  token_type: TokenType;
  token_length: number;
  expiration_time: number; // In minutes
  customer_email_address?: string;
  customer_mobile_number?: string;
  meta_data?: Record<string | number, unknown>;
  token?: string;
  in_app_token: boolean;
}

export interface SendEMAILConfig {
  subject: string;
  to: { email: string; name: string }[];
  from: { email: string; name: string }[];
  message_body: { type: string; value: string };
}

export interface VerifyVERIFICATIONOTPConfig {
  verification_reference: string;
  verification_code: string;
}

export interface RegisterSenderConfig {
  name: string;
  use_case: SenderUseCase;
  sample: string;
}

export interface SendWHATSAPPTemplateConfig {
  type: WhatsAppType.template;
  sender: string;
  recipient: string;
  template_code: string;
  custom_data: { [x: string]: string };
}

export interface SendWHATSAPPStickerConfig {
  type: WhatsAppType.sticker;
  recipient: string;
  sender: string;
  link: string;
}
export interface SendWHATSAPPTextConfig {
  type: WhatsAppType.text;
  recipient: string;
  sender: string;
  message: string;
}

export interface SendWHATSAPPVideoConfig {
  type: WhatsAppType.video;
  recipient: string;
  sender: string;
  link: string;
}

export interface SendWHATSAPPAudioConfig {
  type: WhatsAppType.audio;
  recipient: string;
  sender: string;
  link: string;
  message: string;
}

export interface SendWHATSAPPLocationConfig {
  type: WhatsAppType.location;
  recipient: string;
  sender: string;
  longitude: number;
  latitude: number;
  name: string;
  address: string;
}

export interface NUMBERINSIGHTConfig {
  phone_number: string;
  type: InsightType;
}

export interface RegisterSenderResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: RegisterSenderResponseData;
  errors: any;
}

export interface VerifyWHATSAPPResponse {
  code: number;
  data: VerifyWHATSAPPResponseData;
  errors: any;
  message: string;
  success: string;
}

export interface SendSMSResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: SMSResponseData;
  errors: any;
}

export interface SendVOICETextToSpeechResponse {
  message: string;
  code: number;
  data: VOICETextToSpeechResponseData;
  status: SendchampStatus;
  errors: any;
}

export interface SendVOICEAudioToSpeechResponse {
  message: string;
  code: number;
  data: VOICEAudioToSpeechResponseData;
  status: SendchampStatus;
  errors: any;
}

export interface SendCALLResponse {
  message: string;
  code: number;
  data: CALLResponseData;
  status: SendchampStatus;
}

export interface SendVERIFICATIONOTPResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: SendVERIFICATIONOTPResponseData;
  errors: any;
}

export interface VerifyVERIFICATIONOTPResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: VerifyVERIFICATIONOTPResponseData;
  errors: any;
}

export interface SendWHATSAPPResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: SendWhatsappResponseData;
}

export interface SendEMAILResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: SendEMAILResponseData;
}

export interface WALLETBALANCEResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: WALLETBALANCEData;
  errors: any;
}

export interface NUMBERINSIGHTResponse {
  message: string;
  code: number;
  status: SendchampStatus;
  data: NUMBERINSIGHTData;
  errors: any;
}

interface SendWhatsappResponseData {
  provider_reference: string;
  provider_message: string;
  provider_status: string;
}

interface SMSResponseData {
  id: string;
  phone_number: string;
  status: string;
  amount: string;
  reference: string;
}

interface RegisterSenderResponseData {
  id: number;
  uid: string;
  name: string;
  business_id: string;
  use_case: string;
  sample: string;
  status: string;
  approved_for_verifcation: boolean;
  business: {
    id: number;
    uuid: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

interface VOICETextToSpeechResponseData {
  total_contacts: number;
  message: string;
  business_uid: string;
}

interface VOICEAudioToSpeechResponseData {
  total_contacts: number;
  business_uid: string;
}

interface SendVERIFICATIONOTPResponseData {
  business_uid: string;
  reference: string;
  channel: {
    id: number;
    name: string;
    is_active: boolean;
  };
  token?: string;
  status: string;
}

interface VerifyVERIFICATIONOTPResponseData {
  channel: string;
  token: string;
  token_type: string;
  token_length: number;
  token_duration: string;
  status: string;
  phone: string;
  email: string;
  reference: string;
  created_at: string;
  updated_at: string;
}

interface SendEMAILResponseData {
  status: string;
  email: string;
}

interface WALLETBALANCEData {
  wallet_balance: string;
  business_name: string;
}

interface NUMBERINSIGHTData {
  number: {
    number: string;
    international_format_number: string;
    national_format_number: string;
    country_code: string;
    country_code_iso3: string;
    country_name: string;
    country_prefix: string;
  };
}

interface CALLResponseData {
  id: string;
  uid: string;
  phone_number: string;
}

interface VerifyWHATSAPPResponseData {
  is_valid: boolean;
  phone_number: string;
}
