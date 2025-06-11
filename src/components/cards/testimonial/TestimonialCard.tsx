import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Testimonial } from "@/lib/interfaces/testimonials";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <Card key={index} className="shadow-lg px-6 py-10">
      <CardHeader className="flex items-center">
        {/* <Image
          alt={`${testimonial.name}.`}
          src={testimonial.imageUrl}
          className="rounded-full size-12"
          width={48}
          height={48}
        /> */}
      </CardHeader>

      <CardContent className="ml-4">
        <CardTitle>{testimonial.name}</CardTitle>
        <CardDescription>{testimonial.position}</CardDescription>
        <div className="flex items-center mt-1">
          {[0, 1, 2, 3, 4].map((rating) => (
            <FaStar
              key={rating}
              aria-hidden="true"
              className={cn(
                testimonial.rating > rating
                  ? "text-yellow-400"
                  : "text-gray-300",
                "size-5 shrink-0",
              )}
            />
          ))}
        </div>
        <p className="sr-only">{testimonial.rating} out of 5 stars</p>
        {testimonial.quote}
      </CardContent>
    </Card>
  );
}
