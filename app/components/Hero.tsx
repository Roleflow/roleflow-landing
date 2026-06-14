export default function Hero() {
  return (
    <section className="pt-48 pb-24 text-center px-4">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-brandMuted mb-8">
        <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981]"></span>
        System Status: 100% Operational
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight">
        Enterprise-Grade AI Infrastructure <br />
        for <span className="text-gradient">Instagram Acquisition</span>
      </h1>
      
      <p className="text-lg text-brandMuted max-w-2xl mx-auto mb-10">
        Stop losing $10k+/month to slow DMs. RoleFlow installs a proprietary AI workforce that qualifies leads and books high-ticket meetings in under 60 seconds.
      </p>
      
      <a href="#audit" className="bg-neon-gradient text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition inline-block">
        Run Revenue Audit
      </a>
    </section>
  );
}
