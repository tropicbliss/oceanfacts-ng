import { Fact } from "../data/handler.ts";
import { useState } from "preact/hooks";
import { tw } from "twind";

export default function FactInfo(props: { data: Fact }) {
  const data = props.data;
  const [currPic, setCurrPic] = useState(data.picture.at(0));

  return (
    <div class="bg-white">
      {currPic
        ? (
          <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div class="flex flex-col-reverse">
                <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <div
                    class="grid grid-cols-4 gap-6"
                    aria-orientation="horizontal"
                    role="tablist"
                  >
                    {data.picture.map((image) => (
                      <button
                        id="tabs-1-tab-1"
                        class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        aria-controls="tabs-1-panel-1"
                        role="tab"
                        type="button"
                        onClick={() => setCurrPic(image)}
                        key={image}
                      >
                        <span class="sr-only">Picture of ocean stuff</span>
                        <span class="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image}
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          class={tw`${
                            image === currPic
                              ? "ring-indigo-500"
                              : "ring-transparent"
                          } pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2`}
                          aria-hidden="true"
                        >
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div class="aspect-w-1 aspect-h-1 w-full">
                  <div
                    id="tabs-1-panel-1"
                    aria-labelledby="tabs-1-tab-1"
                    role="tabpanel"
                  >
                    <img
                      src={currPic}
                      alt="Picture of ocean stuff."
                      class="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6 text-normal text-gray-700">
                  <p>
                    {data.fact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <>
            <h3 class="sr-only">Description</h3>

            <div class="text-normal text-gray-700">
              <p>
                {data.fact}
              </p>
            </div>
          </>
        )}
    </div>
  );
}
