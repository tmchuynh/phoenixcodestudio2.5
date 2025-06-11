import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DividerImage({
  src,
  title,
  description,
  className,
}: {
  src: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative py-24 sm:py-32 overflow-hidden isolate",
        className,
      )}
    >
      {/* Decorative Background Image */}
      <Image
        src={src}
        alt=""
        fill
        className="-z-10 rounded-xl object-cover"
        priority
      />

      {/* Optional Gradient Overlay */}
      <div className="-z-10 absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />

      {/* Content Slot (Optional) */}
      <div className="text-center">
        <h2 className="font-bold text-3xl sm:text-4xl tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8">{description}</p>
      </div>
    </div>
  );
}
