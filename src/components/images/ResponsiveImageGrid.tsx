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
    <div
      className="gap-4 grid p-4"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {displayedImages.map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt={`Grid image ${index + 1}`}
            className="rounded-md w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
