import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

export default function Footer() {
  return (
    <footer class="bg-white">
      <div class="py-12 md:flex md:items-center md:justify-between">
        <div class="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com/tropicbliss/oceanfacts-ng"
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only">GitHub</span>
            <BrandGithub />
          </a>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-base text-gray-400">
            &copy; 2022 tropicbliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
