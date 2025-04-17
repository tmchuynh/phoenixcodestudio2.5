import Image from "next/image";

export function MasonryGridGallery() {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4 pb-16 md:pb-24 lg:pb-32">
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/premium-photo/business-people-laptop-meeting-with-handshake-agreement-deal-b2b-together-office-lounge-businessman-shaking-hands-with-employee-colleague-thank-you-parthnership-workplace_590464-438442.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={1950}
            height={1300}
          />
        </div>
        <div>
          <Image
            className="object-left rounded-lg max-w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/back-view-colleagues-working-laptop_23-2147707779.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/premium-photo/business-colleagues-together-teamwork-working-office_53876-60139.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={2940}
            height={1960}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/male-female-graphic-designers-interacting-computer_1170-933.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/authentic-small-youthful-marketing-agency_23-2150167451.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={800}
            height={533}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/close-up-people-working-from-home_23-2149173341.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="object-top rounded-lg max-w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/young-colleagues-work-office-using-computers_171337-6821.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={2940}
            height={1960}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/diverse-friends-using-digital-devices_53876-96880.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/premium-photo/discussion-laptop-problem-solving-with-business-team-office-programming-web-development-collaboration-computer-meeting-with-developer-people-creative-workplace-together_590464-445991.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
      </div>
      <div className="gap-4 grid">
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/businesspeople-meeting-doing-greeting-handshake-gesture-office-workspace_482257-101727.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={687}
            height={458}
          />
        </div>
        <div>
          <Image
            className="rounded-lg max-w-full h-full object-cover object-center"
            src="https://img.freepik.com/premium-photo/high-angle-view-businessmen-discussing-table-office_252847-18429.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&semt=ais_hybrid&w=740"
            alt="gallery-photo"
            width={927}
            height={618}
          />
        </div>
      </div>
    </div>
  );
}
