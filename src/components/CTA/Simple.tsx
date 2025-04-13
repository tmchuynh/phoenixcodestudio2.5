import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function CallToAction() {
  const router = useRouter();
  return (
    <div className="">
      <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
        <h2>Ready to Bring Your Vision to Life?</h2>
        <p>
          Whether you're starting from scratch, refreshing your brand, or
          scaling to the next level, Phoenix Code Studio is here to help you
          rise above the noise. Our team is ready to collaborate, strategize,
          and create a digital experience that reflects your unique identity and
          drives real results.
        </p>
        <p>Let’s build something meaningful—together.</p>
        <div className="flex items-center gap-x-6 mt-10">
          <DynamicButton
            onClick={() => router.push("/get_in_touch/lets_work_together")}
          >
            Get started
          </DynamicButton>
        </div>
      </div>
    </div>
  );
}
