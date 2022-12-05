import IconBeach from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/beach.tsx";

type Props = {
  active?: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "API", href: "/apidocs" },
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
                (menu.href === active ? " font-bold border-b-2" : "")}
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
