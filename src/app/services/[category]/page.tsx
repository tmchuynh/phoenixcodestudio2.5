"use client";
import DynamicButton from "@/components/button/button-dynamic";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { subServiceDetails } from "@/lib/constants/services/subServices";
import { Category } from "@/lib/interfaces/services";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { capitalize, generateSlug } from "@/lib/utils/format";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };
  const isSmallScreen = useSmallScreen();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<Category | null>(null);

  useEffect(() => {
    if (!category) return;

    /**
     * Fetches services data from the API based on the provided category.
     *
     * @async
     * @function fetchServices
     * @throws {Error} If the response is not ok or the services post is not found.
     * @returns {Promise<void>} A promise that resolves when the data is fetched and state is updated.
     */
    async function fetchServices(): Promise<void> {
      try {
        const response = await fetch(`/api/services/${category}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }

    fetchServices();
  }, [category]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  /**
   * Navigates to the details page of a specific service.
   *
   * @param {string} serviceName - The name of the service to navigate to.
   */
  const navigateToDetails = (serviceName: string) => {
    const formattedServiceName = generateSlug(serviceName);

    router.push(`/services/${category}/${formattedServiceName}`);
  };

  return (
    <>
      {service && (
        <main className="mx-auto py-6 w-10/12 md:w-11/12">
          <h1>{service?.name && capitalize(service?.name)}</h1>
          <p>{service?.description}</p>

          <div className="gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 py-6 lg:py-10">
            {service.sub.map((subService, subIndex) => {
              const subServiceDetail = subServiceDetails.find(
                (item) => item.name === subService,
              );

              if (subServiceDetail) {
                return (
                  <Link
                    href={`/services/${category}/${generateSlug(
                      subServiceDetail.name,
                    )}`}
                    key={subIndex}
                    className="group"
                  >
                    <Card className="flex flex-col justify-between shadow-md px-5 py-10 h-full">
                      <CardHeader>
                        <h5>{subServiceDetail.info.hook}</h5>

                        <h3 className="underline-offset-4 group-hover:underline decoration-2">
                          {capitalize(subServiceDetail.name)}
                        </h3>
                        <p>{subServiceDetail.info.short}</p>
                      </CardHeader>
                      <CardContent className="h-full">
                        <ul className="space-y-4 mx-8 list-disc list-outside">
                          {subServiceDetail.info.pricing.pricingTiers.map(
                            (tier, tierIndex) => (
                              <li key={tierIndex}>
                                <strong>{tier.name.split(":")[0]}: </strong>
                                {tier.description}
                              </li>
                            ),
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-6">
                        <DynamicButton className="mx-0 place-self-start">
                          More Information
                        </DynamicButton>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </main>
      )}
    </>
  );
}
