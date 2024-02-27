import axios from 'axios';
import endpoints from '../constants/endpoints';
import {
  RegisterSenderConfig,
  SendSMSConfig,
  SendSMSResponse,
} from '../constants/interfaces';

class SMS {
  static axiosInstance: axios.AxiosInstance;

  send = async (config: SendSMSConfig): Promise<SendSMSResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.SEND_SMS,
        method: 'POST',
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as SendSMSResponse;
    }
  };

  getSMSStatus = async (sms_message_id: string): Promise<SendSMSResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getSMSReport(sms_message_id),
        method: 'GET',
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as SendSMSResponse;
    }
  };

  getBulkSMSStatus = async (sms_message_id: string): Promise<SendSMSResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.getBulkSMSReport(sms_message_id),
        method: 'GET',
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as SendSMSResponse;
    }
  };

  registerSender = async (config: RegisterSenderConfig): Promise<SendSMSResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await SMS.axiosInstance({
        url: endpoints.REGISTER_SENDER,
        method: 'POST',
        data: config,
      });

      return response.data as SendSMSResponse;
    } catch (error) {
      const { response } = (error as axios.AxiosError);
      return response!.data as SendSMSResponse;
    }
  };
}

export default SMS;
