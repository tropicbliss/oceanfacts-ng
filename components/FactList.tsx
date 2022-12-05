import { Fact } from "../data/handler.ts";

export interface Data {
  facts: Fact[];
  startIdx: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  currPage: number;
  totalFacts: number;
}

export default function FactList(props: { data: Data }) {
  const data = props.data;

  return (
    <>
      <div class="mt-6 flow-root">
        <ul role="list" class="-my-5 divide-y divide-gray-200">
          {data.facts.map((fact, idx) => (
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium text-gray-900">
                    {fact.fact}
                  </p>
                </div>
                <div>
                  <a
                    href={`/fact/${idx + data.startIdx}`}
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
            <span class="font-medium">{data.startIdx + 1}</span>
            &nbsp;to&nbsp;
            <span class="font-medium">
              {data.startIdx + data.facts.length}
            </span>
            &nbsp;of&nbsp;
            <span class="font-medium">{data.totalFacts}</span>
            &nbsp;results
          </p>
        </div>
        <div class="flex flex-1 justify-between sm:justify-end mt">
          {!data.isFirstPage && (
            <a
              href={`/page/${data.currPage - 1}`}
              class="relative inline-flex items-center rounded border(gray-500 2) bg-white px-3 py-2"
            >
              Previous
            </a>
          )}
          {!data.isLastPage && (
            <a
              href={`/page/${data.currPage + 1}`}
              class="relative ml-3 inline-flex items-center rounded border(gray-500 2) bg-white px-3 py-2"
            >
              Next
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
