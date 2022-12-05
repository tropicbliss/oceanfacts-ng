import { HandlerContext } from "$fresh/server.ts";
import { getAllFacts } from "../../data/handler.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.json(getAllFacts());
};
