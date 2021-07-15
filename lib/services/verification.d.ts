import { AxiosInstance } from 'axios';
import { SendVERIFICATIONOTPConfig, SendVERIFICATIONOTPResponse, VerifyVERIFICATIONOTPConfig, VerifyVERIFICATIONOTPResponse } from '../constants/interfaces';
declare class VERIFICATION {
    static axiosInstance: AxiosInstance;
    sendOTP: (config: SendVERIFICATIONOTPConfig) => Promise<SendVERIFICATIONOTPResponse>;
    verifyOTP: (config: VerifyVERIFICATIONOTPConfig) => Promise<VerifyVERIFICATIONOTPResponse>;
}
export default VERIFICATION;
