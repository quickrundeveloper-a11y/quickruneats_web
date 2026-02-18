import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-50/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-zinc-900">
          QuickRunEats
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-700 md:flex">
          <Link href="#" className="transition hover:text-zinc-900">
            Dumplings
          </Link>
          <Link href="#" className="transition hover:text-zinc-900">
            Recipes
          </Link>
          <Link href="#" className="transition hover:text-zinc-900">
            Food Menu
          </Link>
          <Link href="#" className="transition hover:text-zinc-900">
            Order Now
          </Link>
        </nav>
        <div className="flex items-center">
          <Link
            href="#"
            className="rounded-full border-2 border-orange-500 px-5 py-2 text-sm font-semibold text-zinc-900 shadow-[0_4px_12px_rgba(255,112,0,0.25)] hover:bg-orange-50"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

