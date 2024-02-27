import axios from "axios";
import {
  SendEMAILConfig,
  SendVERIFICATIONOTPResponse,
} from "../constants/interfaces";
import endpoints from "../constants/endpoints";

class EMAIL {
  static axiosInstance: axios.AxiosInstance;

  send = async (
    config: SendEMAILConfig,
  ): Promise<SendVERIFICATIONOTPResponse> => {
    try {
      const response: axios.AxiosResponse = await EMAIL.axiosInstance({
        url: endpoints.SEND_EMAIL,
        method: "POST",
        data: config,
      });

      return response.data as SendVERIFICATIONOTPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendVERIFICATIONOTPResponse;
    }
  };
}

export default EMAIL;
