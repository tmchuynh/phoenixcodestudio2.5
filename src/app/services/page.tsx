"use client";
import DynamicButton from "@/components/button/button-dynamic";
import FeaturedLargeTestimonial from "@/components/cards/testimonial/Large_Avatar";
import IncentivesImage from "@/components/headers/page_headers/IncentivesImage";
import LoadingIndicator from "@/components/states/loading/Loading";
import { Card, CardContent } from "@/components/ui/card";
import { allServices } from "@/lib/constants/services/serviceCategories";
import { subServiceDetails } from "@/lib/constants/services/subServices";
import { testimonials } from "@/lib/constants/testimonials";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { capitalize, generateSlug } from "@/lib/utils/format";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

import Approach from "./approach";

const ServicesPage: FC = () => {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();
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

      <section>
        <h4>Let’s Rise Together</h4>
        <h1>Industries We Serve</h1>
        <p>
          From e-commerce startups to educational institutions and healthcare
          brands, our solutions are built for measurable growth. Our SEO
          strategies, design systems, and data-driven development processes are
          tailored to increase visibility, drive traffic, and enhance engagement
          across every industry we serve.
        </p>

        <p>
          Phoenix Code Studio is where ideas come to life, where problems become
          possibilities, and where brands grow boldly in the digital world.
          We’re not just your design and development team—we’re your strategic
          partner, committed to making sure your digital presence works hard,
          speaks loud, and leaves a lasting mark.
        </p>

        <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] mt-7">
          {/* E-commerce - Large featured card */}
          <Card className="flex flex-col justify-between md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-800/20 shadow-lg hover:shadow-xl border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6 lg:p-8">
              <h5 className="mb-3 font-medium text-blue-600 text-sm dark:text-blue-400">
                Drive Conversions Through Seamless, Scalable Digital Stores
              </h5>
              <h3 className="mb-4 font-bold text-2xl text-blue-900 lg:text-3xl hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-100 transition-colors cursor-pointer">
                E-commerce
              </h3>
              <p className="text-gray-700 text-lg dark:text-gray-300 leading-relaxed">
                From product discovery to checkout, we design e-commerce
                experiences that captivate and convert. Our solutions prioritize
                speed, security, and mobile optimization—empowering online
                retailers with custom platforms that scale effortlessly, engage
                audiences, and turn visitors into loyal customers. Whether
                launching a new store or optimizing an existing one, we build
                with growth, clarity, and user experience at the forefront.
              </p>
              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-1"></div>
              </div>
            </CardContent>
          </Card>

          {/* Healthcare */}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-green-50 dark:from-green-900/20 to-emerald-100 dark:to-emerald-800/20 shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6">
              <h5 className="mb-2 font-medium text-green-600 text-sm dark:text-green-400">
                Human-Centered Digital Solutions for a Compassionate Industry
              </h5>
              <h3 className="mb-3 font-bold text-green-900 text-xl hover:text-green-700 dark:hover:text-green-300 dark:text-green-100 transition-colors cursor-pointer">
                Healthcare
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                We create HIPAA-compliant, accessible, and intuitive digital
                platforms that connect patients with care.
              </p>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-8 h-1"></div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-violet-100 dark:to-violet-800/20 shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6">
              <h5 className="mb-2 font-medium text-purple-600 text-sm dark:text-purple-400">
                Empowering Learning With Intuitive, Accessible Digital Platforms
              </h5>
              <h3 className="mb-3 font-bold text-purple-900 text-xl hover:text-purple-700 dark:hover:text-purple-300 dark:text-purple-100 transition-colors cursor-pointer">
                Education
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                From K–12 to continuing education, we build digital experiences
                that inform, engage, and inspire.
              </p>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-full w-8 h-1"></div>
              </div>
            </CardContent>
          </Card>

          {/* Technology */}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-amber-100 dark:to-amber-800/20 shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6">
              <h5 className="mb-2 font-medium text-orange-600 text-sm dark:text-orange-400">
                Elevating Innovation With Future-Ready Digital Experiences
              </h5>
              <h3 className="mb-3 font-bold text-orange-900 text-xl hover:text-orange-700 dark:hover:text-orange-300 dark:text-orange-100 transition-colors cursor-pointer">
                Technology
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                Tech moves fast—and so do we. We build robust, scalable digital
                solutions that help tech companies communicate complex ideas.
              </p>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full w-8 h-1"></div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Services - Medium featured card */}
          <Card className="flex flex-col justify-between md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-50 dark:from-indigo-900/20 to-blue-100 dark:to-blue-800/20 shadow-lg hover:shadow-xl border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6 lg:p-8">
              <h5 className="mb-3 font-medium text-indigo-600 text-sm dark:text-indigo-400">
                Positioning Experts With Authority, Clarity, and Credibility
              </h5>
              <h3 className="mb-4 font-bold text-2xl text-indigo-900 lg:text-3xl hover:text-indigo-700 dark:hover:text-indigo-300 dark:text-indigo-100 transition-colors cursor-pointer">
                Professional Services
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For consultants, agencies, and service-based firms, we develop
                websites that showcase expertise, build trust, and drive
                conversion. Our solutions highlight your unique value through
                compelling storytelling, thoughtful design, and strategic
                UX—ensuring your services are clearly understood and confidently
                chosen.
              </p>
              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full w-12 h-1"></div>
              </div>
            </CardContent>
          </Card>

          {/* Nonprofits */}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-pink-50 dark:from-pink-900/20 to-rose-100 dark:to-rose-800/20 shadow-md hover:shadow-lg border-0 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="flex flex-col p-6">
              <h5 className="mb-2 font-medium text-pink-600 text-sm dark:text-pink-400">
                Amplifying Impact Through Purpose-Driven Digital Strategy
              </h5>
              <h3 className="mb-3 font-bold text-pink-900 text-xl hover:text-pink-700 dark:hover:text-pink-300 dark:text-pink-100 transition-colors cursor-pointer">
                Nonprofits & Community Brands
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                Your mission matters—and we help you share it. We create digital
                platforms that inspire action, engage communities.
              </p>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-8 h-1"></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>

      <Approach />

      <FeaturedLargeTestimonial testimonial={testimonials[0]} />

      {/* Company Services Section */}
      {allServices.map((category, index) => (
        <div key={index} className="my-20">
          <h3>{category.subtitle}</h3>
          <h1>{capitalize(category.name)}</h1>
          <div className="my-4">
            {category.description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
            <DynamicButton
              variant={"accentOutline"}
              className="mx-0 lg:w-1/3"
              onClick={() => router.push("/get_in_touch")}
            >
              FREE Consultation
            </DynamicButton>
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)]">
            {category.sub.map((subService, subIndex) => {
              const subServiceDetail = subServiceDetails.find(
                (item) => item.name === subService
              );

              if (subServiceDetail) {
                // Create dynamic grid spans for bento layout
                const getGridSpan = (index: number, totalItems: number) => {
                  const patterns = [
                    "md:col-span-2 lg:col-span-2", // First item spans 2 columns
                    "md:col-span-1 lg:col-span-1", // Second item normal
                    "md:col-span-1 lg:col-span-1", // Third item normal
                    "md:col-span-1 lg:col-span-1", // Fourth item normal
                    "md:col-span-2 lg:col-span-2", // Fifth item spans 2 columns
                    "md:col-span-1 lg:col-span-1", // Sixth item normal
                  ];
                  return (
                    patterns[index % patterns.length] ||
                    "md:col-span-1 lg:col-span-1"
                  );
                };

                const getRowSpan = (index: number) => {
                  // Alternate between normal and tall items
                  const tallIndices = [0, 4]; // First and fifth items are taller
                  return tallIndices.includes(index % 6)
                    ? "row-span-2"
                    : "row-span-1";
                };

                return (
                  <Link
                    href={`/services/${generateSlug(
                      category.name
                    )}/${generateSlug(subServiceDetail.name)}`}
                    key={subIndex}
                    className={`group ${getGridSpan(subIndex, category.sub.length)} ${getRowSpan(subIndex)}`}
                  >
                    <Card className="flex flex-col justify-between bg-gradient-to-br from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 shadow-md hover:shadow-lg border-0 h-full transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="flex flex-col p-6 lg:p-8">
                        <h5 className="mb-2 font-medium text-gray-600 text-sm dark:text-gray-400">
                          {subServiceDetail.subtitle}
                        </h5>
                        <h3
                          className="mb-4 font-bold text-xl lg:text-2xl dark:group-hover:text-blue-400 group-hover:text-blue-600 underline-offset-4 group-hover:underline transition-colors duration-300 cursor-pointer"
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
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {subServiceDetail.info.short}
                          </p>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {subServiceDetail.info.details}
                          </p>
                        )}

                        <div className="mt-auto pt-4">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 rounded-full w-8 h-1 transition-opacity duration-300"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ))}
    </main>
  );
};

export default ServicesPage;
