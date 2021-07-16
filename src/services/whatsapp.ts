import { AxiosInstance, AxiosResponse } from 'axios';
import endpoints from '../constants/endpoints';
import {
  SendWHATSAPPAudioConfig,
  SendWHATSAPPDocumentConfig,
  SendWHATSAPPImageConfig,
  SendWHATSAPPLocationConfig,
  SendWHATSAPPTemplateConfig,
  SendWHATSAPPTextConfig,
  SendWHATSAPPVideoConfig,
} from '../constants/interfaces';

class WHATSAPP {
  static axiosInstance: AxiosInstance;

  sendTemplate = async (config: SendWHATSAPPTemplateConfig): Promise<unknown> => {
    try {
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP_TEMPLATE,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendText = async (config: SendWHATSAPPTextConfig): Promise<unknown> => {
    try {
      config.type = 'text';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendImage = async (config: SendWHATSAPPImageConfig): Promise<unknown> => {
    try {
      config.type = 'image';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendVideo = async (config: SendWHATSAPPVideoConfig): Promise<unknown> => {
    try {
      config.type = 'video';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendAudio = async (config: SendWHATSAPPAudioConfig): Promise<unknown> => {
    try {
      config.type = 'audio';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendDocument = async (config: SendWHATSAPPDocumentConfig): Promise<unknown> => {
    try {
      config.type = 'document';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };

  sendLocation = async (config: SendWHATSAPPLocationConfig): Promise<unknown> => {
    try {
      config.type = 'location';
      const response: AxiosResponse<unknown> = await WHATSAPP.axiosInstance({
        url: endpoints.SEND_WHATSAPP,
        method: 'POST',
        data: config,
      });

      return response.data;
    } catch ({ response }) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return response.data as unknown;
    }
  };
}

export default WHATSAPP;
