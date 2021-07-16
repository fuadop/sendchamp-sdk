import { AxiosInstance } from 'axios';
import { SendVOICEConfig } from '../constants/interfaces';
declare class VOICE {
    static axiosInstance: AxiosInstance;
    send: (config: SendVOICEConfig) => Promise<unknown>;
}
export default VOICE;
