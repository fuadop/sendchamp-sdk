import { SendchampConstructor } from './constants/interfaces';
import { SMS, VOICE, VERIFICATION, WHATSAPP } from './services';
declare class Sendchamp {
    private axiosInstance;
    SMS: SMS;
    VOICE: VOICE;
    VERIFICATION: VERIFICATION;
    WHATSAPP: WHATSAPP;
    constructor(config: SendchampConstructor);
}
export default Sendchamp;
