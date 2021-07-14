import { SendchampConstructor } from './constants/interfaces';
import { SMS } from './services';
declare class Sendchamp {
    private axiosInstance;
    SMS: SMS;
    constructor(config: SendchampConstructor);
}
export default Sendchamp;
