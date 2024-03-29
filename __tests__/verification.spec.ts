import Sendchamp from "../src";
import { mobile, publicKey, sender_name, mail } from "../src/config";
import { Channel, SendchampMode, TokenType } from "../src/constants/types";
import { VERIFICATION } from "../src/services";

describe("VERIFICATION", () => {
  const mockVerificationData = {
    channel: Channel.sms,
    expiration_time: 5,
    sender: sender_name,
    token_length: 4,
    token_type: TokenType.alphanumeric,
    customer_mobile_number: mobile,
    customer_email_address: mail,
    meta_data: {
      name: "Fuad",
      class: "__test_class__",
      description: "demo",
    },
    in_app_token: false,
  };
  let sendchamp: Sendchamp;
  let verification: VERIFICATION;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
    verification = sendchamp.VERIFICATION;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    verification = undefined as unknown as VERIFICATION;
  });

  test("verification.sendOTP()", async () => {
    const res = await verification.sendOTP({
      ...mockVerificationData,
      channel: Channel.voice,
    });
    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.business_uid).toBeDefined();
    expect(typeof res.data.reference).toEqual("string");
  });

  test.only("verification.sendOTP()", async () => {
    const res = await verification.sendOTP({
      ...mockVerificationData,
      channel: Channel.whatsapp,
    });
    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.business_uid).toBeDefined();
    expect(typeof res.data.reference).toEqual("string");
  });

  test("verification.sendOTP()", async () => {
    const res = await verification.sendOTP({
      ...mockVerificationData,
      channel: Channel.email,
    });
    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.business_uid).toBeDefined();
    expect(typeof res.data.reference).toEqual("string");
  });

  test("verification.sendOTP()", async () => {
    const res = await verification.sendOTP(mockVerificationData);
    console.log({ res });
    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.business_uid).toBeDefined();
    expect(typeof res.data.reference).toEqual("string");
  });

  test("verification.verifyOTP()", async () => {
    const {
      status,
      code,
      data: { reference, token },
    } = await verification.sendOTP(mockVerificationData);

    expect(status).toBe("success");
    expect(code).toBe(200);
    expect(typeof reference).toEqual("string");
    const {
      status: Status,
      data: { status: verifyStatus },
    } = await verification.verifyOTP({
      verification_code: token!,
      verification_reference: reference,
    });
    expect(Status).toBe("success");
    expect(verifyStatus).toBe("verified");
  });
});
