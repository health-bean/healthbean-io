import { TEAM } from "@/lib/content";

export function Team() {
  return (
    <section
      id="team"
      className="border-b border-olive-900/10 px-6 py-section md:px-12"
    >
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
          {TEAM.label}
        </span>
        <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
          {TEAM.headline}
        </h2>
      </div>
      <div className="mx-auto mt-10 flex max-w-md flex-col gap-8 md:max-w-xl md:flex-row md:gap-12">
        {TEAM.members.map((member) => (
          <div key={member.name} className="flex-1 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-olive-400 to-olive-700">
              <span className="font-display text-2xl font-bold text-white">
                {member.initials}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-semibold">
              {member.name}
            </h3>
            <p className="text-xs font-semibold text-olive-600">{member.role}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
