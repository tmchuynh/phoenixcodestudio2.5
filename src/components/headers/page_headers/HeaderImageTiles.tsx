import DynamicButton from "@/components/button/button-dynamic";
import Image from "next/image";

export default function HeaderImageTiles() {
  return (
    <div className="py-32 overflow-hidden">
      <div className="lg:flex mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex-none gap-x-12 gap-y-16 lg:gap-y-8 grid grid-cols-1 mx-auto lg:mx-0 lg:min-w-full max-w-2xl lg:max-w-none">
          <div className="lg:col-end-1 lg:pb-8 lg:w-full lg:max-w-lg">
            <h4>Phoenix Code Studio</h4>
            <h1>Our people</h1>
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
              <DynamicButton>Join our team</DynamicButton>
            </div>
          </div>
          <div className="flex flex-wrap justify-end items-start gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto lg:flex-none lg:ml-auto w-0 lg:w-auto lg:self-end">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                className="rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="lg:flex lg:justify-end lg:items-start lg:gap-x-8 lg:col-span-2 lg:col-end-2 lg:ml-auto lg:w-[37rem] contents">
              <div className="flex flex-none justify-end order-first w-64 lg:w-auto self-end">
                <Image
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1661503228332-03778ab6d6a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  className="flex-none rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-auto lg:flex-none justify-end w-96 lg:w-auto">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
                  className="flex-none rounded-2xl w-[37rem] max-w-none aspect-7/5 object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="sm:block sm:flex-auto lg:flex-none hidden sm:w-0 lg:w-auto">
                <Image
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
                  className="rounded-2xl w-[24rem] max-w-none aspect-4/3 object-cover"
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
