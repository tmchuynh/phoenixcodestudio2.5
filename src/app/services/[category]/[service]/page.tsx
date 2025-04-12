"use client";

import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { Button } from "@/components/ui/button";
import { SubItem } from "@/lib/interfaces/services";
import useMediumScreen from "@/lib/screens/useMediumScreen";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const router = useRouter();

  const { category, service } = useParams() as {
    category: string;
    service: string;
  };

  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serviceData, setServiceData] = useState<SubItem | null>(null);

  useEffect(() => {
    if (!category || !service) return;

    /**
     * Fetches service data from the API based on the provided category and service.
     *
     * @async
     * @function fetchServices
     * @throws {Error} Throws an error if the service post is not found.
     * @returns {Promise<void>} A promise that resolves when the service data is fetched and state is updated.
     */
    async function fetchServices(): Promise<void> {
      try {
        const response = await fetch(`/api/services/${category}/${service}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }

        const data: SubItem = await response.json();
        setServiceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }

    fetchServices();
  }, [category, service]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>{serviceData?.name}</h1>
      <p className="mb-4">{serviceData?.short}</p>

      {serviceData?.pricingTiers && (
        <div className="mt-4">
          <ul>
            {serviceData.pricingTiers.map((prices, index) => (
              <li key={index}>
                <div>
                  <strong>{prices.name}:</strong> {prices.info}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2>{serviceData?.cta.title}</h2>
        <p>{serviceData?.cta.intro && serviceData?.cta.intro}</p>
        <p>
          {serviceData?.cta.text && serviceData?.cta.text}{" "}
          {serviceData?.cta.afterButtonText && serviceData?.cta.afterButtonText}
        </p>

        <Button className="my-3" onClick={() => router.push("/contact-us")}>
          {serviceData?.cta.button}
        </Button>
      </div>
    </main>
  );
}
