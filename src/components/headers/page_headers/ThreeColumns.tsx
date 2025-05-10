import { motivationalDrive } from "@/lib/constants/constants";

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
      <div className="mt-6">
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
