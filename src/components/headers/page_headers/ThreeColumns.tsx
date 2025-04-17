import { motivationalDrive } from "@/lib/constants/constants";

export default function ThreeColumns() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="">
        <h4>From Humble Beginnings to Bold Aspirations</h4>
        <h1>Before We Made Waves, We Focused on Our Core</h1>
        <p>
          At Phoenix Code Studio, our vision is to build more than just
          websites—we're here to help shape a digital future where creativity,
          strategy, and purpose intersect to elevate every brand we work with.
          Every project we take on is guided by a clear mission: to empower
          businesses with the digital tools, storytelling, and innovation they
          need to thrive in a fast-changing world.
        </p>
        <p>
          We are driven by the belief that small businesses and community-rooted
          brands deserve access to world-class design and technology. Our aim is
          to create experiences that reflect who our clients truly are—brands
          with a voice, a purpose, and a unique place in the world. Through
          intentional design and human-centered development, we help turn those
          qualities into powerful, lasting digital experiences.
        </p>
        <p>
          We are constantly pushing boundaries, exploring emerging technologies,
          and refining our craft to stay ahead of what’s next. But innovation
          alone isn’t our goal—it’s about creating solutions that matter, that
          inspire, and that drive real progress for the people and brands we
          serve. Our team is motivated by connection, impact, and growth—not
          just our own, but the growth of every client, every collaborator, and
          every community we support. We believe the future of digital belongs
          to those who lead with purpose, build with heart, and create with
          integrity. At Phoenix Code Studio, we’re committed to that
          future—boldly, creatively, and together.
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
