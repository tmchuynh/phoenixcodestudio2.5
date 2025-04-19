"use client";
import DynamicButton from "@/components/button/button-dynamic";
import PaymentPlans from "@/components/cards/PaymentPlanCard";
import Incentives from "@/components/page_spliter/Incentives";
import LoadingIndicator from "@/components/states/loading/Loading";
import { paymentPlans } from "@/lib/constants/services/paymentPlans";
import useMediumScreen from "@/lib/screens/useMediumScreen";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const PaymentPlansPage: FC = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isMediumScreen = useMediumScreen();
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

  return (
    <main className="mx-auto py-6 md:py-10 lg:py-14 2xl:py-20 w-10/12 md:w-11/12">
      <Incentives />
      <header className="pt-10 lg:pt-16 2xl:pt-20">
        <h4>Empowering your vision—without the financial strain</h4>
        <h1>Flexible Pricing Plans to Fit Your Needs</h1>
        <p className="mt-4">
          We offer customizable pricing options designed to accommodate
          businesses of all sizes and budgets. Whether you need a basic package
          for a smaller project or a comprehensive solution for a large-scale
          initiative, our pricing tiers ensure exceptional value, flexibility,
          and scalability.
        </p>
        <p>
          Each plan is structured to align with your specific goals, offering
          transparent pricing, high-quality service, and no hidden fees. Explore
          our options and choose the plan that best suits your needs. Need a
          custom quote?{" "}
          <DynamicButton
            variant={"link"}
            onClick={() => router.push("/get_in_touch")}
            className="m-0 p-0 h-fit"
          >
            Contact us to discuss a tailored solution!
          </DynamicButton>
        </p>
      </header>

      {/* Displaying each plan in a vertical layout similar to blogs */}
      <section className="">
        {paymentPlans.map((plan, index) => (
          <PaymentPlans plan={plan} index={index} key={index} />
        ))}
      </section>
    </main>
  );
};

export default PaymentPlansPage;
