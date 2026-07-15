import React from 'react'
import { TbUser, TbBrandLinkedin, TbBrandX } from "react-icons/tb";

const TeamCard = ({ team }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-[#15180F] border border-[#232820] rounded-md p-6"
          >
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-[#0D0F0C] border border-[#2F362A] flex items-center justify-center mb-4">
              <TbUser size={24} className="text-[#9FE6A0]" />
            </div>

            <h3 className="text-[#E4E6DE] text-base font-medium">
              {member.name}
            </h3>
            <p className="text-[#9FE6A0] text-xs mb-1">{member.role}</p>
            <p className="text-[#3A4036] text-xs mb-3">{member.company}</p>

            <p className="text-[#8A9180] text-sm leading-relaxed mb-4">
              {member.bio}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={member.linkedin}
                className="text-[#5C6358] hover:text-[#9FE6A0] transition-colors"
              >
                <TbBrandLinkedin size={16} />
              </a>
              <a
                href={member.twitter}
                className="text-[#5C6358] hover:text-[#9FE6A0] transition-colors"
              >
                <TbBrandX size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
  )
}

export default TeamCard