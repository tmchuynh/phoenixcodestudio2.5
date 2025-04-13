const features = [
  {
    name: "Creativity & Innovation",
    description:
      "We combine cutting-edge technology with imaginative thinking to create original, high-performing digital solutions. We stay ahead of trends and break creative barriers to bring visions to life in ways that captivate, engage, and inspire.",
  },
  {
    name: "Adaptability & Growth",
    description:
      "The digital world moves fast, and so do we. We welcome change, embrace new technologies, and evolve our strategies to deliver forward-thinking, scalable, and future-proof solutions in a dynamic online landscape.",
  },
  {
    name: "Authenticity",
    description:
      "We believe your brand should be as unique online as it is in person. That’s why we design genuine, meaningful experiences that reflect your voice, values, and identity—creating stronger, more personal connections with your audience.",
  },
  {
    name: "Excellence",
    description:
      "We hold ourselves to the highest standards in every line of code, every design choice, and every user journey. Our commitment to quality, precision, and performance ensures that what we build doesn’t just look good—it works brilliantly.",
  },
  {
    name: "Empowerment",
    description:
      "We're here to uplift and enable small businesses, equipping them with tools, guidance, and insights to navigate and thrive in a competitive digital space. Your success is our success—and we’re in it with you.",
  },
  {
    name: "Collaboration & Communication",
    description:
      "We work with you, not for you. Through open dialogue, active listening, and a transparent process, we ensure your goals, vision, and feedback are embedded in every stage—delivering results that are truly aligned and deeply impactful.",
  },
  {
    name: "Community Impact",
    description:
      "We believe that great digital solutions can foster real-world growth. Our work supports not just businesses, but the communities they serve. We create with purpose, aiming to uplift, strengthen, and inspire positive change through every project.",
  },
  {
    name: "Sustainability",
    description:
      "We build solutions that last—technically, strategically, and ethically. By prioritizing sustainable, scalable digital practices, we ensure your online presence can grow and evolve with your business, today and far into the future.",
  },
];

export default function ThreeColumns() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="">
        <h4>Let's Make Vision Reality</h4>
        <h1>We Share in Your Goals</h1>
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
          {features.map((feature, index) => (
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
