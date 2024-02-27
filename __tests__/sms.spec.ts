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
      publicKey: publicKey,
      mode: SendchampMode.live,
    });
    sms = sendchamp.SMS;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    sms = undefined as unknown as SMS;
  });

  test("sms.send()", async () => {
    const {
      status,
      code,
      data: { id },
    } = await sms.send({
      message: "test_message_node_sdk",
      sender_name: sender_name,
      to: [mobile],
      route: SMSRoute.dnd,
    });

    expect(status).toBe("success");
    expect(code).toBe(200);
    expect(typeof id).toBe("string");
  });

  test("sms.getStatus()", async () => {
    const _res = await sms.send({
      message: "test_message_node_sdk",
      sender_name: "SDigital",
      to: [mobile],
      route: SMSRoute.dnd,
    });
    const message_id = _res.data.id;

    const res = await sms.getSMSStatus(message_id);
    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(res.data.id).toMatch(message_id);
  });

  test("sms.sendBulk()", async () => {
    const res = await sms.send({
      message: "test_message_node_sdk",
      sender_name,
      to: [mobile, "08123456789"],
      route: SMSRoute.dnd,
    });

    expect(res.status).toBe("success");
    expect(res.code).toBe(200);
    expect(typeof res.data.id).toBe("string");
  });

  test("sms.getBulkStatus()", async () => {
    const _res = await sms.send({
      message: "test_message_node_sdk",
      sender_name: "SDigital",
      to: [mobile],
      route: SMSRoute.dnd,
    });
    const bulk_message_id = _res.data.id;

    const res = await sms.getBulkSMSStatus(bulk_message_id);
    expect(res.status).toBe("success");
    expect(res.code).toBe("200");
    expect(res.data.id).toMatch(bulk_message_id);
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
    expect(data.id).toEqual(name);
  });
});
