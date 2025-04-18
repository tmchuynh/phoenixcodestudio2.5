import InfoTestimonial from "@/components/headers/page_headers/InfoTestimonial";
import Image from "next/image";

export default function HowWeCanHelpYou() {
  return (
    <>
      <main className="mx-auto pt-12 md:pt-10 lg:pt-16 w-10/12 md:w-11/12">
        <InfoTestimonial />
      </main>

      <section className="gap-3 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-3 lg:py-4 2xl:py-9">
        <div className="lg:flex justify-center items-center space-x-8 hidden col-span-2 h-full overflow-hidden">
          <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
            <div className="sm:opacity-0 xl:opacity-100 rounded-lg w-44 h-32 overflow-hidden">
              <Image
                alt="A woman with a smile is raising her hands indoors, standing in front of a wall with furniture and a shelf nearby."
                src="https://img.freepik.com/premium-photo/beauty-asian-businesswoman-raising-two-hands-after-finishing-her-job-happily-with-computer-people-lifestyles-concept-technology-business-working-theme_625516-4823.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="rounded-lg w-44 h-72 overflow-hidden">
              <Image
                alt="A man sitting at a table indoors with his hands on his face, surrounded by furniture and a laptop on the desk. There is a window nearby and the man is wearing glasses."
                src="https://img.freepik.com/free-photo/successful-businessman-casual-celebrating-his-victory-raising-arms_1163-3989.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="sm:opacity-0 xl:opacity-100 rounded-lg w-44 h-42 overflow-hidden">
              <Image
                alt="A silhouette of a person standing indoors in front of a window with their arms raised, backlit by sunlight and showing a view of the sky."
                src="https://img.freepik.com/premium-photo/silhouette-successful-businessman-man-looks-victory-celebrates-victory-holds-his-hands-up-rejoices_321831-8054.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
            <div className="sm:opacity-0 lg:opacity-100 rounded-lg w-44 h-52 overflow-hidden">
              <Image
                alt="A professional woman in a suit shows determination while seated at a desk with a laptop in a dimly lit office environment."
                src="https://img.freepik.com/free-photo/stressed-businesswoman-checking-profit-resultes-standing-business-office_482257-6514.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="rounded-lg w-44 h-56 overflow-hidden">
              <Image
                alt="A woman standing in front of a desk with a laptop on it, smiling. She is wearing trousers and the setting is indoors with a wall visible in the background."
                src="https://img.freepik.com/free-photo/full-shot-blonde-girl-raising-her-hand_23-2148348975.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="rounded-lg w-44 h-64 overflow-hidden">
              <Image
                alt="A man in a suit is holding a whiteboard in an office environment with a laptop on the table."
                src="https://img.freepik.com/free-photo/happy-african-american-businessman-suit-looking-laptop-excited-by-good-news-online-black-man-winner-sitting-office-desk-achieved-goal-raising-hands-celebrating-business-success-win-result_231208-673.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
            <div className="rounded-lg w-44 h-64 overflow-hidden">
              <Image
                alt="A person in a striped shirt raises a fist in triumph while holding a laptop in a modern office setting."
                src="https://img.freepik.com/free-photo/business-woman-with-laptop-hand-is-happy-with-success-portrait-woman-glasses-striped-blouse-enthusiastically-screaming-making-winning-gesture_197531-13438.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <div className="rounded-lg w-44 h-54 overflow-hidden">
              <Image
                alt="A man wearing sunglasses and a suit is indoors, standing with his hands raised, near a window."
                src="https://img.freepik.com/premium-photo/portrait-cheerful-businessman-celebrating-his-success_709984-5423.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
            <div className="rounded-lg w-44 h-96 overflow-hidden">
              <Image
                alt="Three professionals engage over a table, one giving a high five, while another observes, with a laptop displaying a calendar in the foreground."
                src="https://img.freepik.com/free-photo/workers-high-five-close-up_23-2149008887.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
                className="size-full object-cover"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:justify-around col-span-5 lg:col-span-3 md:py-6 lg:py-14">
          <div>
            <h4>
              Your First Step Is the Hardest—We Help You Take It with Confidence
            </h4>
            <h2>Tailored Digital Solutions, Built for You</h2>
          </div>
          <div>
            <p>
              At Phoenix Code Studio, we understand that no two brands walk the
              same path. Your business has its own voice, values, and
              challenges—and we believe your digital presence should reflect
              that. That’s why we don’t settle for cookie-cutter solutions.
              Instead, we craft fully customized, industry-specific digital
              experiences that align with your vision and empower your growth.
            </p>
            <p>
              We know that meaningful progress starts with understanding. From
              our very first discovery call to your final launch (and beyond),
              we’re more than just developers—we’re your strategic partners. Our
              process is deeply collaborative, fueled by purpose, and grounded
              in a belief that success comes from listening, learning, and
              leading together. Every step of the way, we’re invested in your
              journey, ensuring that your goals are met with clarity,
              creativity, and confidence.
            </p>
            <p>
              At Phoenix Code Studio, we design, build, and scale with
              intention. Every decision we make is guided by your users, your
              objectives, and your long-term success. Whether you’re launching a
              brand-new product, refining an existing platform, or reimagining
              your digital strategy, we’re here to help you take that first
              step—and every step after—with confidence and purpose.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto pt-12 md:pt-10 lg:pt-16 w-10/12 md:w-11/12">
        <section className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2 md:mb-12 lg:mb-24 2xl:mb-32 py-3 md:py-7 2xl:py-12">
          <div className="flex flex-col justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="Custom Website Development"
              src="https://img.freepik.com/free-photo/creative-thinking-creativity-design-process-concept_53876-127465.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>Custom Website Development</h3>
              <p>
                Your website is the cornerstone of your digital presence. At
                Phoenix Code Studio, we specialize in crafting intuitive,
                responsive, and high-performing websites tailored to your unique
                needs. Whether you’re looking for a sleek portfolio, a dynamic
                e-commerce platform, or a robust content hub, we bring your
                vision to life with precision, creativity, and a focus on
                delivering exceptional user experiences.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>
                  Fully custom front-end and back-end development to meet your
                  specific requirements
                </li>
                <li>
                  Tailored UX/UI design that prioritizes accessibility and user
                  engagement
                </li>
                <li>
                  Optimized for performance, speed, and search engine visibility
                  (SEO)
                </li>
                <li>
                  Scalable and future-proof architecture to grow with your
                  business
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="Authentic Brand Storytelling"
              src="https://img.freepik.com/premium-photo/back-view-female-coach-with-smartphone-pointing-financial-information-papers-hanging-blackboard-office_274679-8823.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>Authentic Brand Storytelling</h3>
              <p>
                We craft compelling brand narratives that authentically define
                your identity and create a deep emotional connection with your
                audience. Through strategic storytelling, we bridge the gap
                between your brand’s values, mission, and vision to build trust
                and long-term loyalty.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>
                  Strategic messaging that aligns with your brand’s mission and
                  values
                </li>
                <li>
                  Visual storytelling that captivates and resonates with your
                  audience
                </li>
                <li>
                  Campaigns designed to inspire, engage, and foster loyalty
                </li>
                <li>
                  Seamless integration of storytelling across all platforms
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="High-Performance Single-Page Applications"
              src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>High-Performance Single-Page Applications (SPAs)</h3>
              <p>
                We specialize in building fast, dynamic, and highly responsive
                single-page applications (SPAs) that deliver real-time updates
                and seamless navigation. Our SPAs provide an app-like experience
                that works flawlessly across all devices and screen sizes.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>Cutting-edge frameworks for top-tier performance</li>
                <li>
                  Minimal load times and smooth transitions for user retention
                </li>
                <li>Interactive elements that enhance engagement</li>
                <li>Custom SPAs tailored to your business objectives</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="E-Commerce Solutions"
              src="https://img.freepik.com/free-photo/merchandise-business-goal-investment-plan-concept_53876-127510.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block object-bottom hidden shadow-lg rounded-lg w-full object-cover aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>E-Commerce Solutions</h3>
              <p>
                We design scalable, secure, and user-friendly e-commerce
                platforms that enhance the customer experience and drive sales
                growth. From intuitive navigation to robust analytics, our
                solutions are built for long-term success.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>
                  Seamless checkout processes and personalized recommendations
                </li>
                <li>
                  Inventory management and in-depth analytics for optimization
                </li>
                <li>Secure platforms with robust data protection</li>
                <li>
                  Custom solutions to showcase your brand and maximize
                  conversions
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="Rebranding Services"
              src="https://img.freepik.com/free-photo/brand-copyright-name-draft-graphic-concept_53876-124103.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>Rebranding Services</h3>
              <p>
                Transform your brand with a fresh, modern identity that connects
                with your audience and aligns with your business goals. Our
                comprehensive rebranding services ensure every element reflects
                your unique vision and positions you for long-term success.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>Logo design and cohesive visual identity systems</li>
                <li>Strategic brand messaging and positioning</li>
                <li>
                  Future-ready brand strategies that stand out in competitive
                  markets
                </li>
                <li>Comprehensive rebranding to fuel growth and build trust</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="User-Centered Interface Design"
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051555.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>User-Centered Interface Design</h3>
              <p>
                We design intuitive, functional interfaces that balance
                usability, accessibility, and aesthetic appeal. By prioritizing
                user research and accessibility best practices, we create
                seamless experiences that cater to all users and drive
                meaningful interactions.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>
                  Data-driven design decisions based on in-depth user research
                </li>
                <li>Wireframing and prototyping to refine the user journey</li>
                <li>
                  Inclusive designs that prioritize accessibility for all users
                </li>
                <li>
                  Engaging, user-friendly interfaces that leave a lasting
                  impression
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="SEO-Optimized Blog Content"
              src="https://img.freepik.com/free-photo/search-engine-optimization_53876-119984.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>SEO-Optimized Blog Content</h3>
              <p>
                We create compelling, informative blog posts that enhance your
                website’s SEO performance while engaging your audience. By
                delivering valuable, relevant content, we help establish your
                brand as an authority in your field and drive organic traffic.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>Keyword-rich blog posts aligned with your brand voice</li>
                <li>
                  Content designed to educate, inspire, and engage your audience
                </li>
                <li>
                  Improved search engine rankings and organic traffic growth
                </li>
                <li>
                  Consistent, high-quality content that builds trust and
                  authority
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="Optimized & Secure Database Management"
              src="https://img.freepik.com/premium-photo/database-administrators-backup-company-customer-data-concept-databases-computer-dbms-database_257067-6.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>Optimized & Secure Database Management</h3>
              <p>
                Our database management services provide secure, scalable, and
                high-performance solutions that streamline data storage,
                organization, and accessibility. We ensure fast and reliable
                operations with advanced security protocols to safeguard
                sensitive information.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>Real-time data processing and seamless integrations</li>
                <li>Scalable storage solutions to support long-term growth</li>
                <li>
                  Compliance with industry standards and advanced security
                  measures
                </li>
                <li>Optimized performance for handling complex data demands</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-3 2xl:gap-9 xl:gap-7 h-full">
            <Image
              alt="Wireframing & Prototyping Services"
              src="https://img.freepik.com/premium-photo/cropped-image-ux-ui-designers-working-version-website-mobile-devices_274689-22113.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="lg:block hidden shadow-lg rounded-lg w-full object-cover object-center aspect-6/4"
              height={500}
              width={500}
            />
            <div>
              <h3>Wireframing & Prototyping Services</h3>
              <p>
                Our wireframing and prototyping services turn your concepts into
                actionable, user-focused designs. From low-fidelity wireframes
                to high-fidelity prototypes, we ensure usability and efficiency
                while perfecting the final product.
              </p>
              <ul className="space-y-2 ml-6 py-3 list-disc list-inside">
                <li>Clear blueprints for structure, navigation, and layout</li>
                <li>
                  Interactive prototypes to simulate real user interactions
                </li>
                <li>Streamlined decision-making and design refinement</li>
                <li>
                  Time and resource savings through early testing and feedback
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
