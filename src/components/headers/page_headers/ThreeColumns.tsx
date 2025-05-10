import { motivationalDrive } from "@/lib/constants/constants";
import { FaLandmark } from "react-icons/fa";

export default function ThreeColumns() {
  return (
    <div className="mx-auto md:-mt-22 lg:-mt-34 xl:-mt-64 w-11/12">
      <div>
        <h4>From Humble Beginnings to Bold Aspirations</h4>
        <h1 className="lg:w-7/12 xl:w-2/3">
          Before We Made Waves, We Focused on Our Core
        </h1>
        <p>
          Before we made waves, we focused on our core: building meaningful
          digital experiences rooted in creativity, strategy, and purpose.
        </p>
        <p>
          At Phoenix Code Studio, we’re not just here to create websites—we're
          here to shape the digital future. Every project we take on is guided
          by a clear mission: to empower businesses with the tools,
          storytelling, and innovation needed to thrive in a fast-changing
          world.
        </p>
        <p>
          We believe that small businesses and community-rooted brands deserve
          access to world-class design and technology. Our role is to reflect
          the true voice of every client—a brand with purpose, identity, and a
          unique place in the world. Through intentional design and
          human-centered development, we bring those stories to life through
          powerful, lasting digital experiences.
        </p>
        <p>
          We’re constantly evolving—embracing new technologies, refining our
          craft, and staying ahead of the curve. But innovation isn’t our goal
          in itself—impact is. We design solutions that matter, that resonate,
          and that drive real progress. Connection. Growth. Purpose. That’s what
          fuels us.
        </p>
      </div>

      <section className="mt-9">
        <h2>Core Brand Pillars</h2>
        <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-3 mt-6">
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Vision-Driven Strategy</h4>
              <p className="mt-2 text-sm">
                Every project begins with a vision and ends with a
                custom-engineered solution that brings that vision to life.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Human-Centered Design</h4>
              <p className="mt-2 text-sm">
                Empathy, usability, and accessibility form the foundation of
                every experience we craft.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Purposeful Innovation</h4>
              <p className="mt-2 text-sm">
                We use emerging technology to solve real problems—not to chase
                trends.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Long-Term Collaboration</h4>
              <p className="mt-2 text-sm">
                We’re not just a vendor. We’re your strategic partner invested
                in your sustained digital growth.
              </p>
            </div>
          </div>
          <div className="lg:block sm:flex">
            <div className="w-16 h-16 sm:shrink-0 object-cover">
              <FaLandmark className="w-16 h-16" />
            </div>
            <div className="mt-4 sm:mt-0 lg:mt-6 sm:ml-6 lg:ml-0">
              <h4>Authentic Storytelling</h4>
              <p className="mt-2 text-sm">
                Every design and every line of copy reflects your
                narrative—real, raw, and resonant.
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="mt-14">
        <h2>What Drives Us Forward</h2>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {motivationalDrive.map((feature, index) => (
            <div key={index} className="py-3">
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
