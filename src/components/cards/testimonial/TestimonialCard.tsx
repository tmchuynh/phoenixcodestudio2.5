import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  review,
}: {
  review: {
    id: number;
    author: string;
    avatarSrc: string;
    rating: number;
    content: string;
  };
}) {
  return (
    <div key={review.id} className="py-12">
      <div className="flex items-center">
        <Image
          alt={`${review.author}.`}
          src={review.avatarSrc}
          className="rounded-full size-12"
          width={48}
          height={48}
        />
        <div className="ml-4">
          <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
          <div className="flex items-center mt-1">
            {[0, 1, 2, 3, 4].map((rating) => (
              <FaStar
                key={rating}
                aria-hidden="true"
                className={cn(
                  review.rating > rating ? "text-yellow-400" : "text-gray-300",
                  "size-5 shrink-0"
                )}
              />
            ))}
          </div>
          <p className="sr-only">{review.rating} out of 5 stars</p>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: review.content }}
        className="space-y-6 mt-4 text-base text-gray-600 italic"
      />
    </div>
  );
}
