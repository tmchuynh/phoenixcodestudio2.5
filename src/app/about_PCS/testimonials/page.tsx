import TestimonialCard from "@/components/cards/testimonial/TestimonialCard";
import TwoColumnTextImage from "@/components/headers/page_headers/TwoColumnTextImage";
import { testimonials } from "@/lib/constants/testimonials.tsx";

export default function TestimonialsPage() {
  return (
    <div className="mx-auto py-10 md:py-12 lg:py-18 w-11/12">
      <TwoColumnTextImage />
      <section className="my-12">
        <h2>It Starts with a Match to Light a Fire</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mx-auto py-4 md:py-6 lg:py-10 w-11/12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
