import Sendchamp from "../src";
import { domainEmail, mail, publicKey } from "../src/config";
import { SendchampMode } from "../src/constants/types";
import { EMAIL } from "../src/services";

describe("EMAIL", () => {
  let sendchamp: Sendchamp;
  let email: EMAIL;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey,
      mode: SendchampMode.live,
    });
    email = sendchamp.EMAIL;
  });

  afterEach(() => {
    email = undefined as unknown as EMAIL;
    sendchamp = undefined as unknown as Sendchamp;
  });

  test("email.send()", async () => {
    const res = await email.send({
      subject: "EMAIL TEST",
      to: [{ email: mail, name: "" }],
      from: [{ email: domainEmail, name: "" }],
      message_body: {
        type: "text/html",
        value: "This is the contents of a test", // plain text or html
      },
    });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });
});
