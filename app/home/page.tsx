import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import ScrollReveal from "../../components/ScrollReveal";
import SpinOnScroll from "../../components/SpinOnScroll";
import DepthOnScroll from "../../components/DepthOnScroll";

export default function Home() {
  return (
    <>
    <section className="relative isolate min-h-[90vh] w-full overflow-hidden bg-zinc-50">
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4">
        <div className="relative h-20 w-64">
          <div className="absolute left-0 top-1 h-4 w-20 -rotate-20 rounded-full bg-amber-700 shadow-md" />
          <div className="absolute left-6 top-4 h-4 w-20 -rotate-20 rounded-full bg-amber-700 shadow-md" />
          <div className="absolute left-12 top-7 h-4 w-20 -rotate-20 rounded-full bg-amber-700 shadow-md" />
          <div className="absolute left-24 top-2 h-2 w-2 rounded-full bg-orange-600" />
          <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-red-500" />
          <div className="absolute left-16 top-6 h-1.5 w-1.5 rounded-full bg-black/60" />
        </div>
        
      </div>
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="mx-auto grid min-h-[90vh] w-full max-w-7xl grid-cols-1 items-center justify-items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            <span className="block">Take a taste</span>
            <span className="block">Come join us.</span>
          </h1>
          <h2 className="text-2xl font-semibold text-zinc-800">
            Life is so endlessly delicious.
          </h2>
          <p className="max-w-prose text-base leading-7 text-zinc-600">
            Dumpling is a broad classification for a dish that consists of
            pieces of dough made from a variety of starch sources wrapped
            around a filling, or of dough with no filling.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="#explore"
              className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              Explore Now
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-[90%] max-w-[520px]">
          <SpinOnScroll className="absolute inset-0" maxDegrees={18}>
            <div
              className="absolute inset-0 overflow-hidden rounded-full"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 64%, transparent 70%)",
                maskImage:
                  "radial-gradient(circle at center, black 64%, transparent 70%)",
              }}
            >
              <Image
                src="/p1.png"
                alt="Hero dish"
                fill
                sizes="(max-width: 768px) 80vw, 520px"
                className="object-cover"
                priority
              />
            </div>
          </SpinOnScroll>
          <div className="absolute inset-0">
          </div>
          <div className="absolute left-[18%] top-[20%] h-[6px] w-[75%] -rotate-[20deg] rounded-full bg-amber-700 shadow-md" />
          <div className="absolute left-[20%] top-[26%] h-[6px] w-[75%] -rotate-[20deg] rounded-full bg-amber-600 shadow-md" />
        </div>
      </div>

    </section>
    
    <section id="explore" className="relative w-full bg-zinc-50 py-16 sm:py-24">
      <DepthOnScroll className="pointer-events-none absolute left-0 top-8 md:top-6 h-28 w-40 md:h-36 md:w-56" side="left" maxScale={0.1} translatePx={28}>
        <Image src="/p3.jpg" alt="" fill className="object-cover object-left" priority />
      </DepthOnScroll>
      <DepthOnScroll className="pointer-events-none absolute right-0 top-8 md:top-15 h-28 w-40 md:h-36 md:w-56" side="right" maxScale={0.1} translatePx={28}>
        <Image src="/p3.jpg" alt="" fill className="object-cover object-right" priority />
      </DepthOnScroll>
      <div className="pointer-events-none absolute left-5 bottom-0 z-10 h-24 w-24 md:h-28 md:w-28">
        <Image src="/p6.jpg" alt="" fill className="object-cover rounded-full" priority />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-12">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900">What&apos;s on our Plate</h3>
          <p className="mt-2 text-zinc-600">Please serve yourself without any hesitate</p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm font-semibold">
            <span className="text-zinc-600 hover:text-zinc-900 transition">Appetizers</span>
            <span className="relative text-zinc-900">
              Main Dish
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-16 -translate-x-1/2 bg-orange-500" />
            </span>
            <span className="text-zinc-600 hover:text-zinc-900 transition">Dessert</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delayMs={0}>
            <SpinOnScroll className="relative mx-auto aspect-square w-72 overflow-hidden rounded-full" maxDegrees={18}>
              <Image
                src="/p1.png"
                alt="Dish 1"
                fill
                sizes="(max-width: 768px) 288px, 288px"
                className="object-cover"
                priority
              />
            </SpinOnScroll>
            <div className="mt-4 w-72 mx-auto text-center">
              <h4 className="text-lg font-semibold text-zinc-900">Stirred Egg</h4>
              <p className="mt-1 text-sm leading-5 text-zinc-600">
                This might be the most common Chinese family dish. Easy to cook and comforting.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <div className="flex flex-col items-center">
              <SpinOnScroll className="relative mx-auto aspect-square w-72 overflow-hidden rounded-full" maxDegrees={18}>
                <Image
                  src="/p1.png"
                  alt="Main dish"
                  fill
                  sizes="(max-width: 768px) 288px, 288px"
                  className="object-cover p-0"
                  priority
                />

                <div className="mt-4 max-w-[18rem] text-center">
                <h4 className="text-lg font-semibold text-zinc-900">Stirred Egg</h4>
                <p className="mt-1 text-sm leading-5 text-zinc-600">
                  This might be the most common Chinese family dish. Easy to cook and comforting.
                </p>
              </div>


              </SpinOnScroll>
              <div className="mt-4 w-72 mx-auto text-center">
                <h4 className="text-lg font-semibold text-zinc-900">Stirred Egg</h4>
                <p className="mt-1 text-sm leading-5 text-zinc-600">
                  This might be the most common Chinese family dish. Easy to cook and comforting.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delayMs={240}>
            <SpinOnScroll className="relative mx-auto aspect-square w-72 overflow-hidden rounded-full" maxDegrees={18}>
              <Image
                src="/p1.png"
                alt="Dish 3"
                fill
                sizes="(max-width: 768px) 288px, 288px"
                className="object-cover"
              />
            </SpinOnScroll>
            <div className="mt-4 w-72 mx-auto text-center">
                <h4 className="text-lg font-semibold text-zinc-900">Stirred Egg</h4>
                <p className="mt-1 text-sm leading-5 text-zinc-600">
                  This might be the most common Chinese family dish. Easy to cook and comforting.
                </p>
              </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section id="testimonials" className="relative w-full bg-zinc-50 py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_1fr] lg:px-12">
        <div className="relative mx-auto aspect-square w-[88%] max-w-[540px]">
          <SpinOnScroll className="absolute inset-0" maxDegrees={16}>
            <Image
              src="/p1.png"
              alt="Featured dish"
              fill
              sizes="(max-width: 1024px) 80vw, 540px"
              className="rounded-full object-cover"
              priority
            />
          </SpinOnScroll>
          <div className="absolute left-[16%] top-[14%] h-[10px] w-[68%] -rotate-[15deg] rounded-full bg-amber-800 shadow-md" />
          <div className="absolute left-[18%] top-[19%] h-[10px] w-[68%] -rotate-[15deg] rounded-full bg-amber-700 shadow-md" />
        </div>
        <div className="relative">
          <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900">Let&apos;s see what other says</h3>
          <p className="mt-2 text-zinc-600">Please serve yourself without any hesitate</p>
          <p className="mt-6 max-w-prose text-zinc-700">
            <span className="mr-2 text-3xl text-zinc-400">“</span>
            I&apos;m currently on the tour and while we were performing in town I came across your
            chocolate fudge at Whole Foods. OMG! I was nice enough to share it with the crew and the
            glam squad. Of course they all agreed with me. So glad we are coming back next week.
            <span className="ml-2 text-3xl text-zinc-400">”</span>
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow ring-4 ring-white" />
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 shadow ring-4 ring-white" />
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-300 to-indigo-500 shadow ring-4 ring-white" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-8 top-2 h-28 w-48">
        <Image
          src="/p4.jpg"
          alt="Spices garnish"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="mt-12 w-full">
        <div className="relative h-24 w-full overflow-hidden rounded-3xl border-t border-zinc-100 bg-gradient-to-b from-white to-zinc-50 shadow-[0_-6px_24px_rgba(0,0,0,0.06)]">
          <DepthOnScroll className="pointer-events-none absolute inset-y-0 left-0 w-[420px]" side="left" translatePx={28} maxScale={0.1}>
            <Image src="/p6.jpg" alt="" fill className="object-contain object-left" priority />
          </DepthOnScroll>
          <DepthOnScroll className="pointer-events-none absolute inset-y-0 right-0 w-[420px]" side="right" translatePx={28} maxScale={0.1}>
            <Image src="/p3.jpg" alt="" fill className="object-contain object-right" priority />
          </DepthOnScroll>
        </div>
      </div>
    </section>
    
    <section id="subscribe" className="relative w-full bg-zinc-50 py-20">
      <DepthOnScroll className="pointer-events-none absolute left-0 top-4 h-24 w-40 md:h-32 md:w-48" side="left" translatePx={16} maxScale={0.08}>
        <Image src="/p5.jpg" alt="" fill className="object-contain object-left" priority />
      </DepthOnScroll>
      <DepthOnScroll className="pointer-events-none absolute right-2 top-8 h-24 w-40 md:h-32 md:w-48" side="right" translatePx={16} maxScale={0.08}>
        <Image src="/p4.jpg" alt="" fill className="object-contain object-right" priority />
      </DepthOnScroll>
      <DepthOnScroll className="pointer-events-none absolute left-6 bottom-6 h-20 w-20 md:h-24 md:w-24" side="left" translatePx={10} maxScale={0.06}>
        <Image src="/p6.jpg" alt="" fill className="object-contain" priority />
      </DepthOnScroll>
      <DepthOnScroll className="pointer-events-none absolute right-10 bottom-8 h-16 w-24 md:h-20 md:w-32" side="right" translatePx={10} maxScale={0.06}>
        <Image src="/p3.jpg" alt="" fill className="object-contain" priority />
      </DepthOnScroll>
      <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-12">
        <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900">Easy recipes will send to your inbox</h3>
        <p className="mt-2 text-zinc-600">Get weekly updates on the newest chinese recipes in your mailbox!</p>
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-2 shadow-lg ring-1 ring-zinc-200">
          <input
            type="email"
            placeholder="your email address"
            className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-zinc-900 placeholder-zinc-400 outline-none"
          />
          <button
            type="button"
            className="whitespace-nowrap rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            subscribe
          </button>
        </div>
      </div>
    </section>

    
    <Footer />
    </>
  );
}
