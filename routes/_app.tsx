import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ocean Facts</title>
      </Head>
      <div class="px-8">
        <Component />
        <Footer />
      </div>
    </>
  );
}
