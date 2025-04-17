import { paymentPlans } from "@/lib/constants/services/paymentPlans";
import { PaymentDetails } from "@/lib/interfaces/payments";
import useMediumScreen from "@/lib/screens/useMediumScreen";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";
import { cn } from "@/lib/utils";
import { generateSlug } from "@/lib/utils/format";

export default function PaymentPlans({
  plan,
  index,
}: {
  plan: PaymentDetails;
  index: number;
}) {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const { theme } = useTheme();
  const router = useRouter();

  /**
   * Navigates to the specified payment plan page.
   *
   * @param {string} plan - The name of the payment plan to navigate to.
   */
  const navigateToPlan = (plan: string) => {
    const formattedPlanName = generateSlug(plan);

    router.push(`/services/payment_plans/${formattedPlanName}`);
  };

  return (
    <div key={index}>
      <div
        className={cn(
          "flex flex-col justify-between relative",
          index !== paymentPlans.length - 1 ? "pb-10" : ""
        )}
      >
        <div>
          {/* Plan Title */}
          <div className="flex items-center space-x-2 h-full">
            <plan.icon className="-mb-5 h-full size-10" />
            <h2>{isMediumScreen ? plan.short : plan.title}</h2>
          </div>

          {/* Plan Description */}
          <div className="py-2">
            {isSmallScreen
              ? plan.info.intro.map((sentence, index) => {
                  return <p key={index}>{sentence}</p>;
                })
              : isMediumScreen
              ? plan.explanation
              : plan.info.description}
          </div>
        </div>

        {/* Plan Details */}
        <div>
          <h3>Key Attributes</h3>
          <ul className="space-y-2 ml-3 py-1 list-disc list-inside">
            {plan.details.map((features, index) => (
              <li className="flex items-center space-y-0" key={index}>
                <strong>{features.title}: </strong>
                {features.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Button */}
        <DynamicButton
          variant="secondaryOutline"
          className="mx-0 self-end"
          onClick={() => {
            navigateToPlan(plan.name);
          }}
        >
          More Information
        </DynamicButton>
      </div>
    </div>
  );
}
