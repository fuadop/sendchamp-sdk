import { AxiosInstance, AxiosResponse } from 'axios';
import endpoints from '../constants/endpoints';
import { SendVOICEConfig, SendVOICEResponse } from '../constants/interfaces';

class VOICE {
  static axiosInstance: AxiosInstance;

  send = async (config: SendVOICEConfig): Promise<unknown> => {
    const response: AxiosResponse<unknown> = await VOICE.axiosInstance({
      url: endpoints.SEND_VOICE,
      data: config,
    });

    return response.data as SendVOICEResponse;
  };
}

export default VOICE;
