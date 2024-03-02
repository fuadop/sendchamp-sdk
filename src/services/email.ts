import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { SendEMAILConfig, SendEMAILResponse } from "../constants/interfaces";
import endpoints from "../constants/endpoints";

class EMAIL {
  static axiosInstance: AxiosInstance;

  async send(config: SendEMAILConfig): Promise<SendEMAILResponse> {
    try {
      const response: AxiosResponse = await EMAIL.axiosInstance({
        url: endpoints.SEND_EMAIL,
        method: "POST",
        data: config,
      });

      return response.data;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendEMAILResponse;
    }
  }
}

export default EMAIL;
