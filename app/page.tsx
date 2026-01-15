'use client';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, TrendingUp, ShieldCheck, 
  MessageSquare, Clock, ChevronRight, Target, BarChart3, 
  Search, Send, Video, Calendar, Lock, User
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); // 1: Form, 2: Result
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({ name: '', handle: '', revenue: '' });

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const processQualification = async (e: any) => {
    e.preventDefault();
    
    // THE 5% MODEL FILTER: Only $10k+ revenue is qualified for active setting
    const qualified = formData.revenue !== '$0 - $10k';
    setIsQualified(qualified);

    // 1. SYNC TO CRM (roleflow.app)
    try {
      await fetch('https://www.roleflow.app/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          ig_handle: formData.handle,
          revenue: formData.revenue,
          status: qualified ? 'qualified' : 'active'
        })
      });
    } catch (err) { console.error("Sync failed"); }

    setStep(2);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* --- NAVIGATION (SAME AS BEFORE) --- */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg">
            <img src="/logo.png" alt="Logo" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition">Portal Login</a>
      </nav>

      {/* --- HERO / VSL (STAYING CENTER STAGE) --- */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-32 text-center space-y-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
          Stop Losing Revenue to <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">Slow DMs.</span>
        </h1>
        <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-center space-y-4">
                <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Video size={32} className="text-white fill-current" />
                </div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">VSL Playback Pending</p>
            </div>
        </div>
      </section>

      {/* --- THE GATED QUALIFIER SECTION --- */}
      <section id="onboard" className="py-32 bg-white text-slate-950 rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto px-6">
          
          {step === 1 ? (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="text-center space-y-4">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Check <br/>Eligibility.</h2>
                  <p className="text-slate-500 font-bold uppercase tracking-tight">Step 1: Analyze your current sales volume</p>
               </div>

               <form onSubmit={processQualification} className="bg-slate-50 border border-slate-200 p-10 md:p-16 rounded-[3.5rem] shadow-sm space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Real Name</label>
                        <input name="name" required onChange={handleInput} className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none uppercase" placeholder="Full Name" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">IG Handle</label>
                        <input name="handle" required onChange={handleInput} className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none uppercase" placeholder="@handle" />
                     </div>
                     <div className="col-span-1 md:col-span-2 space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Current Monthly Revenue</label>
                        <select name="revenue" required onChange={handleInput} className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none font-black uppercase">
                           <option value="">Select Range</option>
                           <option>$0 - $10k</option>
                           <option>$10k - $30k</option>
                           <option>$30k - $100k</option>
                           <option>$100k+</option>
                        </select>
                     </div>
                  </div>

                  <button className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl">
                    Run Compatibility Check <ChevronRight size={18} />
                  </button>
               </form>
            </div>
          ) : (
            <div className="space-y-12 animate-in zoom-in-95 duration-500 text-center py-10">
               {isQualified ? (
                 <>
                    <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-emerald-600" />
                    </div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter">Eligibility Confirmed.</h2>
                    <p className="text-slate-500 font-bold uppercase max-w-md mx-auto">Your agency meets our 5% commission volume requirements. Grab a time below.</p>
                    
                    {/* GOOGLE CALENDAR EMBED */}
                    <div className="mt-12 bg-slate-50 border-2 border-indigo-500/20 rounded-[3rem] p-2 overflow-hidden shadow-2xl">
                       <iframe 
                         src="https://calendly.com/YOUR_LINK_HERE" 
                         width="100%" 
                         height="700" 
                         frameBorder="0"
                       ></iframe>
                    </div>
                 </>
               ) : (
                 <div className="max-w-xl mx-auto space-y-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
                    <ShieldCheck size={48} className="mx-auto text-indigo-600" />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Waitlist Active.</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Based on your revenue, our managed service logic isn't a fit yet. We recommend following our content for scaling protocols. We have logged your handle for future openings.
                    </p>
                    <button onClick={() => setStep(1)} className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline">Re-enter details</button>
                 </div>
               )}
            </div>
          )}

        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100 text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
         Roleflow.io © 2026 • Performance Sales Intelligence
      </footer>
    </div>
  );
}
