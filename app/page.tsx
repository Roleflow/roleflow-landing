'use client';
import { useState } from 'react';
import { 
  Play, ArrowRight, CheckCircle2, Zap, TrendingUp, 
  ShieldCheck, MessageSquare, Clock, ChevronRight,
  Database, Target, BarChart3, Globe, Lock, Send
} from "lucide-react";

export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false);
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
    // Replace with your actual booking link
    window.location.href = "https://calendly.com/YOUR_LINK_HERE";
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg shadow-orange-500/10">
            <img src="/logo.png" alt="Roleflow" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic">ROLEFLOW</span>
        </div>
        <button className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md">
          Portal Login
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Scale Your Agency with 24/7 AI Sales Ops</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.92]">
            Stop Losing Revenue to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500 italic">
              Slow DMs.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Roleflow installs a 24/7 AI Sales infrastructure into your Instagram DMs that qualifies leads and books meetings in &lt; 60 seconds. <br/>
            <span className="text-white font-bold italic underline decoration-orange-500 decoration-2 underline-offset-4">0% Upfront. Pay only for results.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#onboard" className="bg-white text-black px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 transition-all group">
              Check Eligibility <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => setShowVideo(true)}
              className="bg-white/5 border border-white/10 px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-xl group"
            >
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Play fill="white" size={14} className="ml-0.5" />
              </div>
              The 2-min Breakdown
            </button>
          </div>
        </div>

        {/* INTERACTIVE CONVO PREVIEW */}
        <div className="relative group">
           <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-50"></div>
           <div className="relative bg-[#0F172A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[550px] flex flex-col">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                       <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-100">Live Acquisition</p>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Mirror</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 p-8 space-y-6">
                 <div className="flex justify-end"><div className="bg-indigo-600 p-4 rounded-3xl rounded-tr-none text-xs font-bold">Yo bro, how much to hop on?</div></div>
                 <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 uppercase ml-2">AI Setter</p><div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none text-xs text-slate-300 font-bold">We work on a 5% commission. You ready to scale?</div></div>
                 <div className="flex justify-end"><div className="bg-indigo-600 p-4 rounded-3xl rounded-tr-none text-xs font-bold">100%. Ads are printing but DMs are slow.</div></div>
                 <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 uppercase ml-2">AI Setter</p><div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none text-xs text-slate-300 font-bold">Say less. Grab a time on the founder's calendar. 📅</div></div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. THE INFRASTRUCTURE (THE 4 PILLARS) */}
      <section className="py-24 bg-white text-slate-900 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                 <h2 className="text-5xl font-black tracking-tighter">Proprietary AI <br/>Infrastructure.</h2>
                 <p className="text-slate-500 font-medium">Built for high-status closing and automated qualification.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FeatureCard icon={<Target className="text-indigo-600" />} title="Persona" desc="Cloning your top human setter's tone." />
                 <FeatureCard icon={<Database className="text-indigo-600" />} title="Knowledge" desc="Real-time access to your offer and FAQs." />
                 <FeatureCard icon={<Zap className="text-indigo-600" />} title="Logic" desc="Linear qualification for 5% deals." />
                 <FeatureCard icon={<ShieldCheck className="text-indigo-600" />} title="Properties" desc="Advanced jitter for human mimicry." />
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE ELIGIBILITY FORM (GATING GOOGLE CALENDAR) */}
      <section id="onboard" className="py-32 bg-[#F8FAFC] text-slate-900">
         <div className="max-w-3xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic">Get Started.</h2>
               <p className="text-slate-500 font-medium">Check your eligibility for the 24/7 AI Setter infrastructure.</p>
            </div>

            <form onSubmit={handleQualification} className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3.5rem] shadow-2xl text-left space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Agency Name</label>
                     <input name="name" required className="w-full bg-slate-50 border-none p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Acme Marketing" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Instagram Handle</label>
                     <input name="handle" required className="w-full bg-slate-50 border-none p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="@yourhandle" />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Current Monthly Revenue</label>
                     <select name="revenue" className="w-full bg-slate-50 border-none p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                        <option>$0 - $10k</option>
                        <option>$10k - $30k</option>
                        <option>$30k - $100k</option>
                        <option>$100k+</option>
                     </select>
                  </div>
               </div>

               <button 
                 disabled={isSubmitting}
                 className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl disabled:opacity-50"
               >
                 {isSubmitting ? "Processing..." : "Continue to Calendar"} <ChevronRight size={16} />
               </button>
            </form>
         </div>
      </section>

      {/* VIDEO MODAL (VSL PLACEHOLDER) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/90 animate-in fade-in duration-300">
           <div className="max-w-5xl w-full aspect-video bg-slate-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <button onClick={() => setShowVideo(false)} className="absolute top-8 right-8 text-white/40 hover:text-white uppercase font-black text-[10px] tracking-widest">Close [x]</button>
              <div className="w-full h-full flex items-center justify-center">
                 <p className="text-slate-400 font-mono text-xs italic tracking-[0.5em] animate-pulse uppercase">VSL Recording Space</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
   return (
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-600 transition-all group">
         <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">{icon}</div>
         <h4 className="font-black text-xs uppercase tracking-widest mb-1">{title}</h4>
         <p className="text-[11px] text-slate-500 font-medium">{desc}</p>
      </div>
   )
}
