import { WHATSAPP } from "../src/services";
import { sendchamp } from "../src/test-setup";

let whatsapp: WHATSAPP;
beforeEach(() => {
  whatsapp = sendchamp.WHATSAPP;
});

afterEach(() => {
  // @ts-ignore
  whatsapp = null;
});

describe("WHATSAPP", () => {
  test("whatsapp.sendTemplate()", async () => {
    const res = await whatsapp.sendTemplate({
      recipient: "2348153207998",
      sender: "2348120678278",
      template_code: "b0f729d5-e3c4-4db5-82c2-36e7fa23644a",
      meta_data: {
        "1": "test",
        "2": "1234",
        "3": "5"
      }
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });

  test("whatsapp.sendText()", async () => {
    const res = await whatsapp.sendText({
      recipient: "2348153207998",
      sender: "2348120678278",
      message: "test_whatsapp_message"
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });

  test("whatsapp.sendAudio()", async () => {
    const res = await whatsapp.sendAudio({
      recipient: "2348153207998",
      sender: "2348120678278",
      message: "test_whatsapp_message",
      link: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3"
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });

  test("whatsapp.sendVideo()", async () => {
    const res = await whatsapp.sendVideo({
      recipient: "2348153207998",
      sender: "2348120678278",
      link: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });

  test("whatsapp.sendLocation()", async () => {
    const res = await whatsapp.sendLocation({
      recipient: "2348153207998",
      sender: "2348120678278",
      name: "Robbu Brazil",
      address: "Av. Angélica, 2530 - Bela Vista, São Paulo - SP, 01228-200",
      latitude: -23.553610,
      longitude: -46.662787
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });

  test("whatsapp.sendSticker()", async () => {
    const res = await whatsapp.sendSticker({
      recipient: "2348153207998",
      sender: "2348120678278",
      link: "https://studio.posit.us/api/samples/sticker.webp"
    });
    
    expect(res.status).toBe("success")
    expect(res.code).not.toBe("06");
    expect(res.data.provider_reference).toBeDefined()
  });
});