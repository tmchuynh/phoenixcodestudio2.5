import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Testimonial } from "@/lib/interfaces/testimonials";

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
        <p className="sr-only">{testimonial.rating} out of 5 stars</p>
        {testimonial.quote}
      </CardContent>
    </Card>
  );
}
