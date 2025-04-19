"use client";

import DynamicButton from "@/components/button/button-dynamic";
import CallToActionImage from "@/components/CTA/Split_Image";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { Card, CardContent } from "@/components/ui/card";
import { SubItem } from "@/lib/interfaces/services";
import { capitalize } from "@/lib/utils/format";
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
      {serviceData && (
        <>
          <main className="mx-auto py-6 w-10/12 md:w-11/12">
            <h1>{serviceName}</h1>
            {serviceData.info.intro.map((intro, index) => (
              <p key={index}>{intro}</p>
            ))}

            {serviceData.info.pricing.pricingTierIntro?.title && (
              <div className="mt-4">
                <h2>{serviceData.info.pricing.pricingTierIntro.title}</h2>
                <p>{serviceData.info.pricing.pricingTierIntro.description}</p>
              </div>
            )}

            <p>
              Note: Each of our packaged tiers is thoughtfully designed to
              deliver exactly what you need—without the burden of unnecessary
              features or costs. As each tier scales, additional services and
              value are added, ensuring you only pay for what benefits your
              business. Every plan is flexible and can be customized to suit
              your unique goals. If you don’t see a package that aligns
              perfectly with your needs, simply reach out—our team is ready to
              collaborate with you and create a solution tailored to your
              vision.
            </p>

            {serviceData.info.pricing.pricingTiers && (
              <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7">
                {serviceData.info.pricing.pricingTiers.map((prices, index) => {
                  const tierArray = prices.name.split(":");

                  return (
                    <Card key={index}>
                      <CardContent>
                        <h5>{tierArray[1]}</h5>
                        <h3>{tierArray[0]}</h3>
                        <p>{prices.info}</p>
                        <p>{prices.useCase}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            <h3>Do You Have Questions?</h3>
            <p>
              Whether you’re just starting your digital transformation journey
              or seeking to learn more about our process, our FAQs are here to
              help. Discover clear answers to your questions and gain the
              insights you need to make confident, informed decisions.
            </p>
            <p>
              Explore our FAQs to learn about our methodologies, capabilities,
              and how we help businesses like yours thrive in the digital era.
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

            {serviceData.details.map((info, index) => (
              <section key={index}>
                <h2>{info.title}</h2>
                {info.intro?.map((sentence, sIndex) => (
                  <p key={sIndex}>{sentence}</p>
                ))}

                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
                  {info.lists?.map((listInfo, listIndex) => (
                    <div key={listIndex}>
                      <h4>{listInfo.title}</h4>
                      <p>{listInfo.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </main>

          {serviceData.cta && <CallToActionImage cta={serviceData.cta} />}
        </>
      )}
    </>
  );
}
