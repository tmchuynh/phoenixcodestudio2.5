import DynamicButton from "@/components/button/button-dynamic";
import FeaturedOverlappingTestimonial from "@/components/cards/testimonial/Overlapping_Image";
import ThreeColumns from "@/components/headers/page_headers/ThreeColumns";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import { testimonials } from "@/lib/constants/testimonials";
import Expertise from "./expertise";
import Optimized from "./optimized";

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

        <Expertise />

        <Optimized />

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
