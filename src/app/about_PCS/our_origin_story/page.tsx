"use client";

import IntroductionImage from "@/components/headers/page_headers/IntroductionImage";
import Timeline from "@/components/Timeline";
import { originTimeline } from "@/lib/constants/constants";

export default function OurOriginStoryPage() {
  return (
    <div className="mx-auto py-10 md:py-16 lg:py-24 pt-3 md:pt-5 lg:pt-9 w-11/12">
      <IntroductionImage />
      <Timeline items={originTimeline} orientation="horizontal" />

      <section className="mx-auto w-11/12">
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
    </div>
  );
}
