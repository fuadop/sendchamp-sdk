import { VERIFICATION } from "../src/services";
import { sendchamp, sender } from "../src/test-setup";

let verification: VERIFICATION;
beforeEach(() => {
  verification = sendchamp.VERIFICATION;
});

afterEach(() => {
  // @ts-ignore
  verification = null;
});

describe("VERIFICATION", () => {
  test("verification.sendOTP()", async () => {
    const res = await verification.sendOTP({
      channel: "sms",
      expiration_time: 5,
      sender,
      token_length: 4,
      token_type: "alphanumeric",
      customer_mobile_number: "2348153207998",
      meta_data: {
        name: "Fuad",
        class: "__test_class__"
      }
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe("200");
    expect(res.data.business_uid).toBeDefined();
    expect(typeof res.data.reference).toEqual("string");
  });

  test("verification.verifyOTP()", async () => {
    const res = await verification.verifyOTP({
      verification_code: "abcd",
      verification_reference: "5d6da94c-d377-4579-a6e8-0a0a37963b37"
    });
    expect(res.status).toBeDefined();
  });
});
