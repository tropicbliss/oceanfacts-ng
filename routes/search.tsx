import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Factoid, searchFacts } from "../data/handler.ts";
import IconFileSearch from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/file-search.tsx";

export const handler: Handlers<Factoid[]> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = searchFacts(query);
    return ctx.render(results);
  },
};

export default function Home({ data }: PageProps<Factoid[]>) {
  return (
    <>
      <Header />
      {data.length === 0
        ? (
          <div class="text-center">
            <div class="mx-auto h-12 w-12 text-gray-400">
              <IconFileSearch size={48} />
            </div>
            <h3 class="mt-2 text-normal font-medium text-gray-900">
              No facts found
            </h3>
            <div class="mt-6">
              <button type="button">
                <a
                  href="/"
                  class="inline-flex items-center rounded border(gray-500 2) bg-white px-3 py-2"
                >
                  Go back home
                </a>
              </button>
            </div>
          </div>
        )
        : (
          <>
            <div class="mt-6 flow-root">
              <ul role="list" class="-my-5 divide-y divide-gray-200">
                {data.map((factoid) => (
                  <li class="py-4">
                    <div class="flex items-center space-x-4">
                      <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-medium text-gray-900">
                          {factoid.fact.fact}
                        </p>
                      </div>
                      <div>
                        <a
                          href={`/fact/${factoid.id}`}
                          class="inline-flex items-center rounded border(gray-500 2) bg-white px-3 py-2"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <nav
              class="flex items-center justify-between border-gray-200 bg-white py-6"
              aria-label="Pagination"
            >
              <div class="hidden sm:block">
                <p class="text-sm text-gray-700">
                  Showing&nbsp;
                  <span class="font-medium">{data.length}</span>
                  &nbsp;results&nbsp;
                </p>
              </div>
            </nav>
          </>
        )}
    </>
  );
}
