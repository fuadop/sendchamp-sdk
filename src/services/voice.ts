import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import endpoints from '../constants/endpoints';
import { SendVOICEConfig, SendVOICEResponse } from '../constants/interfaces';

class VOICE {
  static axiosInstance: AxiosInstance;

  send = async (config: SendVOICEConfig): Promise<unknown> => {
    try {
      const response: AxiosResponse<unknown> = await VOICE.axiosInstance({
        url: endpoints.SEND_VOICE,
        method: 'POST',
        data: config,
      });

      return response.data as SendVOICEResponse;
    } catch (error) {
      const { response } = (error as AxiosError);
      return response!.data as unknown;
    }
  };
}

export default VOICE;
