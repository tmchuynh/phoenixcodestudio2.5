import InfoTestimonial from "@/components/headers/page_headers/InfoTestimonial";

export default function HowWeCanHelpYou() {
  return (
    <main className="mx-auto pt-24 sm:pt-32 lg:pt-36 w-11/12">
      <InfoTestimonial />
      <div className="mx-auto px-4 lg:max-w-none">
        <h2>Tailored Digital Solutions, Built for You</h2>
        <p>
          We don’t believe in one-size-fits-all templates. Every business has
          its own voice, values, and goals. That’s why we create fully custom,
          industry-specific solutions that are strategically aligned with your
          unique vision and challenges. From discovery to deployment, we’re your
          partners in progress.
        </p>

        <section className="gap-x-8 gap-y-10 grid grid-cols-1 lg:grid-cols-2 mt-16">
          <div className="py-3 md:py-5 lg:py-9">
            <h3>Custom Website Development</h3>
            <p>
              We specialize in building intuitive, responsive, and
              high-performing websites from the ground up. Whether you need a
              sleek portfolio, an e-commerce platform, or a robust content hub,
              we bring your ideas to life with precision and creativity.
            </p>
            <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
              <li>Fully custom front-end and back-end development</li>
              <li>Tailored UX/UI design with accessibility in mind</li>
              <li>Optimized for performance, speed, and SEO</li>
              <li>Scalable and future-proof architecture</li>
            </ul>
          </div>

          <div className="py-3 md:py-5 lg:py-9">
            <h3>Brand Strategy & Identity</h3>
            <p>
              A compelling brand does more than look good—it tells a story. We
              work with you to define or refine your brand identity, crafting
              design systems, messaging, and visuals that resonate with your
              audience and reflect who you are.
            </p>
            <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
              <li>Logo & visual identity systems</li>
              <li>Brand voice, messaging, and storytelling</li>
              <li>Market positioning and persona development</li>
              <li>Style guides for long-term consistency</li>
            </ul>
          </div>

          <div className="py-3 md:py-5 lg:py-9">
            <h3>Website Redesigns & Revitalization</h3>
            <p>
              Already have a website but feel like it’s underperforming? We
              assess your current digital presence and rebuild it to be faster,
              clearer, more engaging, and more aligned with your goals.
            </p>
            <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
              <li>Strategic audits and UX analysis</li>
              <li>Conversion-focused redesigns</li>
              <li>SEO and accessibility improvements</li>
              <li>Migration & modernization with minimal downtime</li>
            </ul>
          </div>

          <div className="py-3 md:py-5 lg:py-9">
            <h3>SEO, Content, & Marketing Strategy</h3>
            <p>
              Your website is only as powerful as the people it reaches. We
              create content and implement SEO strategies that drive organic
              traffic, strengthen visibility, and engage your audience
              meaningfully.
            </p>
            <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
              <li>Keyword research and technical SEO</li>
              <li>Blog, product, and web content creation</li>
              <li>Email marketing and campaign design</li>
              <li>Conversion rate optimization</li>
            </ul>
          </div>

          <div className="py-3 md:py-5 lg:py-9">
            <h3>Ongoing Support & Digital Growth</h3>
            <p>
              We’re not just a launch partner—we’re a long-term growth partner.
              After delivery, we offer ongoing support, analytics tracking,
              maintenance, and strategic direction so you can keep growing with
              confidence.
            </p>
            <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
              <li>Website care plans and performance monitoring</li>
              <li>Monthly updates, backups, and security checks</li>
              <li>Analytics reports and data-driven insights</li>
              <li>Strategic consulting and continuous improvement</li>
            </ul>
          </div>
        </section>
      </div>
      <div></div>
    </main>
  );
}
