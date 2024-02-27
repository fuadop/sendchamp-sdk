import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import endpoints from "../constants/endpoints";
import {
  SendVOICEAudioToSpeechConfig,
  SendVOICEAudioToSpeechResponse,
  SendVOICETextToSpeechConfig,
  SendVOICETextToSpeechResponse,
} from "../constants/interfaces";

class VOICE {
  static axiosInstance: AxiosInstance;

  async sendTextToSpeech(
    config: SendVOICETextToSpeechConfig,
  ): Promise<SendVOICETextToSpeechResponse> {
    if (config.repeat <= 0) {
      throw new Error("repeat must be at least 1");
    }

    try {
      const response: AxiosResponse<unknown> = await VOICE.axiosInstance({
        url: endpoints.SEND_VOICE,
        method: "POST",
        data: config,
      });

      return response.data as SendVOICETextToSpeechResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendVOICETextToSpeechResponse;
    }
  }

  async sendAudioToSpeech(
    config: SendVOICEAudioToSpeechConfig,
  ): Promise<SendVOICEAudioToSpeechResponse> {
    if (config.repeat <= 0) {
      throw new Error("repeat must be at least 1");
    }

    try {
      const response: AxiosResponse<unknown> = await VOICE.axiosInstance({
        url: endpoints.SEND_VOICE,
        method: "POST",
        data: config,
      });

      return response.data as SendVOICEAudioToSpeechResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as SendVOICEAudioToSpeechResponse;
    }
  }
}

export default VOICE;
