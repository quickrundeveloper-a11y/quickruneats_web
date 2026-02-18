import Link from "next/link";
import Image from "next/image";

const getCooking = [
  { label: "Easy Asian Takeout", href: "#" },
  { label: "Recipe Gallery", href: "#" },
  { label: "Ingredients Guide", href: "#" },
  { label: "Weekly Meal Plans", href: "#" },
  { label: "Penang Tour", href: "#" },
  { label: "Conversion Tool", href: "#" },
];

const information = [
  { label: "About", href: "#" },
  { label: "Disclosure", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Giveaway Rules", href: "#" },
  { label: "Giveaway Winners", href: "#" },
  { label: "Contact", href: "#" },
];

const followUs = [
  { label: "RSS Feeds", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white pt-16 pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-extrabold tracking-tight text-zinc-900">
              Get Cooking
            </h4>
            <ul className="mt-4 space-y-3">
              {getCooking.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold tracking-tight text-zinc-900">
              Information
            </h4>
            <ul className="mt-4 space-y-3">
              {information.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold tracking-tight text-zinc-900">
              Follow Us
            </h4>
            <ul className="mt-4 space-y-3">
              {followUs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-8 h-24 w-36">
        <Image
          src="/p2.jpg"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />
      </div>
      <div className="pointer-events-none absolute right-6 bottom-6 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
        <Image src="/p2.jpg" alt="" fill className="object-cover" priority />
      </div>
    </footer>
  );
}
