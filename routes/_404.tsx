import Header from "../components/Header.tsx";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div class="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="mx-auto max-w-max">
          <main class="sm:flex">
            <p class="text-4xl font-bold tracking-tight sm:text-5xl">
              404
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page not found
                </h1>
                <p class="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="/"
                  class="inline-flex items-center rounded border(gray-500 2) bg-white px-3 py-2"
                >
                  Go back home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
