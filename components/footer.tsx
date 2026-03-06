import Link from "next/link";
import Image from "next/image";

const getCooking = [
  { label: "Easy Asian Takeout", href: "/home#explore" },
  { label: "Recipe Gallery", href: "/home#testimonials" },
  { label: "Ingredients Guide", href: "/about" },
  { label: "Weekly Meal Plans", href: "/home#subscribe" },
  { label: "Penang Tour", href: "/about" },
  { label: "Conversion Tool", href: "/about" },
];

const followUs = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const helpSupport = [
  { label: "About", href: "/about" },
  { label: "Help Center", href: "/help-center" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Blog", href: "/about" },
  { label: "FAQs", href: "/help-center" },
  { label: "Order Support", href: "/help-center" },
];

const deliveryPartners = [
  { label: "Partner With Us", href: "/about" },
  { label: "Apps For You", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white pt-16 pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
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
              Learn More
            </h4>
            <ul className="mt-4 space-y-3">
              {helpSupport.map((item) => {
                const isPrivacy = item.label === "Privacy Policy";
                const isExternal = item.href.startsWith("http");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-zinc-600 transition hover:text-zinc-900"
                      target={isPrivacy || isExternal ? "_blank" : undefined}
                      rel={isPrivacy || isExternal ? "noopener noreferrer" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold tracking-tight text-zinc-900">
              For Delivery Partners
            </h4>
            <ul className="mt-4 space-y-3">
              {deliveryPartners.map((item) => (
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
              {followUs.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-zinc-600 transition hover:text-zinc-900"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-8 h-24 w-36">
        <Image
          src="/p8.jpg"
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
