import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header active="/apidocs" />
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href="/api" target="_blank" rel="noreferrer">GET /api</a>
      </h2>
      <p className="mb-3 font-normal text-gray-700">
        Description: Returns all the ocean facts.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        Responses
      </h3>
      <p className="mb-3 font-normal text-gray-700">
        200: Successfully got ocean facts.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href="/api/0" target="_blank" rel="noreferrer">GET /api/[id]</a>
      </h2>
      <p className="mb-3 font-normal text-gray-700">
        Description: Returns an ocean fact that corresponds to an id.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        Responses
      </h3>
      <p className="font-normal text-gray-700">
        200: Successfully got an ocean fact.
      </p>
      <p className="mb-3 font-normal text-gray-700">
        404: Fact ID is not valid or does not correspond to a fact.
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href="/api/random" target="_blank" rel="noreferrer">
          GET /api/random
        </a>
      </h2>
      <p className="mb-3 font-normal text-gray-700">
        Description: Returns a random ocean fact.
      </p>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        Responses
      </h3>
      <p className="mb-3 font-normal text-gray-700">
        200: Successfully got an ocean fact.
      </p>
    </>
  );
}
