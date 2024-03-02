import { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import {
  SendVERIFICATIONOTPConfig,
  SendVERIFICATIONOTPResponse,
  VerifyVERIFICATIONOTPConfig,
  VerifyVERIFICATIONOTPResponse,
} from "../constants/interfaces";
import endpoints from "../constants/endpoints";

class VERIFICATION {
  static axiosInstance: AxiosInstance;

  async sendOTP(
    config: SendVERIFICATIONOTPConfig,
  ): Promise<SendVERIFICATIONOTPResponse> {
    try {
      const response: AxiosResponse<unknown> = await VERIFICATION.axiosInstance(
        {
          url: endpoints.SEND_VERIFICATION_OTP,
          method: "POST",
          data: config,
        },
      );

      return response.data as SendVERIFICATIONOTPResponse;
    } catch (error: any) {
      const { response } = error as AxiosError;
      return response?.data as SendVERIFICATIONOTPResponse;
    }
  }

  async verifyOTP(
    config: VerifyVERIFICATIONOTPConfig,
  ): Promise<VerifyVERIFICATIONOTPResponse> {
    try {
      const response: AxiosResponse<unknown> = await VERIFICATION.axiosInstance(
        {
          url: endpoints.VERIFY_VERIFICATION_OTP,
          method: "POST",
          data: config,
        },
      );

      return response.data as VerifyVERIFICATIONOTPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response?.data as VerifyVERIFICATIONOTPResponse;
    }
  }
}

export default VERIFICATION;
