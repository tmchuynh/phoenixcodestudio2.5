import Image from "next/image";

export default function TestimonialStats() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="items-start gap-x-8 gap-y-16 sm:gap-y-24 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="lg:pr-4">
            <div className="relative shadow-2xl px-6 sm:px-12 lg:px-8 xl:px-10 pt-64 pb-9 lg:pb-8 xl:pb-10 rounded-3xl lg:max-w-7xl overflow-hidden">
              <Image
                alt=""
                src="https://img.freepik.com/free-photo/business-people-shaking-hands-greeting_53876-101876.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="absolute inset-0 size-full object-cover"
                width={1200}
                height={2400}
              />
            </div>
          </div>
          <div>
            <div className="lg:max-w-lg">
              <h4>Backed by Belief, Guided by Love</h4>
              <h1>Support That Sparked the Journey</h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Before Phoenix Code Studio had a name, a logo, or even a
                  website of its own, it had something far more powerful—people
                  who believed in us. What started as small favors for friends
                  and passion projects for family quickly evolved into something
                  greater, fueled by trust, encouragement, and word-of-mouth
                  support. Those early champions didn’t just give us
                  projects—they gave us purpose. They believed in our ability to
                  create meaningful digital experiences, even before we fully
                  saw it in ourselves.
                </p>
                <p className="mt-8">
                  Every kind word, referral, and <mark>“you’ve got this”</mark>{" "}
                  became fuel. We were inspired by those who saw potential and
                  gave us space to grow, make mistakes, and get better. We saw
                  firsthand how powerful true support can be—and we carry that
                  same spirit into every project. We build with intention,
                  because we know what it means when someone chooses you,
                  believes in you, and roots for your success.
                </p>
                <p className="mt-8">
                  Today, we honor that early support by paying it
                  forward—championing small businesses, nonprofits, and
                  community-rooted brands with the same heart and dedication
                  that got us started. Every collaboration is a continuation of
                  that story, and every testimonial is a reflection of the
                  relationships we value most. Phoenix Code Studio isn’t just
                  about code or design—it’s about people showing up for people,
                  and building something real, together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
