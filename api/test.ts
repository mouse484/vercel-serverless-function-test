import { NowResponse } from "@vercel/node";

export default function (_, res: NowResponse) {
  res.send("test api");
}
