import { Handlers } from "$fresh/server.ts";
import { getFactFromId } from "../../data/handler.ts";

const notFound = new Response("Fact not found", { status: 404 });

export const handler: Handlers = {
  GET: (_req, ctx) => {
    // Check if id is between 0 and fact length - 1.
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
      return notFound;
    }
    const fact = getFactFromId(id);
    return fact ? Response.json(fact) : notFound;
  },
};
