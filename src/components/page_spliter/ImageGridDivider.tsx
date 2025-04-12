import { cn } from "@/lib/utils";
import { GridPattern } from "../magicui/grid-pattern";

export default function ImageGridDivider() {
  return (
    <div className="relative z-10 flex flex-col justify-between items-center ml-auto px-6 sm:px-12 py-24 max-w-4xl min-h-[200px] overflow-clip">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
        )}
      />
      <div>
        <h2 className="font-bold text-4xl sm:text-5xl tracking-tight">
          Where Design Meets Storytelling
        </h2>
        <p className="mt-6 text-lg leading-8">
          This image wall represents a transition — visual, emotional, and narrative. Let your content flow through beautifully structured, asymmetric balance.
        </p>
      </div>
    </div>
  );
}
