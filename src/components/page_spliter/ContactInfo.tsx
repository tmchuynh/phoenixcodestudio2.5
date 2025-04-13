export default function ContactInfoSpliter() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2>Our offices</h2>
          <p className="mt-6 text-lg/8">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
        </div>
        <div className="gap-8 sm:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-0 mt-16 max-w-2xl lg:max-w-none text-base/7">
          <div>
            <h3>Los Angeles</h3>
            <address className="pt-2 pl-6 border-l not-italic">
              <p>4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
          </div>
          <div>
            <h3>New York</h3>
            <address className="pt-2 pl-6 border-l not-italic">
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div>
            <h3>Toronto</h3>
            <address className="pt-2 pl-6 border-l not-italic">
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div>
            <h3>London</h3>
            <address className="pt-2 pl-6 border-l not-italic">
              <p>114 Cobble Lane</p>
              <p>London N1 2EF</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
