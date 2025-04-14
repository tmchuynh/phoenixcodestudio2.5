import IntroductionImage from "@/components/headers/page_headers/IntroductionImage";
import TestimonialStats from "@/components/headers/page_headers/TestimonialStats";
import DividerImage from "@/components/page_spliter/DividerImage";

export default function OurOriginStoryPage() {
  return (
    <div className="py-10 md:py-16 lg:py-24 pt-3 md:pt-5 lg:pt-9">
      <TestimonialStats />
      <IntroductionImage />
      <div className="mx-auto w-11/12">
        <h1>It Takes an Ocean to Make Waves</h1>
        <DividerImage
          src="https://plus.unsplash.com/premium_photo-1664297844174-d7dfb8d0e7f1?w=800&auto=format&fit=crop&q=60"
          className="-z-10 mt-7"
          title={"Elevate Your Online Presence"}
          description={
            "Experience thoughtful design with impactful visuals and seamless interaction."
          }
        />

        <section className="z-10 -mt-16 px-6">
          <div>
            <h1>Our Mission in Action</h1>
            <p>
              Every journey comes with its trials—and at Phoenix Code Studio,
              we've learned that the path to success is rarely linear. From
              technical hurdles to shifting markets and evolving client needs,
              we’ve faced challenges head-on, not as setbacks, but as
              opportunities to learn, adapt, and grow. Our resilience has been
              shaped not just by the obstacles we've overcome, but by the
              relationships we've built along the way.
            </p>
            <p>
              We carry that same spirit into every client partnership. Whether
              you’re navigating a rebrand, overcoming outdated digital systems,
              or seeking clarity in a crowded marketplace, we’re by your side.
              We don’t just deliver solutions—we collaborate closely to
              co-create them. We listen, adapt, and evolve with you, ensuring
              that every strategy is rooted in your goals and every pivot leads
              to progress.
            </p>
            <p>
              Growth isn’t just about expansion—it’s about building something
              stronger, smarter, and more aligned with your vision. That’s why
              we champion transparent communication, creative problem-solving,
              and a growth mindset in all we do. At Phoenix Code Studio, we turn
              adversity into fuel for innovation—helping you not only overcome
              obstacles, but emerge more focused, more resilient, and better
              positioned to thrive.
            </p>
          </div>
        </section>

        <p className="mt-6">
          Discover the journey that led us to create our app, and how it has
          evolved to meet the needs of our users.
        </p>

        <section>
          <div className="py-3">
            <h4>Just a Dream</h4>
            <h2>The Vision That Kept Coming Back</h2>
            <p>
              Phoenix Code Studio began with a dream—to build more than
              websites. We wanted to create immersive, intentional digital
              experiences that tell meaningful stories and empower small
              businesses to succeed online. What started as a simple idea has
              grown into a creative and technical powerhouse dedicated to
              turning visions into scalable, high-impact realities. We
              envisioned a space where creativity meets strategy, and every
              project is treated as a chance to elevate and transform.
            </p>
          </div>

          <div className="py-3">
            <h4>Friends & Family Rallying Behind</h4>
            <h2>Encouragement & Support</h2>
            <p>
              Rooted in community, our journey was sparked by the trust and
              support of friends, family, and early clients who believed in our
              mission before it had a name. They needed more than cookie-cutter
              solutions—they needed authentic storytelling, thoughtful design,
              and a team that truly listened. Encouraged by their confidence, we
              committed to building a studio that champions collaboration, care,
              and long-term partnerships.
            </p>
          </div>

          <div className="py-3">
            <h4>The Blueprint</h4>
            <h2>Putting Pen to Paper</h2>
            <p>
              With our foundation in place, we built a blueprint based on
              innovation, authenticity, and user-centered design. We developed
              expertise in custom website development, brand revitalization, and
              full-scale redesigns, tailoring every experience to reflect the
              brand it represents. From modern, scalable platforms to
              identity-shaping rebrands, every decision is rooted in strategy,
              every element handcrafted to serve a purpose.
            </p>
          </div>

          <div className="py-3">
            <h4>Embracing Mistakes</h4>
            <h2>The First Steps</h2>
            <p>
              We embraced our early missteps as lessons in growth, using every
              challenge to sharpen our skills and improve our process. Those
              formative experiences gave us a resilient mindset and a drive to
              push creative and technical boundaries—never settling, always
              learning. At Phoenix Code Studio, we believe excellence is born
              from evolution.
            </p>
          </div>

          <div className="py-3">
            <h4>Overcoming Challenges Together</h4>
            <h2>Resilience & Growth</h2>
            <p>
              At Phoenix Code Studio, we believe that growth is forged through
              adversity. Every obstacle we’ve encountered has strengthened our
              resolve and refined our purpose. Through setbacks and
              breakthroughs, we’ve learned the value of adaptability,
              perseverance, and partnership. We extend that same mindset to our
              clients—collaborating closely to navigate complexity, solve
              problems creatively, and emerge stronger. Together, we turn
              challenges into catalysts for innovation, forging digital
              solutions that are not only resilient but built for long-term
              success.
            </p>
          </div>

          <div className="py-3">
            <h4>Even When Days Are Hard</h4>
            <h2>Taking It One Day at a Time</h2>
            <p>
              Building a studio from the ground up meant working through
              complexity and uncertainty. We took things one step at a time,
              grounded in consistency, transparency, and a relentless pursuit of
              quality. This perseverance shaped who we are: a team that shows
              up, adapts, and delivers—with heart.
            </p>
          </div>

          <div className="py-3">
            <h4>Rising from the Ashes</h4>
            <h2>Becoming Phoenix Code Studio</h2>
            <p>
              Named after the Phoenix—a timeless symbol of transformation,
              renewal, and limitless potential—our studio embodies the spirit of
              reinvention. Every project is a new beginning, a chance to rise
              stronger and more focused. We help brands do the same—whether
              launching something new, pivoting to new markets, or rediscovering
              their voice, we guide them to thrive in the digital world.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
