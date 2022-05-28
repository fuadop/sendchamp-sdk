import axios, { AxiosInstance } from 'axios';
import { SendchampConstructor } from './constants/interfaces';
import { baseUrl } from './constants/endpoints';
import {
  SMS,
  VOICE,
  VERIFICATION,
  WHATSAPP,
} from './services';

class Sendchamp {
  private axiosInstance: AxiosInstance;

  public SMS: SMS = new SMS();

  public VOICE: VOICE = new VOICE();

  public VERIFICATION: VERIFICATION = new VERIFICATION();

  public WHATSAPP: WHATSAPP = new WHATSAPP();

  constructor(config: SendchampConstructor) {
    const { publicKey, mode } = config;
    this.axiosInstance = axios.create({
      baseURL: baseUrl[(mode || 'live').toUpperCase()],
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
    WHATSAPP.axiosInstance = this.axiosInstance;
  }
}

export = Sendchamp;
