"use client";

import CallToAction from "@/components/CTA/Simple";
import LoadingIndicator from "@/components/states/loading/Loading";
import CannotFind from "@/components/states/not-found/CannotFind";
import { IconDisplay } from "@/lib/IconDisplay";
import { PaymentDetails } from "@/lib/interfaces/payments";
import useMediumScreen from "@/lib/screens/useMediumScreen";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentPlanPage() {
  const { plan } = useParams() as { plan: string };
  const isMediumScreen = useMediumScreen();
  const isSmallScreen = useSmallScreen();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentPlan, setPaymentPlan] = useState<PaymentDetails | null>(null);

  useEffect(() => {
    if (!plan) return;

    /**
     * Fetches the payment plan data from the server.
     *
     * This function sends a GET request to the `/api/services/payment-plans/${plan}` endpoint
     * to retrieve the payment plan details. If the request is successful, the payment plan data is
     * stored using the `setPaymentPlan` function. If the request fails, an error message is set using
     * the `setError` function. The loading state is set to false after a delay of 350 milliseconds.
     *
     * @throws {Error} If the response is not ok, an error with the message "Payment plan not found" is thrown.
     */
    async function fetchPaymentPlan() {
      try {
        const response = await fetch(`/api/services/payment-plans/${plan}`);
        if (!response.ok) {
          throw new Error("Payment plan not found");
        }
        const data = await response.json();
        setPaymentPlan(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }

    fetchPaymentPlan();
  }, [plan]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) return <CannotFind />;

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>
        {paymentPlan?.short && paymentPlan?.title && isMediumScreen
          ? paymentPlan?.short
          : paymentPlan?.title}
      </h1>
      <div>
        {isSmallScreen
          ? paymentPlan?.info.short
          : isMediumScreen
          ? paymentPlan?.info.description
          : paymentPlan?.info.intro.map((sentence, index) => {
              return <p key={index}>{sentence}</p>;
            })}
      </div>

      <div>
        <h2>Key Attributes</h2>
        {isMediumScreen ? (
          <ul className="gap-x-4 grid grid-cols-1 list-none">
            {paymentPlan?.details.map((features, index) => (
              <li className="flex text-wrap" key={index}>
                <IconDisplay Icon={paymentPlan?.Icon} />

                <span className="pl-3">
                  <strong>{features.title}: </strong>
                  {features.description}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-none">
            {paymentPlan?.info.features.map((features, index) => (
              <li className="flex gap-x-3" key={index}>
                <IconDisplay Icon={paymentPlan?.Icon} />

                {features}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>The Process Overview</h2>
        <p>{paymentPlan?.explanation}</p>

        {paymentPlan?.details.map((detail, index) => (
          <div className="pb-3" key={index}>
            <h3>{detail.title}</h3>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>

      <CallToAction />
    </main>
  );
}
