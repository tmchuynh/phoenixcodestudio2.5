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
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Fa500Px } from "react-icons/fa";

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

      <section>
        <h1>Industries We Serve</h1>
        <p>
          From e-commerce startups to educational institutions and healthcare
          brands, our solutions are built for measurable growth. Our SEO
          strategies, design systems, and data-driven development processes are
          tailored to increase visibility, drive traffic, and enhance engagement
          across every industry we serve.
        </p>

        <h2>Let’s Rise Together</h2>
        <p>
          Phoenix Code Studio is where ideas come to life, where problems become
          possibilities, and where brands grow boldly in the digital world.
          We’re not just your design and development team—we’re your strategic
          partner, committed to making sure your digital presence works hard,
          speaks loud, and leaves a lasting mark.
        </p>

        <section className="gap-7 grid grid-cols-1 lg:grid-cols-2 mt-7">
          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>
                Drive Conversions Through Seamless, Scalable Digital Stores
              </h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                E-commerce
              </h3>
              <p>
                From product discovery to checkout, we design e-commerce
                experiences that captivate and convert. Our solutions prioritize
                speed, security, and mobile optimization—empowering online
                retailers with custom platforms that scale effortlessly, engage
                audiences, and turn visitors into loyal customers. Whether
                launching a new store or optimizing an existing one, we build
                with growth, clarity, and user experience at the forefront.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>
                Human-Centered Digital Solutions for a Compassionate Industry
              </h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                Healthcare
              </h3>
              <p>
                We create HIPAA-compliant, accessible, and intuitive digital
                platforms that connect patients with care. From medical
                practices to health-tech startups, our healthcare solutions are
                designed to simplify experiences, enhance trust, and ensure
                clarity at every interaction. By blending empathy with
                performance, we deliver websites and tools that support
                providers and improve outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>
                Empowering Learning With Intuitive, Accessible Digital Platforms
              </h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                Education
              </h3>
              <p>
                From K–12 to continuing education, we build digital experiences
                that inform, engage, and inspire. Our education solutions are
                rooted in usability, accessibility, and scalability—supporting
                both learners and educators with tools that adapt to evolving
                needs. Whether developing a student portal, LMS integration, or
                a compelling institutional website, we bring clarity and
                innovation to the learning journey.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>
                Elevating Innovation With Future-Ready Digital Experiences
              </h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                Technology
              </h3>
              <p>
                Tech moves fast—and so do we. We build robust, scalable digital
                solutions that help tech companies communicate complex ideas,
                attract users, and scale with confidence. From SaaS platforms to
                developer-focused brands, we craft tailored, technically sound
                experiences that balance performance with design, showcasing
                your innovation with precision and purpose.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>
                Positioning Experts With Authority, Clarity, and Credibility
              </h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                Professional Services
              </h3>
              <p>
                For consultants, agencies, and service-based firms, we develop
                websites that showcase expertise, build trust, and drive
                conversion. Our solutions highlight your unique value through
                compelling storytelling, thoughtful design, and strategic
                UX—ensuring your services are clearly understood and confidently
                chosen. From brand positioning to lead generation, we help you
                stand out and scale.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col gap-4 lg:gap-6">
            <CardContent className="flex flex-col">
              <h5>Amplifying Impact Through Purpose-Driven Digital Strategy</h5>
              <h3 className="font-semibold text-lg underline-offset-4 cursor-pointer">
                Nonprofits and Community Brands
              </h3>
              <p>
                Your mission matters—and we help you share it. We create digital
                platforms that inspire action, engage communities, and drive
                meaningful change. With a focus on storytelling, accessibility,
                and donation optimization, our nonprofit solutions are designed
                to support your goals and scale your impact. We partner with
                values-driven organizations to build tools that reflect your
                vision and empower your work.
              </p>
            </CardContent>
          </Card>
        </section>
      </section>

      <section className="my-20">
        <h1>Our Approach</h1>
        <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-2 mt-16">
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <Fa500Px />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Strategy-First</h4>
              <p className="mt-2 text-sm">
                Every project begins with deep discovery—rooted in research,
                data analysis, and a clear understanding of your business,
                industry, and audience. We don’t just ask what you want—we ask
                why it matters. This strategic foundation informs every design
                and development decision that follows, ensuring your digital
                presence aligns with your goals, differentiates you from the
                competition, and positions your brand for long-term growth. We
                treat strategy not as a phase, but as a continuous thread from
                kickoff to launch and beyond.
              </p>
            </div>
          </div>

          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <Fa500Px />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Human-Centered Design</h4>
              <p className="mt-2 text-sm">
                People are at the heart of everything we build. Our design
                process starts by understanding your users—their behaviors,
                needs, challenges, and preferences. We combine accessibility
                best practices, empathetic UX principles, and inclusive
                interaction patterns to ensure every touchpoint is intuitive,
                usable, and welcoming to all. This user-first approach results
                in digital experiences that feel natural, reduce friction, and
                forge meaningful connections between your brand and your
                audience.
              </p>
            </div>
          </div>

          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <Fa500Px />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Purposeful Innovation</h4>
              <p className="mt-2 text-sm">
                We approach innovation with intention, not impulse. From
                interactive SPAs to API-integrated platforms, we explore and
                implement technologies that solve real-world problems, not just
                follow trends. Whether it’s optimizing performance with modern
                frameworks or enhancing engagement with personalized content
                delivery, every innovation we apply is grounded in utility,
                scalability, and strategic value. We believe technology should
                simplify, empower, and elevate—and that’s the standard we build
                toward.
              </p>
            </div>
          </div>

          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <Fa500Px />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>End-to-End Collaboration</h4>
              <p className="mt-2 text-sm">
                We’re more than a vendor—we’re a committed digital partner. From
                day one, we immerse ourselves in your vision and work alongside
                you through each milestone, iteration, and breakthrough. Our
                process is transparent, communicative, and collaborative, built
                on mutual trust and shared ambition. Post-launch, we remain
                engaged with proactive support, performance monitoring, and
                growth guidance to ensure your solution evolves with your goals.
                Your success is our success, and we’re invested in both.
              </p>
            </div>
          </div>
        </section>
      </section>

      <FeaturedLargeTestimonial testimonial={testimonials[0]} />

      {/* Company Services Section */}
      {allServices.map((category, index) => (
        <div key={index} className="my-20">
          <h4>{category.subtitle}</h4>
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
          <div className="gap-4 lg:gap-6 grid grid-cols-1 lg:grid-cols-2">
            {category.sub.map((subService, subIndex) => {
              const subServiceDetail = subServiceDetails.find(
                (item) => item.name === subService
              );

              if (subServiceDetail) {
                return (
                  <Link
                    href={`/services/${generateSlug(
                      category.name
                    )}/${generateSlug(subServiceDetail.name)}`}
                    key={subIndex}
                    className="group"
                  >
                    <Card className="flex flex-col justify-between shadow-md h-full">
                      <CardContent className="flex flex-col">
                        <h5>{subServiceDetail.subtitle}</h5>
                        <h5></h5>
                        <h3
                          className="font-semibold text-lg underline-offset-4 group-hover:underline cursor-pointer"
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
                          <p className="w-11/12 text-pretty">
                            {subServiceDetail.info.details}
                          </p>
                        )}
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
