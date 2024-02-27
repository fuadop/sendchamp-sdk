import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import endpoints from "../constants/endpoints";
import { SendCALLResponse } from "../constants/interfaces";

class CALL {
  static axiosInstance: AxiosInstance;

  async create(): Promise<SendCALLResponse> {
    try {
      const response: AxiosResponse<unknown> = await CALL.axiosInstance({
        url: endpoints.CREATE_VOICE_CALL,
        method: "POST",
      });

      return response.data as SendCALLResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendCALLResponse;
    }
  }

  async listVoiceCalls(): Promise<SendCALLResponse> {
    try {
      const response: AxiosResponse<unknown> = await CALL.axiosInstance({
        url: endpoints.LIST_VOICE_CALLS,
        method: "GET",
      });

      return response.data as SendCALLResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendCALLResponse;
    }
  }

  async retrieveSingleCall(call_id: string): Promise<SendCALLResponse> {
    try {
      const response: AxiosResponse<unknown> = await CALL.axiosInstance({
        url: endpoints.getCallReport(call_id),
        method: "GET",
      });

      return response.data as SendCALLResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendCALLResponse;
    }
  }
}

export default CALL;
