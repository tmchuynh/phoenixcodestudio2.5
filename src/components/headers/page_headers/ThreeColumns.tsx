import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function ThreeColumns() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold text-base/7">Deploy faster</h2>
          <p className="mt-2 font-semibold text-4xl text-pretty sm:text-5xl lg:text-balance tracking-tight">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
          <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 font-semibold text-base/7">
                  <feature.icon
                    aria-hidden="true"
                    className="flex-none size-5"
                  />
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base/7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="font-semibold text-sm/6">
                      Learn more
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
