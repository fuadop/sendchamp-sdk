import Sendchamp from "../src";
import { SendchampMode } from "../src/constants/types";
import { CALL } from "../src/services";

describe("CALL", () => {
  let sendchamp: Sendchamp;
  let call: CALL;
  beforeEach(() => {
    sendchamp = new Sendchamp({
      publicKey: process.env.PUBLIC_KEY!,
      mode: SendchampMode.live,
    });
    call = sendchamp.CALL;
  });

  afterEach(() => {
    sendchamp = undefined as unknown as Sendchamp;
    call = undefined as unknown as CALL;
  });

  test("call.create()", async () => {
    const res = await call.create();
    console.log({ res });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });

  test("call.listVoiceCalls()", async () => {
    const res = await call.listVoiceCalls();
    console.log({ res });

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });

  test("call.retrieveSingleCall()", async () => {
    const {
      data: { id },
    } = await call.create();
    const res = await call.retrieveSingleCall(id);

    expect(res.status).toBe("success");
    expect(res.code).not.toBe(200);
  });
});
