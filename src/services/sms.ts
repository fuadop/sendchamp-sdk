import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import endpoints from '../constants/endpoints';
import {
  RegisterSenderConfig,
  SendSMSConfig,
  SendSMSResponse,
} from '../constants/interfaces';

class SMS {
  static axiosInstance: AxiosInstance;

  send = async (config: SendSMSConfig): Promise<SendSMSResponse> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.SEND_SMS,
        method: 'POST',
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as AxiosError);
      return response!.data as SendSMSResponse;
    }
  };

  getStatus = async (sms_message_id: string): Promise<SendSMSResponse> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getReport(sms_message_id),
        method: 'GET',
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as AxiosError);
      return response!.data as SendSMSResponse;
    }
  };

  registerSender = async (config: RegisterSenderConfig): Promise<SendSMSResponse> => {
    try {
      const response: AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.REGISTER_SENDER,
        method: 'POST',
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as AxiosError);
      return response!.data as SendSMSResponse;
    }
  };
}

export default SMS;
