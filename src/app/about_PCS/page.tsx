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
      </div>

      <FeaturedOverlappingTestimonial testimonial={testimonials[4]} />
    </div>
  );
}
