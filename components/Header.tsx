import Link from "next/link";
import type { SVGProps } from "react";

function AppStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17 2.5c-1 0-2 .4-2.7 1.1-.7.7-1.2 1.8-1.1 2.8 1.1.1 2.3-.4 3-1.2.7-.7 1.1-1.7 1.1-2.7-.1 0-.2 0-.3 0zM12.5 7.6C10.9 7.6 9.5 8.5 8.7 8.5 7.9 8.5 6.7 7.6 5.4 7.6 3.5 7.6 2 8.9 2 11.3c0 2.2 1 4.7 2.3 6.2.8 1 1.7 2 2.9 2 1.1 0 1.4-.6 2.8-.6 1.4 0 1.6.6 2.8.6 1.2 0 2.1-1 2.9-2 .9-1 1.3-2 1.3-2.1-.1-.1-2.4-.9-2.4-3.4 0-2.1 1.8-3 1.9-3.1-1-.1-1.9-.6-2.5-.6-.9 0-1.7.5-2.3.5-.7 0-1.5-.5-2.5-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 3.5v17l9.5-8.5L4 3.5z" fill="currentColor" />
      <path
        d="M14.3 11.5L6 3.2 16.8 9c1 .6 1 .9 0 1.5l-2.5 1zM6 20.8l8.3-8.3 2.5 1c1 .6 1 .9 0 1.5L6 20.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-center md:justify-between px-6 lg:px-12">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-orange-500">
          QuickRunEats
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-700 md:flex">
          <Link href="/home#explore" className="transition hover:text-zinc-900">
            Dumplings
          </Link>
          <Link href="/home#testimonials" className="transition hover:text-zinc-900">
            Recipes
          </Link>
          <Link href="/home#explore" className="transition hover:text-zinc-900">
            Food Menu
          </Link>
          <Link href="/home#subscribe" className="transition hover:text-zinc-900">
            Order Now
          </Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-xl border border-white/60 bg-black px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
          >
            <AppStoreIcon className="h-5 w-5 text-white" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[9px] font-medium uppercase tracking-wide text-zinc-300">
                Download on the
              </span>
              <span className="text-xs font-semibold text-white">App Store</span>
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-xl border border-white/60 bg-black px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
          >
            <PlayStoreIcon className="h-5 w-5 text-white" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[9px] font-medium uppercase tracking-wide text-zinc-300">
                Get it on
              </span>
              <span className="text-xs font-semibold text-white">Google Play</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

