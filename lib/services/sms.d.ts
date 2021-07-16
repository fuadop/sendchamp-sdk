import { AxiosInstance } from 'axios';
import { RegisterSenderConfig, SendSMSConfig } from '../constants/interfaces';
declare class SMS {
    static axiosInstance: AxiosInstance;
    send: (config: SendSMSConfig) => Promise<unknown>;
    getStatus: (sms_message_id: string) => Promise<unknown>;
    registerSender: (config: RegisterSenderConfig) => Promise<unknown>;
}
export default SMS;
