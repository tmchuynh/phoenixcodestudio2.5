"use client";

import { FeaturedImageGallery } from "@/components/images/FeaturedImage";

export default function TwoColumnTextImage() {
  return (
    <div className="mx-auto w-11/12">
      <div className="items-start gap-x-8 gap-y-16 sm:gap-y-24 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
        <FeaturedImageGallery />
        <div>
          <div>
            <h4>Backed by Belief, Guided by Love</h4>
            <h1>Support That Sparked the Journey</h1>
            <div>
              <p className="mt-6">
                Before Phoenix Code Studio had a name, a logo, or even a website
                of its own, it had something far more powerful—people who
                believed in us. What started as small favors for friends and
                passion projects for family quickly evolved into something
                greater, fueled by trust, encouragement, and word-of-mouth
                support. Those early champions didn’t just give us projects—they
                gave us purpose. They believed in our ability to create
                meaningful digital experiences, even before we fully saw it in
                ourselves.
              </p>
              <p className="mt-8">
                Every kind word, referral, and{" "}
                <strong className="uppercase">
                  <mark className="bg-primary/20 dark:bg-secondary shadow-sm px-1 py-0.5 rounded-md">
                    “You’ve Got This”
                  </mark>
                </strong>{" "}
                became fuel. We were inspired by those who saw potential and
                gave us space to grow, make mistakes, and get better. We saw
                firsthand how powerful true support can be—and we carry that
                same spirit into every project. We build with intention, because
                we know what it means when someone chooses you, believes in you,
                and roots for your success.
              </p>
              <p className="mt-8">
                Today, we honor that early support by paying it
                forward—championing small businesses, nonprofits, and
                community-rooted brands with the same heart and dedication that
                got us started. Every collaboration is a continuation of that
                story, and every testimonial is a reflection of the
                relationships we value most. Phoenix Code Studio isn’t just
                about code or design—it’s about people showing up for people,
                and building something real, together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
