import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ocean Facts</title>
        <meta name="keywords" content="ocean, fish, facts, api" />
        <meta name="description" content="Get the latest ocean facts" />
        <meta property="og:title" content="Ocean Facts" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Get the latest ocean facts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="px-8">
        <Component />
        <Footer />
        <div class="py-3"></div>
      </div>
    </>
  );
}
