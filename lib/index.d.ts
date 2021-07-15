import { SendchampConstructor } from './constants/interfaces';
import { SMS, VOICE } from './services';
declare class Sendchamp {
    private axiosInstance;
    SMS: SMS;
    VOICE: VOICE;
    constructor(config: SendchampConstructor);
}
export default Sendchamp;
