"use client";

import IntroductionImage from "@/components/headers/page_headers/IntroductionImage";
import Timeline from "@/components/Timeline";
import { originTimeline } from "@/lib/constants/about/timeline";
import { FaLandmark } from "react-icons/fa";

export default function OurOriginStoryPage() {
  return (
    <div className="mx-auto py-10 md:py-16 lg:py-24 pt-3 md:pt-5 lg:pt-9 w-11/12">
      <IntroductionImage />
      <Timeline items={originTimeline} orientation="horizontal" />

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
        <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-6">
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Custom Web Development</h4>
              <p className="mt-2 text-sm">
                High-performance, scalable solutions—built from scratch,
                optimized for growth.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>User-Centered UX/UI Design</h4>
              <p className="mt-2 text-sm">
                Interfaces that are intuitive, inclusive, and beautiful.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Single Page Applications (SPAs)</h4>
              <p className="mt-2 text-sm">
                Modern, fast, interactive apps that prioritize user experience
                without sacrificing speed.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Full-Scale Rebranding</h4>
              <p className="mt-2 text-sm">
                From brand voice to visuals—total transformation rooted in
                authenticity.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Content Strategy & Technical Writing</h4>
              <p className="mt-2 text-sm">
                Clear, compelling messaging that translates complex ideas with
                precision.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>SEO-Optimized Blog Writing</h4>
              <p className="mt-2 text-sm">
                Organic traffic, elevated. Content built to rank, written to
                connect.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Newsletter Creation</h4>
              <p className="mt-2 text-sm">
                Visually compelling, conversion-focused newsletters that drive
                engagement.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Database Architecture & Security</h4>
              <p className="mt-2 text-sm">
                Robust, secure, scalable solutions to manage and protect data
                integrity.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Wireframing & Prototyping</h4>
              <p className="mt-2 text-sm">
                Validate ideas early, minimize risk, and maximize user
                satisfaction.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
