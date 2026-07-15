import { TbHeart } from "react-icons/tb";

function Acknowledgement() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto font-mono">
      <div className="flex items-baseline gap-3 mb-10">
        <span className="text-[#9FE6A0] text-2xl">#</span>
        <h2 className="text-[#E4E6DE] text-2xl font-medium tracking-tight">
          acknowledgements
        </h2>
      </div>

      <div className="bg-[#15180F] border border-[#232820] rounded-md p-8 max-w-2xl">
        <div className="flex items-start gap-4">
          <TbHeart size={22} className="text-[#9FE6A0] mt-0.5 shrink-0" />
          <div>
            <p className="text-[#E4E6DE] text-sm leading-relaxed mb-4">
              complexell was built with the generous support of{" "}
              <span className="text-[#9FE6A0]">Madhav Batra</span>, Founder of{" "}
              <a
                href="https://souel.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9FE6A0] hover:underline"
              >
                souel.in
              </a>
              {" "}— whose belief in this project made it possible.
            </p>
            <p className="text-[#8A9180] text-sm leading-relaxed">
              complexell operates under the parent company{" "}
              <a
                href="https://souel.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9FE6A0] hover:underline"
              >
                souel.in
              </a>
              . we're grateful for the infrastructure, guidance, and trust that made this launch possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acknowledgement;