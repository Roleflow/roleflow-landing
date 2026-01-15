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
          <div className="h-10 w-10 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg">
            <img src="/logo.png" alt="Roleflow" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">ROLEFLOW</span>
        </div>
        <div className="flex items-center gap-8">
            <a href="#system" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition">The Infrastructure</a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-100 transition-all">
            Portal Login
            </button>
        </div>
      </nav>

      {/* 2. HERO SECTION + VSL CENTER-STAGE */}
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

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Roleflow installs a 24/7 AI Sales infrastructure into your Instagram DMs that qualifies leads and books meetings in under 60 seconds.
          </p>
        </div>

        {/* VSL VIDEO CONTAINER */}
        <div className="relative group mx-auto max-w-4xl">
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
           <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* VSL PLACEHOLDER - PASTE YOUR EMBED HERE */}
              <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Play fill="white" size={24} className="ml-1" />
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">VSL Playback Pending</p>
              </div>
           </div>
        </div>

        <div className="pt-8">
            <a href="#onboard" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs hover:text-orange-500 transition-colors">
                Scroll to Eligibility Check <ChevronRight size={16} />
            </a>
        </div>
      </section>

      {/* 3. SYSTEM OUTLINE: THE INFRASTRUCTURE */}
      <section id="system" className="py-32 bg-white text-slate-950 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20 text-center lg:text-left space-y-4">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">The System <br/>Outline.</h2>
             <p className="text-slate-500 font-bold max-w-md">Our proprietary Trinity of Agents manages the entire sales lifecycle autonomously.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <SystemCard 
               num="01" 
               icon={<Search className="text-indigo-600" />} 
               title="ICP Scraper" 
               desc="Automatically extracts high-ticket accounts running active ads and identifies speed-to-lead gaps in their DMs." 
             />
             <SystemCard 
               num="02" 
               icon={<Send className="text-indigo-600" />} 
               title="Outreach Agent" 
               desc="Initiates contact using high-status openers. Converts followers and cold profiles into active sales conversations." 
             />
             <SystemCard 
               num="03" 
               icon={<MessageCircle className="text-indigo-600" />} 
               title="Inbound Setter" 
               desc="The 24/7 brain. Qualifies leads based on your budget requirements and dispatches your calendar link instantly." 
             />
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE MODEL SECTION */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">The 5% <br/>Model.</h2>
                <div className="space-y-4">
                    <BenefitItem text="Zero upfront setup or management fees." />
                    <BenefitItem text="Direct attribution via Roleflow Dashboard." />
                    <BenefitItem text="We only earn when a deal is successfully closed." />
                </div>
            </div>
            <div className="bg-[#0F172A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Performance Fee</p>
                <div className="text-8xl font-black tracking-tighter">5%</div>
                <p className="text-[11px] text-slate-500 mt-4 leading-relaxed font-bold uppercase">Applied to gross sales generated by the AI Workforce.</p>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            </div>
         </div>
      </section>

      {/* 5. ELIGIBILITY FORM */}
      <section id="onboard" className="py-32 bg-[#020617] text-white">
         <div className="max-w-3xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-4">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Check <br/>Eligibility.</h2>
               <p className="text-slate-400 font-medium text-lg">Determine if your agency volume qualifies for 24/7 sales operations.</p>
            </div>

            <form onSubmit={handleQualification} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-2xl text-left space-y-8 backdrop-blur-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Agency Name</label>
                     <input name="name" required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Business Name" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Instagram Handle</label>
                     <input name="handle" required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="@yourhandle" />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Current Monthly Revenue</label>
                     <select name="revenue" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                        <option>$0 - $10k</option>
                        <option>$10k - $30k</option>
                        <option>$30k - $100k</option>
                        <option>$100k+</option>
                     </select>
                  </div>
               </div>

               <button 
                 disabled={isSubmitting}
                 className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl disabled:opacity-50"
               >
                 {isSubmitting ? "Syncing Logic..." : "Continue to Calendar"} <ChevronRight size={16} />
               </button>
            </form>
         </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">
         Roleflow.io © 2026 • Proprietary Sales Intelligence
      </footer>
    </div>
  );
}

// UI COMPONENTS
function SystemCard({ num, icon, title, desc }: any) {
   return (
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-transparent hover:border-b-indigo-600">
         <div className="flex justify-between items-start mb-8">
            <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{icon}</div>
            <span className="text-4xl font-black text-slate-100 italic tracking-tighter">{num}</span>
         </div>
         <h4 className="font-black text-xl uppercase tracking-tighter mb-3">{title}</h4>
         <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
   )
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-500" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{text}</span>
        </div>
    )
}

function MessageCircle({ size, className }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}
