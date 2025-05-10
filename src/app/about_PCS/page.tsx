import DynamicButton from "@/components/button/button-dynamic";
import FeaturedOverlappingTestimonial from "@/components/cards/testimonial/Overlapping_Image";
import ThreeColumns from "@/components/headers/page_headers/ThreeColumns";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import { testimonials } from "@/lib/constants/testimonials";

export default function OurAspirationsPage() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <MasonryGridGallery />

      <ThreeColumns />
      <div className="mx-auto my-7 w-11/12">
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
          you're launching a new product, reimagining your brand, or building a
          custom digital solution, we tailor each project to your specific
          challenges and goals.
        </p>

        <div className="space-y-7 my-3">
          <div>
            <h3>Our expertise spans:</h3>
            <ul className="gap-2 grid md:grid-cols-2 lg:grid-cols-4 ml-7 list-[upper-roman] list-outside">
              <li>
                Custom Web Development (Next.js, Tailwind CSS, TypeScript)
              </li>
              <li>Brand Strategy</li>
              <li>UX/UI Design</li>
              <li>Conversion-Focused Content Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div>
            <h3>
              Our process is collaborative and data-driven, ensuring every
              digital product is optimized for:
            </h3>
            <ul className="gap-2 grid md:grid-cols-2 lg:grid-cols-4 ml-7 list-[upper-roman] list-outside">
              <li>Search engines</li>
              <li>Mobile responsiveness</li>
              <li>Seamless user experience</li>
              <li>Scalable performance</li>
            </ul>
          </div>
        </div>

        <p>
          Whether you need a high-converting eCommerce platform, a responsive
          web app, or a fresh brand identity, we build with heart, purpose, and
          technical precision.
        </p>
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
