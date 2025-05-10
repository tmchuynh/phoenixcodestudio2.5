import DynamicButton from "@/components/button/button-dynamic";
import FeaturedOverlappingTestimonial from "@/components/cards/testimonial/Overlapping_Image";
import ThreeColumns from "@/components/headers/page_headers/ThreeColumns";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import { testimonials } from "@/lib/constants/testimonials";
import { FaLandmark } from "react-icons/fa";

export default function OurAspirationsPage() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <MasonryGridGallery />

      <ThreeColumns />

      <div className="mx-auto my-7 w-11/12">
        <div>
          <h4>Creatively. Strategically. Authentically.</h4>
          <h2>At Phoenix Code Studio, We Help Brands Rise.</h2>

          <p>
            At our core, we’re more than coders, designers, or strategists—we’re
            partners in your growth. Phoenix Code Studio is where ideas rise,
            innovation thrives, and every project becomes a launchpad for
            something greater.
          </p>
          <p>
            We proudly serve a diverse set of industries—from healthcare and
            education to e-commerce, startups, and technology firms. Whether
            you're launching a new product, reimagining your brand, or building
            a custom digital solution, we tailor each project to your specific
            challenges and goals.
          </p>
        </div>

        <section className="mt-6">
          <h3>Our expertise spans:</h3>
          <p>
            Our team is a blend of creative minds and technical experts,
            dedicated to crafting solutions that not only look good but also
            perform exceptionally. We believe in the power of collaboration,
            working closely with our clients to understand their unique needs
            and aspirations.
          </p>
          <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-5">
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Custom Web Development</h4>
                <p className="mt-2 text-sm">
                  We specialize in Next.js, Tailwind CSS, and TypeScript to
                  deliver fast, scalable, and fully custom websites that meet
                  your business needs and grow with you.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Brand Strategy</h4>
                <p className="mt-2 text-sm">
                  We align your visual identity and messaging with your business
                  goals—building a cohesive, authentic brand presence across all
                  digital touchpoints.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>UX/UI Design</h4>
                <p className="mt-2 text-sm">
                  We craft intuitive interfaces that enhance usability,
                  accessibility, and engagement—turning complex journeys into
                  seamless digital experiences.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Conversion-Focused Content Marketing</h4>
                <p className="mt-2 text-sm">
                  We create content strategies that drive action—blending
                  storytelling, SEO, and user behavior insights to maximize
                  engagement and ROI.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>SEO Optimization</h4>
                <p className="mt-2 text-sm">
                  From technical SEO to on-page strategy, we help you climb
                  search rankings and drive targeted organic traffic that
                  converts.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section className="mt-9">
          <h3>
            Our process is collaborative and data-driven, ensuring every digital
            product is optimized for:
          </h3>
          <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-6">
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Search engines</h4>
                <p className="mt-2 text-sm">
                  We implement technical SEO, clean code, and strategic metadata
                  to ensure your site is easily discoverable and indexable.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Mobile responsiveness</h4>
                <p className="mt-2 text-sm">
                  Our builds adapt to all devices, delivering a seamless
                  experience from desktop to smartphone.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Seamless user experience</h4>
                <p className="mt-2 text-sm">
                  From navigation to interaction, every detail is optimized to
                  guide users intuitively toward conversion.
                </p>
              </div>
            </div>
            <div className="lg:block sm:flex">
              <div className="w-16 h-16 sm:shrink-0 object-cover">
                <FaLandmark className="w-16 h-16" />
              </div>
              <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
                <h4>Scalable performance</h4>
                <p className="mt-2 text-sm">
                  We build modular, future-proof systems that evolve alongside
                  your brand—ensuring speed, reliability, and performance at
                  scale.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section>
          <h2>We Build with Heart, Purpose & Technical Precision</h2>
          <p>
            Whether you're launching a high-converting eCommerce platform,
            developing a responsive web application, or redefining your brand
            identity, Phoenix Code Studio delivers with clarity and care.
          </p>
          <p>
            We combine human-centered design with scalable development to create
            digital solutions that don’t just function—they perform. Every
            experience we craft is driven by strategy, elevated by creativity,
            and grounded in precision. From architecture to aesthetics, we
            engineer every detail to support your business goals, connect with
            your audience, and deliver long-term impact.
          </p>
        </section>
      </div>
      <DynamicButton
        variant={"outline"}
        className="mx-0 my-3 md:ml-auto lg:w-1/3"
      >
        Come Work With Us
      </DynamicButton>

      <FeaturedOverlappingTestimonial testimonial={testimonials[4]} />
    </div>
  );
}
