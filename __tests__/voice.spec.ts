import { VOICE } from "../src/services";
import { mobile, publicKey } from "../src/config";
import Sendchamp from "../src";
import { SendchampMode, VoiceType } from "../src/constants/types";

describe("VOICE", () => {
  let sendchamp: Sendchamp;
  let voice: VOICE;
  const textMockData = {
    message: "Your test otp is 1234",
    repeat: 2,
    type: VoiceType.outgoing,
    customer_mobile_number: [mobile],
  };

  const audioMockData = {
    path: "https://pathtoaudiofile",
    repeat: 2,
    type: VoiceType.outgoing,
    customer_mobile_number: [mobile],
  };

  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
    voice = sendchamp.VOICE;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    voice = undefined as unknown as VOICE;
  });
  describe("VOICE.sendTextToSpeech", () => {
    test("return successfully", async () => {
      const res = await voice.sendTextToSpeech(textMockData);
      expect(res.status).toBe("success");
      expect(res.code).toBe("200");
      expect(typeof res.data.message).toBe(textMockData.message);
    });

    test("should throw error", async () => {
      expect(async () => {
        await voice.sendTextToSpeech({
          ...textMockData,
          repeat: -1,
        });
      }).rejects.toEqual(new Error("repeat must be at least 1"));
    });
  });

  describe("VOICE.sendAudioToSpeech", () => {
    test("return successfully", async () => {
      const res = await voice.sendAudioToSpeech(audioMockData);
      expect(res.status).toBe("success");
      expect(res.code).toBe("200");
      expect(typeof res.data.business_uid).toBe("string");
    });

    test("should throw error", async () => {
      expect(async () => {
        await voice.sendAudioToSpeech(audioMockData);
      }).rejects.toEqual(new Error("repeat must be at least 1"));
    });
  });

  describe("VOICE.getVoiceStatus", () => {
    test("return successfully", async () => {
      const {
        data: { business_uid },
      } = await voice.sendTextToSpeech(textMockData);

      const res = await voice.getVoiceStatus(business_uid);
      expect(res.status).toBe("success");
      expect(res.code).toBe(200);
    });
  });
});
