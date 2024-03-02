import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import endpoints from "../constants/endpoints";
import {
  SendWHATSAPPAudioConfig,
  SendWHATSAPPLocationConfig,
  SendWHATSAPPTemplateConfig,
  SendWHATSAPPTextConfig,
  SendWHATSAPPVideoConfig,
  SendWHATSAPPResponse,
  VerifyWHATSAPPConfig,
  VerifyWHATSAPPResponse,
  SendWHATSAPPStickerConfig,
} from "../constants/interfaces";

class WHATSAPP {
  static axiosInstance: AxiosInstance;

  async verifyNumber(
    config: VerifyWHATSAPPConfig,
  ): Promise<VerifyWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.VERIFY_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as VerifyWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as VerifyWHATSAPPResponse;
    }
  }

  async sendTemplate(
    config: SendWHATSAPPTemplateConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }

  async sendText(
    config: SendWHATSAPPTextConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }

  async sendVideo(
    config: SendWHATSAPPVideoConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }

  async sendSticker(
    config: SendWHATSAPPStickerConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }

  async sendAudio(
    config: SendWHATSAPPAudioConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }

  async sendLocation(
    config: SendWHATSAPPLocationConfig,
  ): Promise<SendWHATSAPPResponse> {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: "POST",
        data: config,
      });

      return response.data as SendWHATSAPPResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendWHATSAPPResponse;
    }
  }
}

export default WHATSAPP;
