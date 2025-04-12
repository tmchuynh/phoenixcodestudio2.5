"use client";

import { SubItem } from "@/lib/interfaces/services";
import { capitalize, setSlug } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function SummaryCard({ item }: { item: SubItem }) {
  const router = useRouter();

  /**
   * Navigates to the details page of a specific service.`
   *
   * @param {string} serviceName - The name of the service to navigate to.
   */
  const navigateToDetails = (serviceName: string) => {
    const formattedServiceName = setSlug(serviceName);

    router.push(`/services/${item.category}/${formattedServiceName}`);
  };

  return (
    <div className="shadow hover:shadow-lg p-6 border rounded-lg transition-all">
      {/* Category (if available) */}
      {item.category && (
        <div className="mb-2 text-sm">{capitalize(item.category)}</div>
      )}

      {/* Header: optional icon and title */}
      <div className="flex items-center mb-4">
        {item.Icon && (
          // <Image
          //   src={item.info.Icon}
          //   alt={`${ item.name } icon`}
          //   className="mr-3 w-8 h-8"
          //   width={32}
          //   height={32}
          // />

          <Image
            src={"https://placehold.co/400"}
            alt={`${item.name} icon`}
            className="mr-3 w-8 h-8"
            width={32}
            height={32}
          />
        )}
        <h3 className="font-bold text-2xl">{capitalize(item.name)}</h3>
      </div>

      {/* Item title from the detailed information (if available) */}
      {item.title && <p className="mb-2 text-lg">{item.title}</p>}

      {/* Short description as the summary content; fall back to full description */}
      <p className="mb-4">{item.short}</p>

      {/* Starting price, if available */}
      {item.startingPrice !== undefined && (
        <div className="mb-4">
          <span className="font-semibold text-xl">${item.startingPrice}</span>
        </div>
      )}

      {/* Call-to-Action button */}
      {item.cta && (
        <Button onClick={() => navigateToDetails(item.name)}>Learn More</Button>
      )}
    </div>
  );
}
