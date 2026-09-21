"use client";

const teamMembers = [
  {
    number: "01",
    name: "Ram Vemulapalli",
    role: "Founder",
    description:
      "Leading RAM Automation with a focus on AI, intelligent workflows and practical business automation.",
    initials: "RV",
  },
  {
    number: "02",
    name: "Akhil Bellam",
    role: "Digital Marketing",
    description:
      "Driving digital marketing, brand visibility and growth strategies for RAM Automation.",
    initials: "AB",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            The Team
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The people behind
            <br />
            <span className="text-orange-500">the work.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-slate-400">
                  {member.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
              </div>

              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-2xl font-bold text-white shadow-lg">
                  {member.initials}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 font-medium text-orange-500">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-base leading-7 text-slate-600">
                {member.description}
              </p>

              <div className="mt-8 h-px w-full bg-slate-200" />

              <div className="mt-5 text-sm font-medium text-slate-400">
                RAM Automation
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}