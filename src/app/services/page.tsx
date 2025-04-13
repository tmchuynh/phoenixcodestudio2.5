"use client";
import DynamicButton from "@/components/button/button-dynamic";
import FeaturedLargeTestimonial from "@/components/cards/testimonial/Large_Avatar";
import IncentivesImage from "@/components/headers/page_headers/IncentivesImage";
import ContactInfoSpliter from "@/components/page_spliter/ContactInfo";
import LoadingIndicator from "@/components/states/loading/Loading";
import { Card, CardContent } from "@/components/ui/card";
import { allServices } from "@/lib/constants/services/serviceCategories";
import { subServiceDetails } from "@/lib/constants/services/subServices";
import { testimonials } from "@/lib/constants/testimonials";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { capitalize, generateSlug } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  if (loading) {
    return <LoadingIndicator />;
  }

  /**
   * Navigates to the specified service category page.
   *
   * @param {string} serviceCategory - The name of the service category to navigate to.
   */
  const navigateToCategory = (serviceCategory: string, service: string) => {
    const formattedCategoryName = generateSlug(serviceCategory);
    const formattedServiceName = generateSlug(service);

    router.push(`/services/${formattedCategoryName}/${formattedServiceName}`);
  };

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <IncentivesImage />

      <FeaturedLargeTestimonial testimonial={testimonials[0]} />

      {/* Company Services Section */}
      {allServices.map((category, index) => (
        <div key={index} className="my-20">
          <h1>{capitalize(category.name)}</h1>
          <div className="my-4">
            {category.description.map((desc, descIndex) => (
              <p key={descIndex} className="max-w-6xl">
                {desc}
              </p>
            ))}
            <DynamicButton
              className="mx-0 w-1/3"
              onClick={() => router.push("/get_in_touch")}
            >
              Contact Us Today!
            </DynamicButton>
          </div>
          <div className="gap-4 lg:gap-6 grid grid-cols-1 lg:grid-cols-2">
            {category.sub.map((subService, subIndex) => {
              const subServiceDetail = subServiceDetails.find(
                (item) => item.name === subService
              );

              if (subServiceDetail) {
                return (
                  <Card
                    key={subIndex}
                    className="flex flex-col justify-between shadow-md"
                  >
                    <CardContent className="flex flex-col">
                      <h3
                        className="font-semibold text-lg underline-offset-4 hover:underline cursor-pointer"
                        onClick={() =>
                          navigateToCategory(
                            category.name,
                            subServiceDetail.name
                          )
                        }
                      >
                        {capitalize(subServiceDetail.name)}
                      </h3>

                      {isSmallScreen ? (
                        <p>{subServiceDetail.info.short}</p>
                      ) : (
                        <>
                          {subServiceDetail.info.intro.map(
                            (info: string, infoIndex: number) => (
                              <p key={infoIndex}>{info}</p>
                            )
                          )}
                        </>
                      )}
                    </CardContent>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      ))}

      <ContactInfoSpliter />
    </main>
  );
};

export default ServicesPage;
