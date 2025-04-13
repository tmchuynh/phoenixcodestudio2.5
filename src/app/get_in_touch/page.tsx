export default function Example() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 divide-y divide-gray-100 max-w-2xl lg:max-w-none">
          <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 py-16">
            <div>
              <h2 className="font-semibold text-4xl text-gray-900 text-pretty tracking-tight">
                Get in touch
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                pellentesque.
              </p>
            </div>
            <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Collaborate
                </h3>
                <dl className="space-y-1 mt-3 text-gray-600 text-sm/6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Press
                </h3>
                <dl className="space-y-1 mt-3 text-gray-600 text-sm/6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:press@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Join our team
                </h3>
                <dl className="space-y-1 mt-3 text-gray-600 text-sm/6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Say hello
                </h3>
                <dl className="space-y-1 mt-3 text-gray-600 text-sm/6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:hello@example.com"
                        className="font-semibold text-indigo-600"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 py-16">
            <div>
              <h2 className="font-semibold text-4xl text-gray-900 text-pretty tracking-tight">
                Locations
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in
                ipsum commodo.
              </p>
            </div>
            <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Los Angeles
                </h3>
                <address className="space-y-1 mt-3 text-gray-600 text-sm/6 not-italic">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  New York
                </h3>
                <address className="space-y-1 mt-3 text-gray-600 text-sm/6 not-italic">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Toronto
                </h3>
                <address className="space-y-1 mt-3 text-gray-600 text-sm/6 not-italic">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="font-semibold text-base/7 text-gray-900">
                  Chicago
                </h3>
                <address className="space-y-1 mt-3 text-gray-600 text-sm/6 not-italic">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
