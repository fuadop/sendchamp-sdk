import Sendchamp from "../src";
import { mobile, publicKey } from "../src/config";
import { InsightType, SendchampMode } from "../src/constants/types";

describe("SENDCHAMP", () => {
  let sendchamp: Sendchamp;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
  });

  afterEach(() => {
    sendchamp = null as unknown as Sendchamp;
  });

  test("sendChamp.walletBalance()", async () => {
    const res = await sendchamp.getWalletBalance();

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
  });

  test("sendChamp.getNumberInsight()", async () => {
    const res = await sendchamp.getNumberInsight({
      phone_number: mobile,
      type: InsightType.core,
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
  });
});
