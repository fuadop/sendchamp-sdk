import Sendchamp from "../src";
import { mobile, publicKey, sender_name } from "../src/config";
import { SMSRoute, SendchampMode, SenderUseCase } from "../src/constants/types";
import { SMS } from "../src/services";
import random from "randomatic";

describe("SMS", () => {
  let sendchamp: Sendchamp;
  let sms: SMS;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
    sms = sendchamp.SMS;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    sms = undefined as unknown as SMS;
  });

  test("sms.registerSender()", async () => {
    const name = random("aA", 6);
    const { code, status, data } = await sms.registerSender({
      sample: "Your otp is 1234",
      name,
      use_case: SenderUseCase.transactional,
    });

    expect(status).toBe("success");
    expect(code).toBe(200);
    expect(typeof data.uid).toBe("string");
    expect(data.name).toEqual(name);
  });

  test("sms.send()", async () => {
    const res = await sms.send({
      message: "test_message_node_sdk",
      sender_name,
      to: [mobile],
      route: SMSRoute.dnd,
    });

    const {
      code,
      status,
      data: { business_id },
    } = res;
    expect(status).toBe("success");
    expect(code).toBe(200);
    expect(typeof business_id).toBe("string");
  });

  test("send.sendBulk(), return successfully", async () => {
    const res = await sms.send({
      message: "test_message_node_sdk",
      sender_name,
      to: [mobile, "08123456789"],
      route: SMSRoute.dnd,
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(typeof res.data.business_id).toBe("string");
  });

  test("send.sendBulk(), to throw when non-existing name is used", async () => {
    expect(async () => {
      await sms.send({
        message: "test_message_node_sdk",
        sender_name: "Non-Existing",
        to: [mobile, "08123456789"],
        route: SMSRoute.dnd,
      });
    }).rejects.toEqual(new Error("invalid sender name: Non-Existing"));
  });
});
