"use client";

import { SubItem } from "@/lib/interfaces/services";
import { capitalize, generateSlug } from "@/lib/utils";
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
    const formattedServiceName = generateSlug(serviceName);

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
        <h3 className="font-bold text-2xl">{capitalize(item.name)}</h3>
      </div>

      {/* Item title from the detailed information (if available) */}
      {item.info.title && <p className="mb-2 text-lg">{item.info.title}</p>}

      {/* Short description as the summary content; fall back to full description */}
      <p className="mb-4">{item.info.short}</p>

      {/* Starting price, if available */}
      {item.info.startingPrice !== undefined && (
        <div className="mb-4">
          <span className="font-semibold text-xl">
            ${item.info.startingPrice}
          </span>
        </div>
      )}

      {/* Call-to-Action button */}
      {item.cta && (
        <Button onClick={() => navigateToDetails(item.info.name)}>
          Learn More
        </Button>
      )}
    </div>
  );
}
