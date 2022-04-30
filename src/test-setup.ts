import "dotenv/config";
import Sendchamp from ".";

export let sendchamp: Sendchamp;
export let sender: string;
export let sender_name: string;

jest.setTimeout(30000);
beforeEach(() => {
  sendchamp = new Sendchamp({
    publicKey: process.env.PUBLIC_KEY!,
    mode: "live"
  });
  sender = process.env.SENDER_NAME!;
  sender_name = process.env.SENDER_NAME!;
});

afterEach(() => {
  // @ts-ignore
  sendchamp = null;
  // @ts-ignore
  sender = null;
  // @ts-ignore
  sender_name = null;
});