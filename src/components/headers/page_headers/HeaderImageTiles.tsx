import DynamicButton from "@/components/button/button-dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderImageTiles() {
  const router = useRouter();
  return (
    <div className="py-32 overflow-hidden">
      <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
          <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
            <h4>Phoenix Code Studio</h4>
            <h1>Our Goal</h1>
            <div>
              <p className="mt-6 text-lg/relaxed">
                Your vision is more than just an idea—it’s the foundation of
                something extraordinary. At Phoenix Code Studio, we merge
                strategic creativity, innovative technology, and cutting-edge
                design to craft transformative digital experiences that don’t
                just exist—they thrive. Whether you’re launching a brand,
                redefining your online presence, or creating a revolutionary
                digital platform, we bring your aspirations to life with custom,
                results-driven solutions.
              </p>
            </div>
            <div className="flex mt-10">
              <DynamicButton
                className="mx-0 w-2/3"
                onClick={() => router.push("/services")}
              >
                View Our Comprehensive Services
              </DynamicButton>
            </div>
          </div>
          <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
              <Image
                alt=""
                src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="object-bottom rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
              <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                <Image
                  alt=""
                  src="https://img.freepik.com/free-photo/man-using-digital-tablet-holding-stylus-pen-working-office_169016-47360.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                  className="flex-none rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                <Image
                  alt=""
                  src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                  className="flex-none rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                <Image
                  alt=""
                  src="https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038411.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                  className="object-top rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
