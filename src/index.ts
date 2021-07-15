import axios, { AxiosInstance } from 'axios';
import { SendchampConstructor } from './constants/interfaces';
import { baseUrl } from './constants/endpoints';
import {
  SMS,
  VOICE,
  VERIFICATION,
} from './services';

class Sendchamp {
  private axiosInstance: AxiosInstance;

  public SMS: SMS = new SMS();

  public VOICE: VOICE = new VOICE();

  public VERIFICATION: VERIFICATION = new VERIFICATION();

  constructor(config: SendchampConstructor) {
    const { publicKey, mode } = config;
    this.axiosInstance = axios.create({
      baseURL: mode === 'test' ? baseUrl.TEST : baseUrl.LIVE,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${publicKey}`,
        'Content-Type': 'application/json',
      },
    });

    // Initialize axios instance of subclasses
    SMS.axiosInstance = this.axiosInstance;
    VOICE.axiosInstance = this.axiosInstance;
    VERIFICATION.axiosInstance = this.axiosInstance;
  }
}

export default Sendchamp;
