import FeaturedOverlappingTestimonial from "@/components/cards/testimonial/Overlapping_Image";
import ThreeColumns from "@/components/headers/page_headers/ThreeColumns";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import { testimonials } from "@/lib/constants/testimonials";

export default function OurAspirationsPage() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <MasonryGridGallery />

      <ThreeColumns />

      <div className="mx-auto my-7 w-11/12">
        <div>
          <h4>Creatively. Strategically. Authentically.</h4>
          <h2>At Phoenix Code Studio, We Help Brands Rise.</h2>

          <p>
            At our core, we’re more than coders, designers, or strategists—we’re
            partners in your growth. Phoenix Code Studio is where ideas rise,
            innovation thrives, and every project becomes a launchpad for
            something greater.
          </p>
          <p>
            We proudly serve a diverse set of industries—from healthcare and
            education to e-commerce, startups, and technology firms. Whether
            you're launching a new product, reimagining your brand, or building
            a custom digital solution, we tailor each project to your specific
            challenges and goals.
          </p>
        </div>

        <section className="mt-6">
          <h3>Our expertise spans:</h3>
          <p>
            Our team is a blend of creative minds and technical experts,
            dedicated to crafting solutions that not only look good but also
            perform exceptionally. We believe in the power of collaboration,
            working closely with our clients to understand their unique needs
            and aspirations.
          </p>

          <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] mt-5">
            {/* Custom Web Development - Large featured card */}
            <div className="flex flex-col md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-indigo-100 dark:to-indigo-800/20 shadow-lg hover:shadow-xl p-6 lg:p-8 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-4 font-bold text-blue-900 text-xl lg:text-2xl dark:text-blue-100">
                  Custom Web Development
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We specialize in Next.js, Tailwind CSS, and TypeScript to
                  deliver fast, scalable, and fully custom websites that meet
                  your business needs and grow with you. Our development
                  approach focuses on performance, accessibility, and
                  future-proof architecture that scales with your business
                  growth.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-12 h-1"></div>
              </div>
            </div>

            {/* Brand Strategy */}
            <div className="flex flex-col bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-violet-100 dark:to-violet-800/20 shadow-md hover:shadow-lg p-6 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-lg text-purple-900 dark:text-purple-100">
                  Brand Strategy
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  We align your visual identity and messaging with your business
                  goals—building a cohesive, authentic brand presence across all
                  digital touchpoints.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-full w-8 h-1"></div>
              </div>
            </div>

            {/* UX/UI Design */}
            <div className="flex flex-col bg-gradient-to-br from-green-50 dark:from-green-900/20 to-emerald-100 dark:to-emerald-800/20 shadow-md hover:shadow-lg p-6 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-green-900 text-lg dark:text-green-100">
                  UX/UI Design
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  We craft intuitive interfaces that enhance usability,
                  accessibility, and engagement—turning complex journeys into
                  seamless digital experiences.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-8 h-1"></div>
              </div>
            </div>

            {/* Content Marketing - Medium featured card */}
            <div className="flex flex-col md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-amber-100 dark:to-amber-800/20 shadow-lg hover:shadow-xl p-6 lg:p-8 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-lg text-orange-900 dark:text-orange-100">
                  Conversion-Focused Content Marketing
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  We create content strategies that drive action—blending
                  storytelling, SEO, and user behavior insights to maximize
                  engagement and ROI.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-full w-12 h-1"></div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="flex flex-col bg-gradient-to-br from-rose-50 dark:from-rose-900/20 to-pink-100 dark:to-pink-800/20 shadow-md hover:shadow-lg p-6 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-lg text-rose-900 dark:text-rose-100">
                  SEO Optimization
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  From technical SEO to on-page strategy, we help you climb
                  search rankings and drive targeted organic traffic that
                  converts.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full w-8 h-1"></div>
              </div>
            </div>

            {/* Search Engines */}
            <div className="flex flex-col bg-gradient-to-br from-teal-50 dark:from-teal-900/20 to-cyan-100 dark:to-cyan-800/20 shadow-md hover:shadow-lg p-6 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-lg text-teal-900 dark:text-teal-100">
                  Search Engines
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  We implement technical SEO, clean code, and strategic metadata
                  to ensure your site is easily discoverable and indexable.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-8 h-1"></div>
              </div>
            </div>

            {/* User Experience */}
            <div className="flex flex-col md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-indigo-100 dark:to-indigo-800/20 shadow-lg hover:shadow-xl p-6 lg:p-8 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-violet-900 text-xl lg:text-2xl dark:text-violet-100">
                  Seamless User Experience
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From navigation to interaction, every detail is optimized to
                  guide users intuitively toward conversion.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-8 h-1"></div>
              </div>
            </div>

            {/* Mobile Responsiveness */}
            <div className="flex flex-col bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-violet-100 dark:to-violet-800/20 shadow-md hover:shadow-lg p-6 border-0 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex-1">
                <h4 className="mb-3 font-bold text-indigo-900 text-lg dark:text-indigo-100">
                  Mobile Responsiveness
                </h4>
                <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                  Our builds adapt to all devices, delivering a seamless
                  experience from desktop to smartphone.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-8 h-1"></div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <FeaturedOverlappingTestimonial testimonial={testimonials[0]} />
    </div>
  );
}
