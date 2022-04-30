import { VOICE } from "../src/services";
import { sendchamp } from "../src/test-setup";

let voice: VOICE;
beforeEach(() => {
  voice = sendchamp.VOICE;
});

afterEach(() => {
  // @ts-ignore
  voice = null;
});

describe("VOICE", () => {
  test("voice.send()", async () => {
    const res = await voice.send({
      message: "Your test otp is 1234",
      repeat: 2,
      type: "outgoing",
      customer_mobile_number: ["2348153207998"]
    });
    expect(res.status).toBe("success");
    expect(res.code).toBe("200");
    expect(typeof res.data.id).toBe("string");
  });

  test("voice.send() should throw error", async () => {
    expect(async () => {
      await voice.send({
        message: "Your test otp is 1234",
        repeat: -1,
        type: "outgoing",
        customer_mobile_number: ["2348153207998"]
      });
    }).rejects.toEqual(new Error("repeat must be at least 1"));
  });
});
