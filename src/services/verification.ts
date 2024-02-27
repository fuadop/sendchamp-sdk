import axios from 'axios';
import {
  SendVERIFICATIONOTPConfig,
  SendVERIFICATIONOTPResponse,
  VerifyVERIFICATIONOTPConfig,
  VerifyVERIFICATIONOTPResponse,
} from '../constants/interfaces';
import endpoints from '../constants/endpoints';

class VERIFICATION {
  static axiosInstance: axios.AxiosInstance;

  sendOTP = async (config: SendVERIFICATIONOTPConfig): Promise<SendVERIFICATIONOTPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await VERIFICATION.axiosInstance({
        url: endpoints.SEND_VERIFICATION_OTP,
        method: 'POST',
        data: config,
      });

      return response.data as SendVERIFICATIONOTPResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as SendVERIFICATIONOTPResponse;
    }
  };

  // eslint-disable-next-line max-len
  verifyOTP = async (config: VerifyVERIFICATIONOTPConfig): Promise<VerifyVERIFICATIONOTPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await VERIFICATION.axiosInstance({
        url: endpoints.VERIFY_VERIFICATION_OTP,
        method: 'POST',
        data: config,
      });

      return response.data as VerifyVERIFICATIONOTPResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as VerifyVERIFICATIONOTPResponse;
    }
  };
}

export default VERIFICATION;
