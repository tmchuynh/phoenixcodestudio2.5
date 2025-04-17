import Image from "next/image";

export default function ImageTilesOnSide() {
  return (
    <div className="flex flex-col-reverse items-center gap-5 lg:gap-9 lg:grid grid-cols-5 mx-auto py-3 md:py-5 lg:py-7 2xl:py-12 md:w-11/12 h-full lg:h-11/12 overflow-hidden">
      <div className="flex justify-center items-center space-x-6 lg:space-x-8 lg:col-span-3 md:w-full md:h-96 lg:h-full overflow-hidden">
        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
          <div className="sm:opacity-0 xl:opacity-100 rounded-lg w-44 h-32 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/premium-photo/businessman-using-computer-document-management-concept-online-documentation-database-digital-file-storage-system-software-records-keeping-database-technology-file-access-doc-sharing_562859-4343.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="rounded-lg w-44 h-72 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="sm:opacity-0 xl:opacity-100 rounded-lg w-44 h-42 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
          <div className="sm:opacity-0 lg:opacity-100 rounded-lg w-44 h-52 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="object-right size-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="rounded-lg w-44 h-56 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="rounded-lg w-44 h-64 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/premium-photo/businesswoman-working-project_53876-130420.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
          <div className="rounded-lg w-44 h-64 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/premium-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="rounded-lg w-44 h-54 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/free-photo/high-angle-hands-holding-paper_23-2149930962.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="size-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="gap-y-6 lg:gap-y-8 grid grid-cols-1 shrink-0 md:grow xl:grow-0">
          <div className="rounded-lg w-44 h-96 overflow-hidden">
            <Image
              alt=""
              src="https://img.freepik.com/premium-photo/document-management-system-dms-online-documentation-database-process-automation-efficiently-manage-files-knowledge-documentation-enterprise-with-erp-corporate-business-technology_265022-7253.jpg?ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
              className="object-left size-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 mx-auto w-11/12 md:w-full">
        <h1>Web Development vs Web Design</h1>
        <p>
          When creating a website, it's important to understand the roles of web
          development and web design. Web development is all about building the
          website and making sure it functions properly. Developers use
          programming languages and frameworks to ensure the site works smoothly
          and efficiently. Web design, on the other hand, focuses on how the
          website looks and feels. Designers are responsible for the layout,
          user experience (UX), and overall branding. While developers handle
          the technical aspects, designers focus on the visual elements and
          ensuring the site is easy to navigate. Knowing the difference between
          these two roles can help you decide who to hire or guide you if you're
          taking on the project yourself.
        </p>
      </div>
    </div>
  );
}
