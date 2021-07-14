import axios, { AxiosInstance } from 'axios';
import { SendchampConstructor } from './constants/interfaces';
import { baseUrl } from './constants/endpoints';
import { SMS } from './services';

class Sendchamp {
  private axiosInstance: AxiosInstance;

  public SMS: SMS = new SMS();

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
  }
}

export default Sendchamp;
