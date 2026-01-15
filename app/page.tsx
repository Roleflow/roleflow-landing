'use client';
import { useState } from 'react';
import { 
  Play, ArrowRight, CheckCircle2, Zap, TrendingUp, 
  ShieldCheck, MessageSquare, Clock, ChevronRight,
  Database, Target, BarChart3, Globe, Lock
} from "lucide-react";

export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="p-6 md:p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg group-hover:shadow-orange-500/20 transition-all">
            <img src="/logo.png" alt="Roleflow" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-orange-400 transition-all">ROLEFLOW</span>
        </div>
        <div className="flex items-center gap-6">
            <a href="#apply" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition">The 5% Model</a>
            <button className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md">
            Client Login
            </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Now Auditing High-Ticket Operations for 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.92]">
            Stop Losing Revenue to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500 italic">
              Slow DMs.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Roleflow installs a 24/7 AI Sales infrastructure into your Instagram DMs that qualifies leads and books meetings in &lt; 60 seconds. <br/><span className="text-white font-bold italic underline decoration-orange-500 decoration-2 underline-offset-4">0% Upfront. Pay only for results.</span>
          </p>

          <div className="flex flex-col sm:row gap-4">
            <a href="#apply" className="bg-white text-black px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 transition-all group">
              Apply for an Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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

        {/* CHAT MIRROR VISUAL (RIGHT SIDE) */}
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
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Processing @blockchainwizard_</p>
                    </div>
                 </div>
                 <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Qualified (5%)</p>
                 </div>
              </div>
              <div className="flex-1 p-8 space-y-6">
                 <Bubble role="user" text="Yo bro, saw the clips. 🚀 Aesthetic is crazy. How much?" />
                 <Bubble role="agent" text="Ayy appreciate you fam! We barely keeping up with demand. You ready to scale fr?" />
                 <Bubble role="user" text="100%. Tired of low quality leads via ads." />
                 <Bubble role="agent" text="Say less. I got the founder's calendar right here. 📅 Let's get you printed." />
              </div>
              <div className="p-6 bg-indigo-600/10 border-t border-white/5 text-center">
                 <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Roleflow Neural Mirror v2.1</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. THE "WHY" SECTION: LEAD DECAY MATH */}
      <section className="py-24 bg-white text-slate-900 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="col-span-1 space-y-6">
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                 Human Setters <br/>Are the <span className="text-orange-500 italic">Bottleneck.</span>
               </h2>
               <p className="text-slate-500 font-medium leading-relaxed">
                 Data shows that leads cooling off for even 10 minutes drops your close rate by 391%. Humans sleep, miss notifications, and lose focus. AI doesn't.
               </p>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
               <OpsCard 
                 icon={<Clock className="text-indigo-600" />} 
                 title="60s Speed to Lead" 
                 desc="Our infrastructure initiates qualification the moment a lead lands." 
               />
               <OpsCard 
                 icon={<BarChart3 className="text-indigo-600" />} 
                 title="Verified Attribution" 
                 desc="Track every AI-generated appointment in your Roleflow dashboard." 
               />
               <OpsCard 
                 icon={<Lock className="text-indigo-600" />} 
                 title="0% Upfront Risk" 
                 desc="We don't charge management fees. We only win when you win." 
               />
               <OpsCard 
                 icon={<Target className="text-indigo-600" />} 
                 title="Niche Neutral" 
                 desc="Trained on 500+ high-ticket objection handling playbooks." 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MECHANISM: THE 4 PILLARS */}
      <section className="py-32 bg-[#F8FAFC] text-slate-900">
         <div className="max-w-4xl mx-auto px-10 text-center space-y-16">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic">The Infrastructure.</h2>
               <p className="text-slate-500 font-medium max-w-xl mx-auto italic">Proprietary logic engineered for high-status closing.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <PillarItem num="1" title="Persona" desc="We clone your top setter's tone, vocabulary, and high-status sales psychological profile." />
               <PillarItem num="2" title="Knowledge" desc="We ingest your entire offer, VSL, and FAQ docs into the agent's real-time brain." />
               <PillarItem num="3" title="Logic" desc="Step-by-step linear qualification. Revenue check, bottleneck audit, then booking." />
               <PillarItem num="4" title="Properties" desc="Advanced jitter logic and daily limits to ensure human-like behavior on Instagram." />
            </div>
         </div>
      </section>

      {/* 5. FINAL CTA / JOTFORM APPLY */}
      <section id="apply" className="py-32 bg-[#020617] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic">Apply for <span className="text-orange-500">Audit.</span></h2>
             <p className="text-slate-400 font-medium text-lg">We only partner with 3 agencies per month to ensure 100% ROI.</p>
          </div>
          
          <div className="bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-4 md:p-10 shadow-2xl relative">
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-indigo-600 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl">
               Step 1: The Questionnaire
             </div>
             {/* VSL SPACE / JOTFORM PLACEHOLDER */}
             <div className="min-h-[650px] flex items-center justify-center">
                {/* 
                   PASTE YOUR JOTFORM EMBED CODE HERE 
                   (Go to Jotform > Publish > Embed)
                */}
                <div className="text-center space-y-4 opacity-50">
                    <Database size={48} strokeWidth={1} className="mx-auto" />
                    <p className="text-xs font-mono">Roleflow Data Bridge Loading...</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
         Roleflow.io © 2026 • Performance-Only Sales Operations
      </footer>

      {/* VIDEO MODAL (HIDDEN) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/90 animate-in fade-in duration-300">
           <div className="max-w-5xl w-full aspect-video bg-slate-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <button onClick={() => setShowVideo(false)} className="absolute top-8 right-8 text-white/40 hover:text-white uppercase font-black text-[10px] tracking-widest z-50">Close [x]</button>
              {/* THE VSL PLACEHOLDER */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-orange-900/20">
                 <p className="text-slate-400 font-mono text-xs italic uppercase tracking-[0.5em] animate-pulse">VSL Recording Pending...</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

// UI COMPONENTS
function Bubble({ role, text }: { role: 'agent' | 'user', text: string }) {
  const isAgent = role === 'agent';
  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] p-4 rounded-3xl text-xs font-bold leading-relaxed shadow-sm ${
        isAgent ? 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none' : 'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-tr-none'
      }`}>
        {isAgent && <p className="text-[8px] uppercase tracking-widest text-indigo-400 mb-1">AI Setter</p>}
        {text}
      </div>
    </div>
  );
}

function OpsCard({ icon, title, desc }: any) {
    return (
        <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-200 hover:border-indigo-600 transition-all hover:shadow-xl group">
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="font-black text-lg mb-2 uppercase italic tracking-tight">{title}</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    )
}

function PillarItem({ num, title, desc }: any) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-indigo-100 italic">{num}.</span>
                <h4 className="font-black text-xl uppercase tracking-tighter">{title}</h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed pl-10 border-l border-indigo-100">{desc}</p>
        </div>
    )
}
