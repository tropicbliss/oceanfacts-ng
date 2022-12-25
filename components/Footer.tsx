import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex justify-center sm:justify-end">
        <a
          href="https://github.com/tropicbliss/oceanfacts-ng"
          className="text-gray-400 hover:text-gray-500"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">GitHub</span>
          <BrandGithub />
        </a>
      </div>
    </footer>
  );
}
