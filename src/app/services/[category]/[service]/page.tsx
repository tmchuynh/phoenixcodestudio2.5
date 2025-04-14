"use client";

import DynamicButton from "@/components/button/button-dynamic";
import CallToActionImage from "@/components/CTA/Split_Image";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubItem } from "@/lib/interfaces/services";
import { capitalize } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const router = useRouter();

  const { category, service } = useParams() as {
    category: string;
    service: string;
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serviceData, setServiceData] = useState<SubItem | null>(null);
  const [serviceName, setServiceName] = useState<string | null>(null);

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
        setServiceName(capitalize(data.name));
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
    <>
      <main className="mx-auto py-6 w-10/12 md:w-11/12">
        <h1>{serviceName}</h1>
        <p className="mb-4">{serviceData?.info.short}</p>

        {serviceData?.info.pricing.pricingTierIntro?.title && (
          <div className="mt-4">
            <h2>{serviceData.info.pricing.pricingTierIntro.title}</h2>
            <p>{serviceData.info.pricing.pricingTierIntro.description}</p>
          </div>
        )}

        <h2>Do You Have Questions?</h2>
        <p>
          Whether you’re just starting your digital transformation journey or
          seeking to learn more about our process, our FAQs are here to help.
          Discover clear answers to your questions and gain the insights you
          need to make confident, informed decisions.
        </p>
        <p>
          Explore our FAQs to learn about our methodologies, capabilities, and
          how we help businesses like yours thrive in the digital era.
        </p>
        <DynamicButton
          variant={"secondaryOutline"}
          className="mx-0 w-1/3"
          onClick={() =>
            router.push("/get_in_touch/frequently_asked_questions")
          }
        >
          Visit The FAQs
        </DynamicButton>

        {serviceData?.info.pricing.pricingTiers && (
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7">
            {serviceData.info.pricing.pricingTiers.map((prices, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={"https://placehold.co/600x400"}
                    alt={prices.name}
                    width={800}
                    height={600}
                    className="rounded object-cover object-center"
                  />
                  <CardTitle>
                    <h3 className="py-3">{prices.name}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{prices.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      {serviceData?.cta && <CallToActionImage cta={serviceData.cta} />}
    </>
  );
}
