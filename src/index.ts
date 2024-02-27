import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import {
  NUMBERINSIGHTConfig,
  NUMBERINSIGHTResponse,
  SendchampConstructor,
  WALLETBALANCEResponse,
} from "./constants/interfaces";
import endpoints, { baseUrl } from "./constants/endpoints";
import { SMS, VOICE, VERIFICATION, WHATSAPP, CALL, EMAIL } from "./services";

class Sendchamp {
  private axiosInstance: AxiosInstance;

  public SMS: SMS = new SMS();
  public CALL: CALL = new CALL();
  public EMAIL: EMAIL = new EMAIL();
  public VOICE: VOICE = new VOICE();
  public WHATSAPP: WHATSAPP = new WHATSAPP();
  public VERIFICATION: VERIFICATION = new VERIFICATION();

  constructor(config: SendchampConstructor) {
    const { publicKey, mode } = config;
    this.axiosInstance = axios.create({
      baseURL: baseUrl[(mode || "live").toUpperCase()],
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${publicKey}`,
        "Content-Type": "application/json",
      },
    });

    // Initialize axios instance of subclasses
    SMS.axiosInstance = this.axiosInstance;
    CALL.axiosInstance = this.axiosInstance;
    EMAIL.axiosInstance = this.axiosInstance;
    VOICE.axiosInstance = this.axiosInstance;
    WHATSAPP.axiosInstance = this.axiosInstance;
    VERIFICATION.axiosInstance = this.axiosInstance;
  }

  async getWalletBalance(): Promise<WALLETBALANCEResponse> {
    try {
      const response: AxiosResponse<unknown> = await this.axiosInstance({
        url: endpoints.WALLET_BALANCE,
        method: "POST",
      });

      return response.data as WALLETBALANCEResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as WALLETBALANCEResponse;
    }
  }

  async getNumberInsight(
    config: NUMBERINSIGHTConfig,
  ): Promise<NUMBERINSIGHTResponse> {
    try {
      const response: AxiosResponse<unknown> = await this.axiosInstance({
        url: endpoints.NUMBER_INSIGHT,
        method: "POST",
        data: config,
      });

      return response.data as NUMBERINSIGHTResponse;
    } catch (error) {
      const { response } = error as AxiosError;
      return response!.data as NUMBERINSIGHTResponse;
    }
  }
}

export default Sendchamp;
