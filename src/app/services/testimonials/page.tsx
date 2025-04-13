import TestimonialCard from "@/components/cards/testimonial/TestimonialCard";
import TestimonialStats from "@/components/headers/page_headers/TestimonialStats";
import { testimonials } from "@/lib/constants/testimonials.tsx";

export default function TestimonialsPage() {
  return (
    <div className="pt-3 md:pt-5 lg:pt-9">
      <TestimonialStats />
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
