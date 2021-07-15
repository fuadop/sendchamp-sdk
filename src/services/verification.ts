import { AxiosInstance, AxiosResponse } from 'axios';
import {
  SendVERIFICATIONOTPConfig,
  SendVERIFICATIONOTPResponse,
  VerifyVERIFICATIONOTPConfig,
  VerifyVERIFICATIONOTPResponse,
} from '../constants/interfaces';
import endpoints from '../constants/endpoints';

class VERIFICATION {
  static axiosInstance: AxiosInstance;

  sendOTP = async (config: SendVERIFICATIONOTPConfig): Promise<SendVERIFICATIONOTPResponse> => {
    const response: AxiosResponse<unknown> = await VERIFICATION.axiosInstance({
      url: endpoints.SEND_VERIFICATION_OTP,
      data: config,
    });

    return response.data as SendVERIFICATIONOTPResponse;
  };

  // eslint-disable-next-line max-len
  verifyOTP = async (config: VerifyVERIFICATIONOTPConfig): Promise<VerifyVERIFICATIONOTPResponse> => {
    const response: AxiosResponse<unknown> = await VERIFICATION.axiosInstance({
      url: endpoints.VERIFY_VERIFICATION_OTP,
      data: config,
    });

    return response.data as VerifyVERIFICATIONOTPResponse;
  };
}

export default VERIFICATION;
