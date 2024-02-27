import axios from "axios";
import endpoints from "../constants/endpoints";
import {
  SendWHATSAPPAudioConfig,
  SendWHATSAPPLocationConfig,
  SendWHATSAPPTemplateConfig,
  SendWHATSAPPTextConfig,
  SendWHATSAPPVideoConfig,
  SendWHATSAPPResponse,
} from "../constants/interfaces";

class WHATSAPP {
  static axiosInstance: axios.AxiosInstance;

  sendTemplate = async (
    config: SendWHATSAPPTemplateConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          custom_data: {
            body: config.meta_data,
          },
          type: "template",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };

  sendText = async (
    config: SendWHATSAPPTextConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          type: "text",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };

  sendVideo = async (
    config: SendWHATSAPPVideoConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          type: "video",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };

  sendSticker = async (
    config: SendWHATSAPPVideoConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          type: "sticker",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };

  sendAudio = async (
    config: SendWHATSAPPAudioConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          type: "audio",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };

  sendLocation = async (
    config: SendWHATSAPPLocationConfig,
  ): Promise<SendWHATSAPPResponse> => {
    try {
      const response: axios.AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: {
          ...config,
          type: "location",
        },
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as axios.AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  };
}

export default WHATSAPP;
