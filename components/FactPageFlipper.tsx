export default function FactPageFlipper(
  props: { id: number; totalFacts: number },
) {
  const btn =
    "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50";

  return (
    <nav
      class="flex items-center justify-between border-gray-200 bg-white py-3"
      aria-label="Pagination"
    >
      <div class="flex flex-1 justify-end">
        {props.id !== 0 && (
          <a
            href={`/fact/${props.id - 1}`}
            class={btn}
          >
            Previous
          </a>
        )}
        {props.id + 1 !== props.totalFacts && (
          <a
            href={`/fact/${props.id + 1}`}
            class={btn}
          >
            Next
          </a>
        )}
      </div>
    </nav>
  );
}
