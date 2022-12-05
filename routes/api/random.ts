import { HandlerContext } from "$fresh/server.ts";
import { getRandomFact } from "../../data/handler.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.json(getRandomFact());
};
