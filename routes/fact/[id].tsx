import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import { Fact, getAllFacts, getFactFromId } from "../../data/handler.ts";
import FactInfo from "../../islands/FactInfo.tsx";
import FactPageFlipper from "../../components/FactPageFlipper.tsx";

interface Data {
  fact: Fact;
  id: number;
  totalFacts: number;
}

export const handler: Handlers<Data> = {
  GET(_, ctx) {
    const id = parseInt(ctx.params.id);
    const fact = getFactFromId(id);
    if (!fact || isNaN(id)) {
      return ctx.renderNotFound();
    }
    return ctx.render({ fact, id, totalFacts: getAllFacts().length });
  },
};

export default function Page({ data }: PageProps<Data>) {
  return (
    <>
      <Header />
      <FactInfo data={data.fact} />
      <FactPageFlipper id={data.id} totalFacts={data.totalFacts} />
    </>
  );
}
