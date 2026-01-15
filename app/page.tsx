'use client';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, TrendingUp, 
  ShieldCheck, MessageSquare, Clock, ChevronRight,
  Database, Target, BarChart3, Globe, Lock, Search, Send, Video
} from "lucide-react";

export default function LandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQualification = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // 1. SEND DATA TO YOUR CRM (roleflow.app)
    try {
      await fetch('https://www.roleflow.app/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: data.name,
          ig_handle: data.handle,
          revenue: data.revenue,
          status: 'active'
        })
      });
    } catch (err) { console.error("Sync error:", err); }

    // 2. REDIRECT TO GOOGLE CALENDAR
    window.location.href = "https://calendly.com/YOUR_LINK_HERE";
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="p-6 md:p-10 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="h-12 w-12 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg">
            <img src="/logo.png" alt="Roleflow" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">ROLEFLOW</span>
        </div>
        <div className="flex items-center gap-8">
            <a href="#system" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition">The Infrastructure</a>
            <a 
              href="https://roleflow.app" 
              className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-xl shadow-white/5"
            >
              Portal Login
            </a>
        </div>
      </nav>

      {/* 2. HERO SECTION + VSL */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-32 text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Scaling High-Ticket Sales with 24/7 AI Ops</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
            Stop Losing Revenue to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">
              Slow DMs.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-bold leading-relaxed uppercase tracking-tight">
            We install a 24/7 AI Sales infrastructure into your Instagram DMs that qualifies leads and books meetings in under 60 seconds.
          </p>
        </div>

        {/* VSL CENTER-STAGE */}
        <div className="relative group mx-auto max-w-4xl">
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
           <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* THE VSL VIDEO SPACE */}
              <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                    <Video size={32} className="text-white fill-current" />
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Breakdown Video Pending</p>
              </div>
           </div>
        </div>

        <div className="pt-8">
            <a href="#onboard" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs hover:text-orange-500 transition-colors">
                Apply for eligibility <ChevronRight size={16} />
            </a>
        </div>
      </section>

      {/* 3. SYSTEM OUTLINE */}
      <section id="system" className="py-32 bg-white text-slate-950 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20 space-y-4">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">The System <br/>Outline.</h2>
             <div className="h-1.5 w-24 bg-orange-500"></div>
             <p className="text-slate-500 font-black uppercase text-xs tracking-widest pt-4">Proprietary Workforce Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <SystemCard 
               num="01" 
               icon={<Search className="text-indigo-600" />} 
               title="ICP Scraper" 
               desc="Automatically identifies high-ticket accounts running active ads and detects critical speed-to-lead gaps." 
             />
             <SystemCard 
               num="02" 
               icon={<Send className="text-indigo-600" />} 
               title="Outreach Agent" 
               desc="Initiates high-status contact. Converts cold profile traffic and new followers into active sales threads." 
             />
             <SystemCard 
               num="03" 
               icon={<Zap className="text-indigo-600" />} 
               title="Inbound Setter" 
               desc="The 24/7 brain. Qualifies leads based on budget and logic requirements. Dispatches booking links instantly." 
             />
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE MODEL */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Performance <br/>Agreement.</h2>
                <div className="space-y-4">
                    <BenefitItem text="Zero Upfront Management Fees." />
                    <BenefitItem text="Real-Time Dashboard Attribution." />
                    <BenefitItem text="Only pay when a deal is closed." />
                </div>
            </div>
            <div className="bg-[#0F172A] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Agency Standard</p>
                <div className="text-8xl font-black tracking-tighter group-hover:text-orange-500 transition-colors">5%</div>
                <p className="text-[10px] text-slate-500 mt-4 font-black uppercase tracking-[0.2em]">Commission on Gross Revenue Generated</p>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>
         </div>
      </section>

      {/* 5. ELIGIBILITY FORM */}
      <section id="onboard" className="py-32 bg-[#020617] text-white">
         <div className="max-w-3xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-4">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Check <br/>Eligibility.</h2>
               <p className="text-slate-400 font-bold text-lg uppercase tracking-tight">Qualify for the 24/7 AI Setter infrastructure.</p>
            </div>

            <form onSubmit={handleQualification} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-2xl text-left space-y-8 backdrop-blur-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Agency Name</label>
                     <input name="name" required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none uppercase placeholder:opacity-20" placeholder="Business Name" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Instagram Handle</label>
                     <input name="handle" required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none uppercase placeholder:opacity-20" placeholder="@yourhandle" />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Monthly Revenue</label>
                     <select name="revenue" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none font-black uppercase">
                        <option>$0 - $10k</option>
                        <option>$10k - $30k</option>
                        <option>$30k - $100k</option>
                        <option>$100k+</option>
                     </select>
                  </div>
               </div>

               <button 
                 disabled={isSubmitting}
                 className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl disabled:opacity-50"
               >
                 {isSubmitting ? "Syncing Logic..." : "Continue to Calendar"} <ChevronRight size={16} />
               </button>
            </form>
         </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">
         Roleflow.io © 2026 • Performance Sales Intelligence
      </footer>
    </div>
  );
}

// UI COMPONENTS
function SystemCard({ num, icon, title, desc }: any) {
   return (
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group border-b-8 border-b-transparent hover:border-b-indigo-600">
         <div className="flex justify-between items-start mb-8">
            <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">{icon}</div>
            <span className="text-4xl font-black text-slate-100 tracking-tighter leading-none">{num}</span>
         </div>
         <h4 className="font-black text-xl uppercase tracking-tighter mb-4">{title}</h4>
         <p className="text-sm text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{desc}</p>
      </div>
   )
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-emerald-500" />
            <span className="text-sm font-black text-slate-700 uppercase tracking-tighter">{text}</span>
        </div>
    )
}
