import Image from "next/image";
import Footer from "../../components/footer";

export const dynamic = "force-static";

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative mx-auto flex h-64 max-w-7xl items-center justify-center px-6 lg:h-72 lg:px-12">
          <Image
            src="/p123.webp"
            alt="Colorful macarons"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              We would love to hear from you!
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-50 py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-12">
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-zinc-200/80 sm:p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-zinc-900">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <select className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30">
                  <option>Account related issue</option>
                  <option>Order not delivered</option>
                  <option>Payment and refund</option>
                  <option>Feedback or suggestion</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-900">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900">
                  Mobile Number <span className="text-zinc-400">(optional)</span>
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900">
                  Type text <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-500/40 transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                Submit feedback
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-md shadow-zinc-200/80">
              <h2 className="text-base font-semibold text-zinc-900">Report a Safety Emergency</h2>
              <p className="mt-2 text-sm text-zinc-600">
                We are committed to the safety of everyone using QuickRunEats. If you are facing any safety related
                issue, let us know immediately.
              </p>
              <button className="mt-3 text-sm font-semibold text-rose-600 hover:text-rose-700">
                Report here
              </button>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md shadow-zinc-200/80">
              <h2 className="text-base font-semibold text-zinc-900">Issue with your live order?</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Use the support or online ordering help section in your app to connect directly with our customer
                support team for faster resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

