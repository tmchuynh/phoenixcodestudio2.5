"use client";

import { Category } from "@/lib/interfaces/services";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { capitalize, generateSlug } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function ServiceDetails({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = generateSlug(serviceCategory);
    router.push(`/services/${formattedCategoryName}`);
  };

  return (
    <div className="py-4">
      <div
        className="shadow hover:shadow-lg p-6 border rounded-lg transition-all"
        key={index}
      >
        {/* Category (if available) */}
        {category.name && <h4>{capitalize(category.name)}</h4>}

        {isSmallScreen ? (
          <p className="mb-4">{category.short}</p>
        ) : (
          <>
            {category.description.map((info: string, infoIndex: number) => (
              <p className="mb-2" key={infoIndex}>
                {info}
              </p>
            ))}
          </>
        )}
      </div>

      <div className="md:gap-10 grid grid-cols-1 md:grid-cols-2">
        <DynamicButton
          className="mt-6 w-full self-start"
          variant={"outline"}
          onClick={() => navigateToCategory(category.name)}
        >
          View More Details
        </DynamicButton>
      </div>
    </div>
  );
}
