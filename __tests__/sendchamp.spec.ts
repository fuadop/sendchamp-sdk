import Sendchamp from "../src";
import { mobile } from "../src/config";
import { InsightType, SendchampMode } from "../src/constants/types";

describe("SENDCHAMP", () => {
  let sendchamp: Sendchamp;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey: process.env.PUBLIC_KEY!,
      mode: SendchampMode.live,
    });
  });

  afterEach(() => {
    sendchamp = null as unknown as Sendchamp;
  });

  test("sendChamp.walletBalance()", async () => {
    const res = await sendchamp.getWalletBalance();

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });

  test("sendChamp.walletBalance()", async () => {
    const res = await sendchamp.getNumberInsight({
      phone_number: mobile,
      type: InsightType.core,
    });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });
});
