import { Handlers } from "$fresh/server.ts";
import { getFactFromId } from "../../data/handler.ts";

const notFound = new Response("Fact not found", { status: 404 });

export const handler: Handlers = {
  GET: (_req, ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
      return notFound;
    }
    const fact = getFactFromId(id);
    return fact ? Response.json(fact) : notFound;
  },
};
