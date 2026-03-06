import Footer from "../../components/footer";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-6 text-left lg:px-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            About Us – Quickrun Eats
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Welcome to Quickrun Eats – Where Taste Meets Convenience.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Quickrun Eats is a modern food platform created to make fresh, hygienic, and delicious food easily
            accessible to everyone. Our mission is to connect people with quality homemade and freshly prepared meals,
            delivered quickly and safely to their doorstep.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            We believe that food is not just about eating, it&apos;s about experience, health, and happiness. That&apos;s
            why we focus on providing high-quality food made with fresh ingredients, prepared in clean environments, and
            delivered with care.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Our platform allows customers to easily browse menus, place orders, and receive food quickly through our
            user-friendly website and mobile app.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-zinc-900">
            Our Mission
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            Our mission is to provide fast, reliable, and affordable food services while maintaining the highest
            standards of quality, hygiene, and customer satisfaction.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-zinc-900">
            Our Vision
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            Our vision is to become a trusted and leading food service platform, making food ordering simple, fast, and
            convenient for everyone.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-zinc-900">
            What We Offer
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-zinc-700">
            <li>Fresh and hygienic food</li>
            <li>Fast and reliable delivery</li>
            <li>Easy ordering through website and app</li>
            <li>Affordable pricing</li>
            <li>Quality customer support</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-zinc-900">
            Why Choose Quickrun Eats
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-zinc-700">
            <li>Trusted food platform</li>
            <li>Easy to use interface</li>
            <li>Safe and secure ordering</li>
            <li>Fast delivery service</li>
            <li>Customer satisfaction is our priority</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
