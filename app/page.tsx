'use client';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, TrendingUp, ShieldCheck, 
  MessageSquare, Clock, ChevronRight, Target, BarChart3, 
  Search, Send, Video, Calendar, Lock, User, Mail, Phone, Instagram, MousePointer2
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); // 1: Landing, 2: Form, 3: Outcome
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkEligibility = (e: any) => {
    e.preventDefault();
    
    // THE HARD-GATE LOGIC (Requirement B or higher for all 4 metrics)
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const passClosingRate = formData.closingRate !== 'A) < 15%';

    const finalQualified = passRevenue && passLeadFlow && passOfferSize && passClosingRate;
    
    setIsQualified(finalQualified);

    // SYNC TO CRM (roleflow.app)
    fetch('https://www.roleflow.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: finalQualified ? 'qualified' : 'rejected' })
    }).catch(() => null);

    setStep(3);
    window.scrollTo(0, 0);
  };

  if (step === 2) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 uppercase">
        <form onSubmit={checkEligibility} className="max-w-2xl w-full bg-white rounded-[3rem] p-10 md:p-16 space-y-10 shadow-2xl">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Eligibility Check</h2>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Analyze your infrastructure compatibility</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="name" placeholder="Diego Castanedo" onChange={handleInput} icon={<User size={14}/>} />
                <InputField label="IG Account" name="handle" placeholder="@handle" onChange={handleInput} icon={<Instagram size={14}/>} />
                <InputField label="Email" name="email" type="email" placeholder="name@agency.com" onChange={handleInput} icon={<Mail size={14}/>} />
                <InputField label="Phone" name="phone" type="tel" placeholder="+34..." onChange={handleInput} icon={<Phone size={14}/>} />
                
                <SelectField label="Daily DM Lead Flow" name="leadFlow" onChange={handleInput} options={['0 - 10', '10 - 20', '20 - 40', '40+']} />
                <SelectField label="Daily New Followers" name="followers" onChange={handleInput} options={['0 - 10', '10 - 20', '20 - 40', '40+']} />
                <SelectField label="Monthly Revenue" name="revenue" onChange={handleInput} options={['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+']} />
                <SelectField label="Offer Size" name="offerSize" onChange={handleInput} options={['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+']} />
                
                <div className="col-span-1 md:col-span-2">
                    <SelectField label="Current Closing Rate" name="closingRate" onChange={handleInput} options={['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+']} />
                </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs tracking-[0.4em] hover:bg-black transition shadow-xl">
                Run Validation Protocol
            </button>
        </form>
    </div>
  );

  if (step === 3) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 uppercase text-center">
        {isQualified ? (
            <div className="max-w-4xl w-full space-y-10 animate-in zoom-in-95 duration-500">
                <div className="space-y-4">
                    <div className="h-20 w-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                        <CheckCircle2 size={40} className="text-emerald-500" />
                    </div>
                    <h2 className="text-5xl font-black text-white tracking-tighter">Protocol Accepted.</h2>
                    <p className="text-slate-400 font-bold text-xs tracking-[0.2em]">Agency meets 5% commission requirements. Select your briefing time.</p>
                </div>
                <div className="bg-white rounded-[3rem] p-2 shadow-2xl overflow-hidden min-h-[700px]">
                    <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="700" frameBorder="0"></iframe>
                </div>
            </div>
        ) : (
            <div className="max-w-md w-full bg-white rounded-[3rem] p-12 space-y-8 shadow-2xl">
                <Lock size={48} className="mx-auto text-indigo-600" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter">Access Denied.</h2>
                <p className="text-slate-500 text-xs font-bold leading-loose tracking-widest">
                    Your current metrics do not meet our 5% performance requirements. We have logged your handle for future openings.
                </p>
                <button onClick={() => setStep(1)} className="text-[10px] font-black text-indigo-600 tracking-widest hover:underline">Return Home</button>
            </div>
        )}
    </div>
  );

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden uppercase">
      
      {/* 1. NAVIGATION */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg shadow-orange-500/20">
            <img src="/logo.png" alt="Logo" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl">Portal Login</a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black tracking-widest text-indigo-400">24/7 AI SALES INFRASTRUCTURE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.92]">
            Stop Losing Revenue to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">Slow DMs.</span>
          </h1>

          <p className="text-slate-400 text-lg font-black tracking-tight leading-relaxed max-w-xl">
            We install an AI Sales Workforce into your Instagram DMs that qualifies leads and books meetings in &lt; 60 seconds. <br/>
            <span className="text-white underline decoration-orange-500 decoration-2 underline-offset-8">0% Upfront. Pay only for results.</span>
          </p>

          <button onClick={() => setStep(2)} className="bg-white text-black px-12 py-6 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl">
            Book 5% Partnership Call <ArrowRight size={20} />
          </button>
        </div>

        {/* 3. MAD IG CHAT VISUAL (RIGHT SIDE) */}
        <div className="relative group">
           <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-50"></div>
           <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[550px] flex flex-col">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                       <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div>
                       <p className="text-sm font-black text-slate-100">Live Mirror</p>
                       <p className="text-[9px] font-bold text-slate-500 tracking-widest">Processing @blockchainwizard_</p>
                    </div>
                 </div>
                 <div className="bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <ShieldCheck size={12} className="text-orange-500" />
                    <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Qualified (5%)</p>
                 </div>
              </div>
              
              <div className="flex-1 p-8 space-y-8">
                 <div className="flex justify-end"><div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-5 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[80%]">Yo bro, saw the clips. 🚀 That aesthetic is crazy. How much to hop on?</div></div>
                 <div className="space-y-2"><p className="text-[8px] font-black text-indigo-400 tracking-widest ml-4">AI Setter</p><div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[85%]">Ayy appreciate you fam! 👊 We barely keeping up with demand tbh. You ready to scale fr?</div></div>
                 <div className="flex justify-end"><div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-5 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[80%]">100%. Tired of these low quality leads via ads.</div></div>
                 <div className="space-y-2"><p className="text-[8px] font-black text-indigo-400 tracking-widest ml-4">AI Setter</p><div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[85%]">Say less. I got the founder's calendar right here. 📅 Let's get you printed.</div></div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. VSL SECTION */}
      <section className="bg-white py-32 rounded-t-[4rem]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">The 2-Minute <span className="text-orange-500">Breakdown.</span></h2>
                <p className="text-slate-500 font-black text-[10px] tracking-widest">Watch the infrastructure in action</p>
            </div>
            
            <div className="relative group max-w-4xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[2.5rem] blur opacity-30"></div>
                <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
                    <p className="text-[10px] font-black text-slate-500 tracking-[0.5em] animate-pulse">VSL LOADING...</p>
                </div>
            </div>

            {/* CALL TO ACTION BELOW VSL */}
            <div className="pt-10">
                <button onClick={() => setStep(2)} className="bg-slate-900 text-white px-16 py-7 rounded-3xl font-black text-sm tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-black transition-all">
                    Apply to Partner <ArrowRight className="inline ml-2" size={18} />
                </button>
            </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-[9px] font-black text-slate-500 tracking-[0.5em]">
         Roleflow.io © 2026 • Performance Sales Intelligence
      </footer>
    </div>
  );
}

// HELPER UI COMPONENTS
function InputField({ label, name, placeholder, onChange, icon, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2 flex items-center gap-2">{icon} {label}</label>
            <input 
                name={name} type={type} required onChange={onChange}
                className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300" 
                placeholder={placeholder} 
            />
        </div>
    )
}

function SelectField({ label, name, options, onChange }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2">{label}</label>
            <select name={name} required onChange={onChange} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-black focus:ring-4 focus:ring-indigo-500/10 outline-none appearance-none cursor-pointer">
                <option value="">Select Option</option>
                {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    )
}
