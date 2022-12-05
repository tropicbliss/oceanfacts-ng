import { Handlers, PageProps } from "$fresh/server.ts";
import FactList, { Data } from "../../components/FactList.tsx";
import Header from "../../components/Header.tsx";
import {
  getAllFacts,
  getFactsFromPageNum,
  getStartIdx,
  isLastPage,
} from "../../data/handler.ts";

export const handler: Handlers<Data> = {
  GET(_, ctx) {
    const page = parseInt(ctx.params.page);
    const facts = getFactsFromPageNum(page);
    if (facts.length === 0 || isNaN(page)) {
      return ctx.renderNotFound();
    }
    const startIdx = getStartIdx(page)!;
    const lastPage = isLastPage(page);
    const totalFacts = getAllFacts().length;
    const firstPage = page === 1;
    return ctx.render({
      facts,
      startIdx,
      isFirstPage: firstPage,
      isLastPage: lastPage,
      currPage: page,
      totalFacts,
    });
  },
};

export default function Page({ data }: PageProps<Data>) {
  return (
    <>
      <Header />
      <FactList data={data} />
    </>
  );
}
