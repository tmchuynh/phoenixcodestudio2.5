
import Image from "next/image";

export default function SplitImageSide() {
  return (
    <div className="relative overflow-hidden">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        className="lg:left-0 lg:absolute lg:inset-y-0 w-full lg:w-1/2 h-56 lg:h-full object-cover"
        width={500}
        height={500}
      />

      <div className="grid lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="lg:col-start-2 px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-24 sm:pb-32">
          <div className="mx-auto lg:mr-0 max-w-2xl lg:max-w-lg">
            <p className="font-semibold text-base/8">Our track record</p>
            <h1 className="">Trusted by thousands of creators worldwide</h1>
            <h2>Sunt nostrud cillum tempor</h2>
            <h3>aliquip irure Lorem velit magna laborum.</h3>
            <p className="ext-lg/8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}