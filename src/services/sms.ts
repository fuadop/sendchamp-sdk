import { AxiosInstance, AxiosResponse } from 'axios';
import endpoints from '../constants/endpoints';
import {
  RegisterSenderConfig,
  SendSMSConfig,
  SendSMSResponse,
} from '../constants/interfaces';

class SMS {
  static axiosInstance: AxiosInstance;

  send = async (config: SendSMSConfig): Promise<SendSMSResponse> => {
    const response: AxiosResponse<unknown> = await SMS.axiosInstance({
      url: endpoints.SEND_SMS,
      method: 'POST',
      data: config,
    });

    return response.data as SendSMSResponse;
  };

  getStatus = async (sms_message_id: string): Promise<unknown> => {
    const response: AxiosResponse<unknown> = await SMS.axiosInstance({
      url: endpoints.getReport(sms_message_id),
      method: 'GET',
    });

    return response.data;
  };

  registerSender = async (config: RegisterSenderConfig): Promise<unknown> => {
    const response: AxiosResponse<unknown> = await SMS.axiosInstance({
      url: endpoints.REGISTER_SENDER,
      method: 'POST',
      data: config,
    });

    return response.data;
  };
}

export default SMS;
