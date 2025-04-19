import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";

export default function CallToAction() {
  const router = useRouter();
  return (
    <div className="mx-auto py-24 sm:py-32 w-11/12 max-w-7xl">
      <h2> Ready to Turn Your Vision into Reality?</h2>
      <p>
        Whether you’re starting fresh, redefining your brand, or scaling to new
        heights, Phoenix Code Studio is here to help you stand out. Let’s
        collaborate to create a digital experience that reflects your unique
        identity and delivers real results.
      </p>
      <p>Together, we can build something extraordinary.</p>
      <div className="flex items-center gap-x-6 mt-5">
        <DynamicButton
          className="mx-0 w-1/2"
          onClick={() => router.push("/get_in_touch/lets_work_together")}
        >
          Start Today!
        </DynamicButton>
      </div>
    </div>
  );
}
