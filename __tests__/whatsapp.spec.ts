import Sendchamp from "../src";
import { mobile, publicKey } from "../src/config";
import { SendchampMode, WhatsAppType } from "../src/constants/types";
import { WHATSAPP } from "../src/services";

describe("WHATSAPP", () => {
  let sendchamp: Sendchamp;
  let whatsapp: WHATSAPP;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
    whatsapp = sendchamp.WHATSAPP;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    whatsapp = undefined as unknown as WHATSAPP;
  });

  test.only("whatsapp.verifyNumber()", async () => {
    const res = await whatsapp.verifyNumber({
      phone_number: mobile,
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data).toBeDefined();
  });

  test("whatsapp.sendTemplate()", async () => {
    const res = await whatsapp.sendTemplate({
      type: WhatsAppType.template,
      recipient: mobile,
      sender: mobile,
      template_code: "b0f729d5-e3c4-4db5-82c2-36e7fa23644a",
      custom_data: {
        "1": "test",
        "2": "1234",
        "3": "5",
      },
    });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined();
  });

  test("whatsapp.sendText()", async () => {
    const res = await whatsapp.sendText({
      type: WhatsAppType.text,
      recipient: mobile,
      sender: mobile,
      message: "test_whatsapp_message",
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.provider_reference).toBeDefined();
  });

  test("whatsapp.sendAudio()", async () => {
    const res = await whatsapp.sendAudio({
      type: WhatsAppType.audio,
      recipient: mobile,
      sender: mobile,
      message: "test_whatsapp_message",
      link: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3",
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.provider_reference).toBeDefined();
  });

  test("whatsapp.sendVideo()", async () => {
    const res = await whatsapp.sendVideo({
      type: WhatsAppType.video,
      recipient: mobile,
      sender: mobile,
      link: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.provider_reference).toBeDefined();
  });

  test("whatsapp.sendLocation()", async () => {
    const res = await whatsapp.sendLocation({
      type: WhatsAppType.location,
      recipient: mobile,
      sender: mobile,
      name: mobile,
      address: "Av. Angélica, 2530 - Bela Vista, São Paulo - SP, 01228-200",
      latitude: -23.55361,
      longitude: -46.662787,
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.provider_reference).toBeDefined();
  });

  test("whatsapp.sendSticker()", async () => {
    const res = await whatsapp.sendSticker({
      type: WhatsAppType.sticker,
      recipient: mobile,
      sender: mobile,
      link: "https://studio.posit.us/api/samples/sticker.webp",
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.provider_reference).toBeDefined();
  });
});
