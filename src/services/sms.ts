import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import endpoints from "../constants/endpoints";
import {
  RegisterSenderConfig,
  RegisterSenderResponse,
  SendSMSConfig,
  SendSMSResponse,
} from "../constants/interfaces";

class SMS {
  static axiosInstance: AxiosInstance;

  async send(config: SendSMSConfig): Promise<SendSMSResponse> {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.SEND_SMS,
        method: "POST",
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendSMSResponse;
    }
  }

  async getSMSStatus(sms_id: string): Promise<SendSMSResponse> {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getSMSReport(sms_id),
        method: "GET",
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendSMSResponse;
    }
  }

  async getBulkSMSStatus(bulk_sms_id: string): Promise<SendSMSResponse> {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getBulkSMSReport(bulk_sms_id),
        method: "GET",
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendSMSResponse;
    }
  }

  async registerSender(
    config: RegisterSenderConfig,
  ): Promise<RegisterSenderResponse> {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.REGISTER_SENDER,
        method: "POST",
        data: config,
      });

      return response.data as RegisterSenderResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as RegisterSenderResponse;
    }
  }
}

export default SMS;
