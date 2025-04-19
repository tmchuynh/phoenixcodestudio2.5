import Image from "next/image";

export default function IntroductionImage() {
  return (
    <div>
      <section className="md:block relative -z-10 hidden overflow-hidden">
        <div className="mx-auto lg:w-11/12">
          <Image
            alt=""
            src="https://img.freepik.com/premium-photo/fiery-phoenix-with-outstretched-wings-against-black-background_14117-690436.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div aria-hidden="true" className="relative">
            <div className="bottom-0 absolute -inset-x-30 bg-linear-to-t from-background pt-[37%]" />
          </div>
        </div>
      </section>
      <div className="z-20 mx-auto md:-mt-16 lg:-mt-36 xl:-mt-26 w-11/12">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h4 className="lg:text-white xl:text-secondary">
            A Dream That Stirred in Silence Before It Echoed
          </h4>
          <h1 className="md:w-4/5">
            The Path We Took Before the World Heard Us
          </h1>
          <div className="lg:gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none text-base/7">
            <div>
              <p>
                Phoenix Code Studio began with a dream—not just to build
                websites, but to craft immersive, intentional digital
                experiences that tell meaningful stories and empower small
                businesses to thrive online. What started as a simple idea
                gradually evolved into something much greater: a creative and
                technical studio committed to turning vision into scalable,
                high-impact realities. We imagined a place where creativity and
                strategy come together, and where every project is treated as a
                meaningful opportunity to elevate and inspire.
              </p>
              <p>
                Our journey was deeply rooted in community. It was shaped by the
                unwavering trust of friends, family, and early clients who
                believed in our purpose long before it had a name. They weren’t
                seeking off-the-shelf solutions—they needed genuine
                storytelling, thoughtful design, and a team that would truly
                listen. Their belief in us was more than support; it was the
                spark that lit the path forward. Encouraged by their confidence,
                we dedicated ourselves to building something more—a studio
                grounded in collaboration, care, and long-term partnerships.
              </p>
              <p>
                With that foundation, we began to sketch the blueprint for what
                Phoenix Code Studio would become. Innovation, authenticity, and
                user-centered design became the pillars of our work. We immersed
                ourselves in custom development, brand strategy, and full-scale
                digital transformation, always tailoring each solution to
                reflect the unique personality and goals of the brands we
                served. From scalable platforms to complete identity overhauls,
                every decision we made was rooted in strategy, and every element
                was intentionally crafted with purpose.
              </p>
            </div>
            <div>
              <p>
                Along the way, we embraced our mistakes. The early missteps
                weren’t setbacks—they were catalysts for growth. They challenged
                us to learn, to refine, and to evolve. Those lessons became
                integral to our process, instilling in us a resilient mindset
                and a constant desire to push creative and technical boundaries.
                For us, progress has never been about perfection—it’s about the
                ongoing pursuit of better.
              </p>
              <p>
                As we grew, we encountered new challenges, and each one helped
                refine our purpose. We’ve come to believe that true growth is
                forged through adversity. Every obstacle strengthened our
                resolve and sharpened our focus. We carried that experience into
                every client relationship—approaching problems as opportunities,
                embracing complexity with creativity, and finding clarity
                through collaboration. Together, we turn challenges into
                breakthroughs and build solutions designed for long-term
                success.
              </p>
              <p>
                There were hard days, too—uncertain moments, complex projects,
                and late nights. We took things one step at a time, staying
                grounded in consistency, transparency, and an unshakable
                commitment to quality. It’s in those moments of quiet
                persistence that the heart of our studio was formed. We learned
                to show up, to adapt, and to deliver—not just results, but care
                and intention.
              </p>
              <p>
                It’s from those very roots that Phoenix Code Studio was born.
                Named after the phoenix—a symbol of transformation, resilience,
                and boundless potential—our studio stands for new beginnings.
                Every project we take on represents an opportunity to rise
                stronger, more focused, and more aligned with our purpose. And
                just as we’ve built our story one meaningful step at a time, we
                now help others do the same—whether launching something new,
                redefining their presence, or rediscovering their voice. We
                guide brands to grow, evolve, and thrive in a digital world that
                never stops moving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
