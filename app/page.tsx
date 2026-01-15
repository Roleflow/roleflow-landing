'use client';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); // 1: Landing, 2: Form, 3: Outcome
  const [isQualified, setIsQualified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  const handleInput = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const processEligibility = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // THE ARCHITECT'S HARD-GATE (Option B or higher required for all 4)
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const passClosingRate = formData.closingRate !== 'A) < 15%';

    const finalQualified = passRevenue && passLeadFlow && passOfferSize && passClosingRate;
    setIsQualified(finalQualified);

    // SYNC TO CRM (roleflow.app)
    try {
      await fetch('https://www.roleflow.app/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, status: finalQualified ? 'qualified' : 'ineligible' })
      });
    } catch (err) { console.error("Neural Sync Error"); }

    setStep(3);
    window.scrollTo(0, 0);
    setIsSubmitting(false);
  };

  if (step === 3) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-center uppercase">
        {isQualified ? (
            <div className="max-w-4xl w-full space-y-10 animate-in zoom-in-95 duration-500">
                <div className="space-y-4">
                    <CheckCircle2 size={60} className="text-emerald-500 mx-auto mb-6" />
                    <h2 className="text-6xl font-black tracking-tighter">PROTOCOL ACCEPTED.</h2>
                    <p className="text-slate-400 font-bold text-xs tracking-[0.2em]">AGENCY MEETS 5% COMMISSION REQUIREMENTS. SELECT YOUR BRIEFING TIME.</p>
                </div>
                <div className="bg-white rounded-[3rem] p-2 shadow-2xl overflow-hidden min-h-[700px] border-8 border-indigo-600/20">
                    <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="700" frameBorder="0"></iframe>
                </div>
            </div>
        ) : (
            <div className="max-w-md w-full bg-white rounded-[3rem] p-12 space-y-8 text-slate-950 shadow-2xl">
                <Lock size={48} className="mx-auto text-indigo-600" />
                <h2 className="text-2xl font-black tracking-tighter">ACCESS DENIED.</h2>
                <p className="text-slate-500 text-[10px] font-bold leading-loose tracking-[0.2em]">
                    CURRENT METRICS DO NOT MEET THE 5% INFRASTRUCTURE REQUIREMENTS. WE HAVE LOGGED YOUR DATA FOR FUTURE RE-EVALUATION ONCE YOU SCALE.
                </p>
                <button onClick={() => setStep(1)} className="text-[10px] font-black text-indigo-600 tracking-widest hover:underline border-b-2 border-indigo-600 pb-1">RETURN HOME</button>
            </div>
        )}
    </div>
  );

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-orange-500 overflow-x-hidden uppercase">
      
      {/* 1. NAVIGATION */}
      <nav className="p-8 md:p-10 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full border-2 border-orange-500/50 p-0.5 shadow-lg shadow-orange-500/20">
            <img src="/logo.png" alt="Logo" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl shadow-white/5">PORTAL LOGIN</a>
      </nav>

      {/* 2. HERO SECTION + MAD CHAT */}
      <section className="max-w-7xl mx-auto px-10 pt-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">AI Sales Infrastructure v2.1 Active</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white">
            STOP LOSING <br/>REVENUE TO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">SLOW DMs.</span>
          </h1>
          <p className="text-slate-400 text-xl font-black tracking-tight leading-relaxed max-w-xl">
            WE INSTALL A 24/7 AI SALES WORKFORCE INTO YOUR DMS THAT QUALIFIES LEADS AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 decoration-2 underline-offset-8">0% UPFRONT.</span>
          </p>
          <button onClick={() => setStep(2)} className="bg-white text-black px-12 py-7 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl">
            BOOK ELIGIBILITY CALL <ArrowRight size={20} />
          </button>
        </div>

        {/* THE MAD IG CHAT MIRROR */}
        <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3.5rem] shadow-2xl overflow-hidden min-h-[600px] flex flex-col group">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div><p className="text-sm font-black">LIVE MIRROR</p><p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">PROCESSING @BLOCKCHAINWIZARD_</p></div>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">QUALIFIED (5%)</div>
            </div>
            <div className="flex-1 p-10 space-y-10">
                <div className="flex justify-end"><div className="bg-indigo-600 p-6 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[85%]">YO BRO, SAW THE CLIPS. 🚀 THAT AESTHETIC IS CRAZY. HOW MUCH TO HOP ON?</div></div>
                <div className="space-y-2"><p className="text-[8px] font-black text-indigo-400 ml-4">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-6 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[90%]">AYY APPRECIATE YOU FAM! 👊 WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE FR?</div></div>
                <div className="flex justify-end"><div className="bg-indigo-600 p-6 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[85%]">100%. TIRED OF THESE LOW QUALITY LEADS VIA ADS.</div></div>
                <div className="space-y-2"><p className="text-[8px] font-black text-indigo-400 ml-4">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-6 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[90%]">SAY LESS. I GOT THE FOUNDER'S CALENDAR RIGHT HERE. 📅 LET'S GET YOU PRINTED.</div></div>
            </div>
        </div>
      </section>

      {/* 3. VSL SECTION */}
      <section className="bg-white py-32 rounded-t-[5rem] text-center space-y-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter">THE BREAKDOWN.</h2>
            <p className="text-slate-500 font-black tracking-widest text-xs">WATCH THE FULL 5% PERFORMANCE INFRASTRUCTURE OVERVIEW</p>
        </div>
        <div className="relative group max-w-5xl mx-auto px-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video bg-slate-900 rounded-[3rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                    <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl"><Video size={32} className="text-white fill-current" /></div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">VSL PLAYBACK PENDING</p>
                </div>
            </div>
        </div>
        <button onClick={() => setStep(2)} className="bg-slate-900 text-white px-16 py-7 rounded-3xl font-black text-sm tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-black transition-all">
            APPLY FOR ELIGIBILITY <ArrowRight className="inline ml-2" size={18} />
        </button>
      </section>

      {/* 4. SYSTEM OUTLINE SECTION */}
      <section id="system" className="py-32 bg-[#F8FAFC] text-slate-950 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20 space-y-4">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">THE SYSTEM <br/>OUTLINE.</h2>
             <div className="h-2 w-24 bg-orange-500"></div>
             <p className="text-slate-500 font-black uppercase text-xs tracking-widest pt-4 font-bold">Proprietary AI Sales Workforce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <SystemCard num="01" icon={<Search className="text-indigo-600" />} title="ICP SCRAPER" desc="AUTOMATICALLY EXTRACTS HIGH-TICKET ACCOUNTS RUNNING ADS AND IDENTIFIES SPEED-TO-LEAD GAPS IN THEIR DMS." />
             <SystemCard num="02" icon={<Send className="text-indigo-600" />} title="OUTREACH AGENT" desc="INITIATES HIGH-STATUS CONTACT. CONVERTS COLD TRAFFIC AND FOLLOWERS INTO ACTIVE SALES THREADS." />
             <SystemCard num="03" icon={<Zap className="text-indigo-600" />} title="INBOUND SETTER" desc="THE 24/7 BRAIN. QUALIFIES LEADS BASED ON BUDGET AND DISPATCHES BOOKING LINKS INSTANTLY." />
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY OVERLAY (STEP 2) */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 overflow-y-auto">
              <form onSubmit={processEligibility} className="max-w-3xl w-full bg-white rounded-[4rem] p-10 md:p-20 space-y-12 shadow-2xl my-auto border-t-8 border-orange-500">
                  <div className="text-center space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter">ELIGIBILITY CHECK</h2>
                    <p className="text-[10px] font-black text-slate-400 tracking-widest">STEP 1: VERIFY SYSTEM COMPATIBILITY</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormInput label="NAME" name="name" placeholder="FULL NAME" onChange={handleInput} />
                      <FormInput label="INSTAGRAM" name="handle" placeholder="@HANDLE" onChange={handleInput} />
                      <FormInput label="EMAIL" name="email" type="email" placeholder="EMAIL@AGENCY.COM" onChange={handleInput} />
                      <FormInput label="PHONE" name="phone" type="tel" placeholder="+34..." onChange={handleInput} />
                      
                      <FormSelect label="DAILY DM LEAD FLOW" name="leadFlow" onChange={handleInput} options={['0 - 10', '10 - 20', '20 - 40', '40+']} />
                      <FormSelect label="DAILY NEW FOLLOWERS" name="followers" onChange={handleInput} options={['0 - 10', '10 - 20', '20 - 40', '40+']} />
                      <FormSelect label="MONTHLY REVENUE" name="revenue" onChange={handleInput} options={['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+']} />
                      <FormSelect label="OFFER SIZE" name="offerSize" onChange={handleInput} options={['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+']} />
                      
                      <div className="col-span-1 md:col-span-2">
                          <FormSelect label="CLOSING RATE" name="closingRate" onChange={handleInput} options={['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+']} />
                      </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-slate-900 text-white py-7 rounded-[2rem] font-black text-sm tracking-[0.4em] hover:bg-black transition shadow-2xl uppercase">Run Logic Check</button>
                    <button type="button" onClick={() => setStep(1)} className="w-full text-[10px] font-black text-slate-400 hover:text-slate-600 transition">ABORT APPLICATION</button>
                  </div>
              </form>
          </div>
      )}

      <footer className="py-24 text-center text-[9px] font-black text-slate-600 tracking-[0.5em] border-t border-white/5">
         ROLEFLOW.IO © 2026 • PERFORMANCE SALES INTELLIGENCE • SPAIN (EU)
      </footer>
    </div>
  );
}

// UI COMPONENTS
function FormInput({ label, name, placeholder, onChange, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2">{label}</label>
            <input name={name} type={type} required onChange={onChange} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-black focus:ring-4 focus:ring-indigo-500/10 outline-none uppercase shadow-inner" placeholder={placeholder} />
        </div>
    )
}

function FormSelect({ label, name, options, onChange }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2">{label}</label>
            <select name={name} required onChange={onChange} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-black focus:ring-4 focus:ring-indigo-500/10 outline-none appearance-none cursor-pointer uppercase shadow-inner">
                <option value="">SELECT</option>
                {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    )
}

function SystemCard({ num, icon, title, desc }: any) {
    return (
       <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group border-b-8 border-b-transparent hover:border-b-indigo-600">
          <div className="flex justify-between items-start mb-10">
             <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">{icon}</div>
             <span className="text-5xl font-black text-slate-100 tracking-tighter leading-none">{num}</span>
          </div>
          <h4 className="font-black text-2xl uppercase tracking-tighter mb-4">{title}</h4>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-loose">{desc}</p>
       </div>
    )
 }
