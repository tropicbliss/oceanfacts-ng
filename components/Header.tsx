import IconBeach from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/beach.tsx";
import { getRandomFactId } from "../data/handler.ts";

type Props = {
  active?: string;
};

export default function Header({ active }: Props) {
  const randomFactId = getRandomFactId();
  const menus = [
    { name: "Home", href: "/", hidden: false },
    { name: "About", href: "/about", hidden: false },
    { name: "API", href: "/apidocs", hidden: false },
    { name: "I'm Feeling Lucky", href: `/fact/${randomFactId}`, hidden: true },
  ];

  return (
    <div class="bg-white w-full py-6 flex flex-col md:flex-row gap-4 justify-between">
      <div class="flex items-center">
        <IconBeach />
        <div class="text-2xl  ml-1 font-bold">
          Ocean Facts
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "") +
                (menu.hidden ? " hidden sm:inline" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <form action="/search">
        <input
          type="text"
          name="q"
          class="px-3 py-2 bg-white rounded border(gray-500 2)"
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
