import { AxiosInstance } from 'axios';
import { SendVERIFICATIONOTPConfig, VerifyVERIFICATIONOTPConfig } from '../constants/interfaces';
declare class VERIFICATION {
    static axiosInstance: AxiosInstance;
    sendOTP: (config: SendVERIFICATIONOTPConfig) => Promise<unknown>;
    verifyOTP: (config: VerifyVERIFICATIONOTPConfig) => Promise<unknown>;
}
export default VERIFICATION;
