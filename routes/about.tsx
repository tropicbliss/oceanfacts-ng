import Fresh from "../components/Fresh.tsx";
import Header from "../components/Header.tsx";
import Hyperlink from "../components/Hyperlink.tsx";

export default function Home() {
  return (
    <>
      <Header active="/about" />
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Isn't there a previous version of Ocean Facts?
      </h2>
      <p class="mb-3 font-normal text-gray-700">
        Yes you're right! This version is <Fresh /> while the
        <Hyperlink
          text="previous version"
          href="https://github.com/tropicbliss/oceanfacts"
        />
        is made with Next.js.
      </p>
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        How did you do this?
      </h2>
      <p class="mb-3 font-normal text-gray-700">
        The chat messages from Atricord were extracted using
        <Hyperlink
          text="Discord Chat Exporter"
          href="https://github.com/Tyrrrz/DiscordChatExporter"
        />
        and the chat messages were filtered using a custom Python script I
        wrote.
      </p>
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Credits
      </h2>
      <p class="mb-3 font-normal text-gray-700">
        Disco Fever (Disco Fever#3558) for all the facts.
        <br />
        Please do not distribute any of the facts without Disco Fever's
        permission.
      </p>
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Feedback
      </h2>
      <p class="mb-3 font-normal text-gray-700">
        Please send your feedback
        <Hyperlink
          text="here"
          href="https://docs.google.com/forms/d/e/1FAIpQLSei2oDI0nunSnhuNRReM8W4vR2em_UCq1A2hdbs5Aav12KuMA/viewform"
        />
        and if you're giving feedback about a particular fact, remember to
        include the relevant fact ID in your feedback. The fact ID can be
        determined by looking at the fact page URL, where it assumes the
        following format: <code>/fact/[id]</code>.
      </p>
    </>
  );
}
