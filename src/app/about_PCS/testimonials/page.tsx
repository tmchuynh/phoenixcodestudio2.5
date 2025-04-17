import TestimonialCard from "@/components/cards/testimonial/TestimonialCard";
import TwoColumnTextImage from "@/components/headers/page_headers/TwoColumnTextImage";
import { testimonials } from "@/lib/constants/testimonials.tsx";

export default function TestimonialsPage() {
  return (
    <div className="py-10 md:py-18 lg:py-20">
      <TwoColumnTextImage />
      <h2>It Takes an Ocean to Make Waves</h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
