import { SendchampConstructor } from './constants/interfaces';
import { SMS, VOICE, VERIFICATION } from './services';
declare class Sendchamp {
    private axiosInstance;
    SMS: SMS;
    VOICE: VOICE;
    VERIFICATION: VERIFICATION;
    constructor(config: SendchampConstructor);
}
export default Sendchamp;
