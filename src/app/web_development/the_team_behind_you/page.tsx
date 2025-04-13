import TabSections from "./TabSections";

export default function TheTeamBehindYou() {
  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <div>
        <h1>Meet Your Talented Team</h1>
        <p className="mt-4">
          We are a team of passionate developers, designers, and marketers who
          are dedicated to helping you succeed online.
        </p>
      </div>
      <TabSections />
    </main>
  );
}
