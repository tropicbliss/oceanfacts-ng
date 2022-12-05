// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/about.tsx";
import * as $4 from "./routes/api/[id].ts";
import * as $5 from "./routes/api/index.ts";
import * as $6 from "./routes/api/random.ts";
import * as $7 from "./routes/apidocs.tsx";
import * as $8 from "./routes/fact/[id].tsx";
import * as $9 from "./routes/index.tsx";
import * as $10 from "./routes/page/[page].tsx";
import * as $11 from "./routes/search.tsx";
import * as $$0 from "./islands/FactInfo.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/about.tsx": $3,
    "./routes/api/[id].ts": $4,
    "./routes/api/index.ts": $5,
    "./routes/api/random.ts": $6,
    "./routes/apidocs.tsx": $7,
    "./routes/fact/[id].tsx": $8,
    "./routes/index.tsx": $9,
    "./routes/page/[page].tsx": $10,
    "./routes/search.tsx": $11,
  },
  islands: {
    "./islands/FactInfo.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
