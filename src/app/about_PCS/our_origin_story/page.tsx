"use client";

import IntroductionImage from "@/components/headers/page_headers/IntroductionImage";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/lib/constants/about/timeline.tsx";

export default function OurOriginStoryPage() {
  return (
    <div className="mx-auto py-10 md:py-16 lg:py-24 pt-3 md:pt-5 lg:pt-9 w-11/12">
      <IntroductionImage />

      <section className="mx-auto my-7 w-11/12">
        <h4>From Dream to Digital Reality</h4>
        <h1>Our Mission in Action</h1>
        <p>
          Every journey comes with its trials—and at Phoenix Code Studio, we've
          learned that the path to success is rarely linear. From technical
          hurdles to shifting markets and evolving client needs, we’ve faced
          challenges head-on, not as setbacks, but as opportunities to learn,
          adapt, and grow. Our resilience has been shaped not just by the
          obstacles we've overcome, but by the relationships we've built along
          the way.
        </p>
        <p>
          We carry that same spirit into every client partnership. Whether
          you’re navigating a rebrand, overcoming outdated digital systems, or
          seeking clarity in a crowded marketplace, we’re by your side. We don’t
          just deliver solutions—we collaborate closely to co-create them. We
          listen, adapt, and evolve with you, ensuring that every strategy is
          rooted in your goals and every pivot leads to progress.
        </p>
        <p>
          Growth isn’t just about expansion—it’s about building something
          stronger, smarter, and more aligned with your vision. That’s why we
          champion transparent communication, creative problem-solving, and a
          growth mindset in all we do. At Phoenix Code Studio, we turn adversity
          into fuel for innovation—helping you not only overcome obstacles, but
          emerge more focused, more resilient, and better positioned to thrive.
        </p>
      </section>

      <section className="mx-auto mt-9 w-11/12">
        <h3>Signature Services</h3>
        <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] mt-6">
          {[
            {
              title: "Brand Strategy & Identity",
              description:
                "Crafting authentic, memorable brands that resonate and endure.",
              color:
                "from-blue-50 to-sky-100 dark:from-blue-950 dark:to-sky-900",
              accent: "border-blue-500",
              span: "col-span-1",
            },
            {
              title: "User-Centered UX/UI Design",
              description:
                "Interfaces that are intuitive, inclusive, and beautiful.",
              color:
                "from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900",
              accent: "border-purple-500",
              span: "md:col-span-2 lg:row-span-2",
            },
            {
              title: "Single Page Applications (SPAs)",
              description:
                "Modern, fast, interactive apps that prioritize user experience without sacrificing speed.",
              color:
                "from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900",
              accent: "border-green-500",
              span: "col-span-1",
            },
            {
              title: "Wireframing & Prototyping",
              description:
                "Validate ideas early, minimize risk, and maximize user satisfaction.",
              color:
                "from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900",
              accent: "border-amber-500",
              span: "col-span-1",
            },
            {
              title: "SEO-Optimized Blog Writing",
              description:
                "Organic traffic, elevated. Content built to rank, written to connect.",
              color:
                "from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900",
              accent: "border-teal-500",
              span: "col-span-1",
            },
            {
              title: "Full-Scale Rebranding",
              description:
                "From brand voice to visuals—total transformation rooted in authenticity.",
              color:
                "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900",
              accent: "border-blue-500",
              span: "md:col-span-2 lg:row-span-2",
            },
            {
              title: "Custom Web Development",
              description:
                "High-performance, scalable solutions—built from scratch, optimized for growth.",
              color:
                "from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900",
              accent: "border-blue-500",
              span: "md:col-span-2 lg:col-span-2",
            },
            {
              title: "Content Strategy & Technical Writing",
              description:
                "Clear, compelling messaging that translates complex ideas with precision.",
              color:
                "from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-900",
              accent: "border-rose-500",
              span: "md:col-span-2 lg:col-span-1",
            },
            {
              title: "Database Architecture & Security",
              description:
                "Robust, secure, scalable solutions to manage and protect data integrity.",
              color:
                "from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-900",
              accent: "border-emerald-500",
              span: "md:col-span-2 lg:col-span-1",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`
                relative p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg
                bg-gradient-to-br ${service.color} border-l-4 ${service.accent}
                ${service.span}
              `}
            >
              <div className="flex flex-col h-full">
                <h4 className="mb-3 font-semibold text-gray-800 dark:text-gray-100">
                  {service.title}
                </h4>
                <p className="flex-grow text-gray-700 text-sm dark:text-gray-200 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <div
                    className={`w-8 h-1 bg-gradient-to-r ${service.accent.replace("border-", "from-")} to-transparent rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="mx-auto mt-9 w-11/12">
        <h2>How PCS Came to Be</h2>
        <Timeline data={data} />
      </section>
    </div>
  );
}
