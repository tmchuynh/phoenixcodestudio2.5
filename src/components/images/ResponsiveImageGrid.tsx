import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ResponsiveImageGrid({
  gridSize,
  images,
}: {
  gridSize: string;
  images: string[];
}) {
  // Parse the grid size from the format "rowsxcolumns"
  const [rowsStr, columnsStr] = gridSize.toLowerCase().split("x");
  const rows = parseInt(rowsStr, 10);
  const columns = parseInt(columnsStr, 10);

  // Validate the grid size format
  if (isNaN(rows) || isNaN(columns)) {
    return (
      <div className="p-4 text-red-500">
        Invalid grid size format. Please use the format "rowsxcolumns" (e.g.,
        "3x4").
      </div>
    );
  }

  const requiredImagesCount = rows * columns;

  // Return an error if not enough images are provided
  if (images.length < requiredImagesCount) {
    return (
      <div className="p-4 text-red-500">
        The number of images provided ({images.length}) is less than the
        expected grid size of {rows}x{columns} ({requiredImagesCount} images
        required).
      </div>
    );
  }

  // Use only the first requiredImagesCount images if too many are provided.
  const displayedImages = images.slice(0, requiredImagesCount);

  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-around gap-2 mx-auto">
      {displayedImages.map((src, index) => (
        <div key={index} className="h-72">
          <Image
            key={index}
            src={src}
            alt={`Grid image ${index + 1}`}
            className={cn(
              "shadow-lg rounded-lg w-full h-full aspect-video object-cover object-center",
              {
                "w-2/6 h-full": index % 3 == 0,
                "w-2/7 h-full": index % 4 == 0,
                "w-1/4 h-full": index % 5 == 0,
                "w-4/9 h-full": index % 2 == 0,
              }
            )}
            width={2400}
            height={900}
          />
        </div>
      ))}
    </div>
  );
}
