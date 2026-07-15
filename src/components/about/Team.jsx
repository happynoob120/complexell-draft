import { TbUser, TbBrandLinkedin, TbBrandX } from "react-icons/tb";
import TeamCard from "./TeamCard";

const team = [
  {
    name: "Ekagr Khanna",
    role: "Founder, Complexell",
    company: "Souel.in",
    bio: "Developer and builder behind Complexell. Passionate about making debugging faster and less painful for every developer.",
    linkedin: "#",
    twitter: "#",
  },
];

function Team() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          the <span className="text-[#9FE6A0]">team</span>
        </h2>
      </div>
    <TeamCard team={team} />
    </section>
  );
}

export default Team;