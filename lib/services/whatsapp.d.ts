import { AxiosInstance } from 'axios';
import { SendWHATSAPPAudioConfig, SendWHATSAPPDocumentConfig, SendWHATSAPPImageConfig, SendWHATSAPPLocationConfig, SendWHATSAPPTemplateConfig, SendWHATSAPPTextConfig, SendWHATSAPPVideoConfig } from '../constants/interfaces';
declare class WHATSAPP {
    static axiosInstance: AxiosInstance;
    sendTemplate: (config: SendWHATSAPPTemplateConfig) => Promise<unknown>;
    sendText: (config: SendWHATSAPPTextConfig) => Promise<unknown>;
    sendImage: (config: SendWHATSAPPImageConfig) => Promise<unknown>;
    sendVideo: (config: SendWHATSAPPVideoConfig) => Promise<unknown>;
    sendAudio: (config: SendWHATSAPPAudioConfig) => Promise<unknown>;
    sendDocument: (config: SendWHATSAPPDocumentConfig) => Promise<unknown>;
    sendLocation: (config: SendWHATSAPPLocationConfig) => Promise<unknown>;
}
export default WHATSAPP;
