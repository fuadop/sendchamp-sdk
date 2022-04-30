import { SMS } from "../src/services";
import random from "randomatic";
import { sendchamp, sender_name } from "../src/test-setup";

let sms: SMS;
let message_id: string;
beforeEach(() => {
  sms = sendchamp.SMS;
});

afterEach(() => {
  // @ts-ignore
  sms = null;
});

describe("SMS", () => {
  test("sms.send()", async () => {
    const res = await sms.send({
      message: "test_message_node_sdk",
      sender_name,
      to: ["2348153207998"],
      route: "dnd"
    });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe("06")
    expect(typeof res.data.id).toBe("string");
    // to be used for the sms.getStatus test
    message_id = res.data.id;
  });

  test("sms.registerSender()", async () => {
    const name = random("aA", 6);
    const res = await sms.registerSender({
      sample: "Your otp is 1234",
      name,
      use_case: "transactional"
    });
     
    expect(res.status).toBe("success");
    expect(res.code).toBe("200");
    expect(typeof res.data.uid).toBe("string");
    expect(res.data.name).toEqual(name);
  });

  test("sms.getStatus()", async () => {
    if (!message_id) {
      const _res = await sms.send({
        message: "test_message_node_sdk",
        sender_name: "SDigital",
        to: ["2348153207998"],
        route: "dnd"
      });
      message_id = _res.data.id;
    }

    const res = await sms.getStatus(message_id);
    expect(res.status).toBe("success");
    expect(res.code).toBe("200");
    expect(res.data.id).toMatch(message_id)
  });
});