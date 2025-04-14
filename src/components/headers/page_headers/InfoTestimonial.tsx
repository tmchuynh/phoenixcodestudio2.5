import { testimonials } from "@/lib/constants/testimonials";

export default function InfoTestimonial() {
  return (
    <div className="relative py-8 md:py-6 overflow-hidden isolate">
      <div className="mx-auto px-4 lg:max-w-none">
        <h4>Let's Make Vision Reality</h4>
        <h1>How We Can Help You Succeed</h1>
        <section className="gap-3 lg:gap-5 xl:gap-10 grid grid-cols-1 lg:grid-cols-5 w-full">
          <div className="flex flex-col gap-3 lg:col-span-3">
            <div className="mx-auto lg:mx-0">
              <p>
                At Phoenix Code Studio, we believe that every brand has a unique
                story to tell. Our mission is to help you tell that story
                through innovative web design, branding, and digital marketing
                solutions. Whether you’re a startup looking to establish your
                online presence or an established business seeking to revamp
                your digital strategy, we’re here to guide you every step of the
                way.
              </p>
              <p>
                Every project at Phoenix Code Studio is a step toward building
                something bigger—lasting partnerships, empowered communities,
                and a digital ecosystem where every brand has the tools to
                succeed. We don’t just envision a better digital future—we build
                it.
              </p>
            </div>

            <div>
              <h4>We’re With You at Every Stage</h4>
              <p>
                At Phoenix Code Studio, our mission is simple—help your brand
                rise, evolve, and thrive through purposeful digital
                transformation. Whether you're an entrepreneur launching your
                first venture or a growing company ready to reimagine your
                online presence, we provide the tools, strategy, and creativity
                you need to move forward with confidence.
              </p>
            </div>
          </div>
          <figure className="lg:col-span-2">
            <blockquote className="font-semibold text-xl/8 tracking-tight">
              {testimonials[2].quote}
            </blockquote>
            <figcaption className="flex gap-x-4 mt-8">
              <div className="text-sm/6">
                <div className="font-semibold"> {testimonials[2].name}</div>
                <div className=""> {testimonials[2].position}</div>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  );
}
