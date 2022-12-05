import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(_: Request, ctx: MiddlewareHandlerContext) {
  const resp = await ctx.next();
  resp.headers.set("X-Clacks-Overhead", "GNU Terry Pratchett");
  return resp;
}
