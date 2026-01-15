import { Play, CheckCircle2, TrendingUp, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen font-sans selection:bg-orange-500">
      
      {/* 1. NAV / LOGO */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500 p-0.5">
            <img src="/logo.png" alt="Roleflow" className="rounded-full h-full w-full object-cover" />
          </div>
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <button className="hidden md:block bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition">
          Client Login
        </button>
      </nav>

      {/* 2. HERO / VSL SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24 text-center space-y-10">
        <div className="space-y-4">
           <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              Now Auditing High-Ticket Agencies for 2026
           </span>
           <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-orange-500 italic">Lead Decay</span>. <br/>
              Automate the Setter.
           </h1>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              We install a 24/7 AI Sales infrastructure into your Instagram DMs that qualifies and books leads in under 60 seconds. **0% Upfront. 5% Commission.**
           </p>
        </div>

        {/* VSL PLAYER MOCKUP */}
        <div className="aspect-video w-full rounded-[3rem] bg-slate-800 border-4 border-white/5 shadow-2xl relative overflow-hidden group cursor-pointer">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
              <div className="h-20 w-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                 <Play className="text-white fill-white ml-1" />
              </div>
           </div>
           {/* Replace with your Loom/Wistia/Vimeo embed */}
           <div className="absolute bottom-6 left-10 right-10 flex justify-between items-center opacity-60">
              <p className="text-[10px] font-bold uppercase tracking-widest">Case Study: 391% Conversion Spike</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">04:12</p>
           </div>
        </div>
      </section>

      {/* 3. THE QUALIFIER / BOOKING SECTION */}
      <section className="bg-white text-slate-900 py-24 rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">Step 1: Performance Audit</h2>
              <p className="text-slate-500 font-medium">Fill out the questionnaire below to see if your lead volume qualifies for our 5% commission model.</p>
           </div>

           {/* JOTFORM EMBED MOCKUP */}
           <div className="bg-slate-50 rounded-[3rem] p-4 md:p-12 border border-slate-100 shadow-inner min-h-[600px] flex items-center justify-center">
              {/* PASTE YOUR JOTFORM EMBED CODE HERE */}
              <p className="text-slate-400 font-mono text-xs italic">Questionnaire & Booking Widget Loading...</p>
           </div>
        </div>
      </section>

    </div>
  );
}
