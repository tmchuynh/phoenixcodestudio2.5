"use client";
import CallToAction from "@/components/CTA/Simple";
import LoadingIndicator from "@/components/states/loading/Loading";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/constants/services/service-categories";
import { subServiceDetails } from "@/lib/constants/services/sub-services";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { formatName, setSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const PricingPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isSmallScreen = useSmallScreen();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 350);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Navigates to the specified service category page.
   *
   * @param {string} serviceCategory - The name of the service category to navigate to.
   */
  const navigateToCategory = (serviceCategory: string) => {
    const formattedCategoryName = setSlug(serviceCategory);

    router.push(`/services/${formattedCategoryName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>Our Pricing and Service Tiers</h1>
      <p>
        Explore our flexible pricing options designed to suit a variety of needs
        and budgets. Whether you're looking for a basic package or a
        comprehensive solution, we offer service tiers that provide exceptional
        value and scalability. Choose the plan that aligns with your goals, and
        let us help you achieve success with tailored, high-quality services.
      </p>

      <section className="my-8">
        <CallToAction />
      </section>

      {/* Service 1: Website Services */}
      {allServices.map((service, index) => (
        <section className="my-8" key={index}>
          <div className="flex flex-col pb-3">
            <h2>{service.short}</h2>
            {service.description.map((info, SIndex) => (
              <p key={SIndex}>{info}</p>
            ))}
            <Button
              className="w-1/4 self-end"
              variant={theme === "dark" ? "outline" : "accent"}
              size={isSmallScreen ? "sm" : "default"}
              onClick={() => navigateToCategory(service.name)}
            >
              View More Details
            </Button>
          </div>

          {service.sub.map((subService, subIndex) => {
            const subServiceDetail = subServiceDetails.find(
              (item) => item.name === subService
            );

            if (subServiceDetail && subServiceDetail.pricingTiers) {
              return (
                <div key={subIndex}>
                  <h3>Pricing for {formatName(subServiceDetail.name)}</h3>
                  <ul>
                    {subServiceDetail.pricingTiers.map(
                      (pricing, pricingIndex) => (
                        <li key={pricingIndex}>
                          <strong>{pricing.name}: </strong>
                          {pricing.info}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </section>
      ))}
    </main>
  );
};

export default PricingPage;
