const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-[#050d2b] to-secondary py-20 text-white">
    {/* Background Glow */}
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[140px]" />
    </div>

    {/* Heading */}
    <div className="relative mx-auto max-w-5xl px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
        Our Promise
      </p>
      <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight md:text-4xl">
        Building a modern, reliable, and people-first healthcare experience.
      </h2>
      <p className="mt-4 text-sm text-white/70">
        As a growing healthcare provider, our commitment starts with trust,
        transparency, and dedicated support for every patient who chooses us.
      </p>
    </div>

    {/* Value Cards */}
    <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
        <p className="text-xl font-semibold text-white">Patient-First Care</p>
        <p className="mt-3 text-sm text-white/80">
          Every decision we make is guided by compassion, clarity, and genuine support.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
        <p className="text-xl font-semibold text-white">Verified Professionals</p>
        <p className="mt-3 text-sm text-white/80">
          Our team consists of certified caregivers, nurses, and specialists you can rely on.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
        <p className="text-xl font-semibold text-white">Transparent Process</p>
        <p className="mt-3 text-sm text-white/80">
          No hidden fees, no confusion — just clear communication and honest service.
        </p>
      </div>

      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-primary/40">
        <p className="text-xl font-semibold text-white">Always Improving</p>
        <p className="mt-3 text-sm text-white/80">
          As a new company, we’re focused on learning, growing, and elevating care every day.
        </p>
      </div>
    </div>
  </section>
);

export default Stats;