import { getAllFacts, getFactsFromPageNum } from "../data/handler.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import FactList, { Data } from "../components/FactList.tsx";

export const handler: Handlers<Data> = {
  GET(_, ctx) {
    const page = 1;
    const facts = getFactsFromPageNum(page);
    if (facts.length === 0) {
      return ctx.renderNotFound();
    }
    const startIdx = 0;
    const lastPage = false;
    const totalFacts = getAllFacts().length;
    const firstPage = true;
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

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      <Header active="/" />
      <FactList data={data} />
    </>
  );
}
