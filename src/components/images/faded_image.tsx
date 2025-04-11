import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FadedImage({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-64 overflow-hidden rounded-lg",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        className="block opacity-80 hover:opacity-100 w-full h-auto transition-opacity duration-300 ease-in-out object-cover object-center"
        width={1200}
        height={800}
      />
    </div>
  );
}
