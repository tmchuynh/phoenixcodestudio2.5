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
      <div>
        <h2>This Is Who We Are</h2>

        <p>
          At our core, we’re motivated by a desire to do more than simply
          build—we’re here to make a difference. By helping brands tell their
          stories with clarity, authenticity, and creativity, we create digital
          experiences that resonate far beyond the screen. Phoenix Code Studio
          is where ideas rise, challenges spark innovation, and every project
          becomes a platform for lasting growth.
        </p>
        <p>
          At Phoenix Code Studio, we are driven by a clear and unwavering
          purpose: to empower brands to rise, evolve, and thrive in a digital
          world that never stands still. Every line of code, every design
          choice, and every strategy we craft is rooted in the desire to help
          businesses succeed—authentically, sustainably, and powerfully.
        </p>
        <p>
          We proudly serve a diverse range of industries, including e-commerce,
          healthcare, education, technology, and more. Whether you're looking
          for web design for healthcare, custom e-commerce platforms, or brand
          strategy for a growing startup, our team specializes in crafting
          industry-specific digital solutions tailored to your unique challenges
          and goals. Each project is designed to deliver real results, enhance
          your online presence, and move your business forward.
        </p>
        <p>
          At Phoenix Code Studio, we are more than just web developers, UX
          designers, and content creators—we are digital strategists committed
          to helping businesses dominate the online marketplace. Our core
          expertise spans custom web development, UX/UI design, SEO
          optimization, and content marketing. Together, these capabilities
          allow us to create high-performance digital experiences that drive
          engagement, strengthen visibility, and maximize conversions.
        </p>
        <p>
          We take a collaborative, data-driven approach, ensuring that every
          website, brand strategy, and digital product we deliver is fully
          optimized for search engines, mobile responsiveness, and seamless user
          experience. Whether you need a conversion-optimized eCommerce site, a
          brand refresh, or an impactful content strategy, we tailor each
          solution to meet your specific objectives and empower your business to
          lead.
        </p>
      </div>
      <DynamicButton variant={"outline"} className="mx-0 my-3 w-1/3">
        Come Work With Us
      </DynamicButton>

      <FeaturedOverlappingTestimonial testimonial={testimonials[4]} />
    </div>
  );
}
