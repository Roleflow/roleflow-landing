'use client';
import { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  ChevronRight
} from "lucide-react";

export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false);

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
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: THE HOOK */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">New: Pay-Per-Result Pricing is Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]">
            Stop Losing Revenue to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500 italic">
              Slow DMs.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Roleflow works while you sleep. Our AI qualifies leads, answers complex questions, and books meetings instantly. **Pay only for results.**
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#apply" className="bg-white text-black px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 transition-all group">
              Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => setShowVideo(true)}
              className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                 <Play fill="white" size={14} className="ml-0.5" />
              </div>
              Watch the 2-min breakdown
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CONVERSATION PREVIEW (GHL STYLE) */}
        <div className="relative group">
           {/* Background Glow */}
           <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
           
           <div className="relative bg-[#0F172A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              {/* Card Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                       <div className="h-4 w-4 rounded-full bg-indigo-500 animate-pulse"></div>
                    </div>
                    <div>
                       <p className="text-sm font-bold">Potential Lead</p>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Now</p>
                    </div>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                       <CheckCircle2 size={12} className="text-emerald-500" />
                    </div>
                    <div className="text-right pr-1">
                       <p className="text-[8px] font-black text-white uppercase tracking-widest">New Meeting Booked</p>
                       <p className="text-[8px] font-bold text-emerald-500">Premium Lead • €2,500 Potential</p>
                    </div>
                 </div>
              </div>

              {/* Chat Canvas */}
              <div className="flex-1 p-8 space-y-6">
                 {/* Lead Message */}
                 <div className="flex justify-end animate-in slide-in-from-right duration-700">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-4 rounded-3xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-xl">
                       Yo bro, saw the clips. 🚀 That aesthetic is crazy. How much to hop on?
                    </div>
                 </div>
                 
                 {/* AI Message */}
                 <div className="space-y-2 animate-in slide-in-from-left duration-700 delay-300">
                    <div className="flex items-center gap-2 ml-2">
                       <MessageSquare size={10} className="text-slate-500" />
                       <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Roleflow AI</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none max-w-[80%] text-sm font-medium text-slate-300 shadow-inner">
                       Ayy appreciate you fam! 👊 We barely keeping up with demand tbh. You ready to scale fr?
                    </div>
                 </div>

                 {/* Lead Message 2 */}
                 <div className="flex justify-end animate-in slide-in-from-right duration-700 delay-1000">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-4 rounded-3xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-xl">
                       100%. Tired of these low quality leads via ads.
                    </div>
                 </div>

                 {/* AI Message 2 */}
                 <div className="space-y-2 animate-in slide-in-from-left duration-700 delay-1500">
                    <div className="flex items-center gap-2 ml-2">
                       <MessageSquare size={10} className="text-slate-500" />
                       <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Roleflow AI</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none max-w-[80%] text-sm font-medium text-slate-300 shadow-inner">
                       Say less. I got the founder's calendar right here. 📅 Let's get you printed.
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. VSL MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/80 animate-in fade-in duration-300">
           <div className="max-w-5xl w-full aspect-video bg-slate-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition uppercase font-black text-[10px] tracking-widest"
              >
                Close breakdown
              </button>
              {/* Replace with your Loom/YouTube iFrame */}
              <div className="w-full h-full flex items-center justify-center">
                 <p className="text-slate-500 font-mono text-xs italic">VSL Playback Engine Connecting...</p>
              </div>
           </div>
        </div>
      )}

      {/* 4. QUESTIONNAIRE SECTION */}
      <section id="apply" className="py-32 bg-white rounded-t-[4rem] text-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-black tracking-tight">Step 1: Performance Audit</h2>
             <p className="text-slate-500 font-medium text-lg">See if your agency volume qualifies for our 5% commission model.</p>
          </div>
          
          <div className="bg-slate-50 rounded-[3rem] p-4 md:p-10 border border-slate-100 shadow-inner min-h-[600px] flex items-center justify-center">
             {/* PASTE JOTFORM EMBED CODE HERE */}
             <div className="text-center space-y-6">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                   <ShieldCheck className="text-indigo-600" />
                </div>
                <p className="text-slate-400 font-mono text-xs">Jotform Neural Bridge Syncing...</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
