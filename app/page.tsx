'use client';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); // 1: Landing, 2: Survey, 3: Outcome
  const [surveyStep, setSurveyStep] = useState(0);
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  const questions = [
    { label: "Basic Identification", type: "fields" },
    { label: "Daily DM Lead Flow", name: "leadFlow", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "Daily New Followers", name: "followers", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "Monthly Revenue", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "High Ticket Offer Size", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] },
    { label: "Average Closing Rate", name: "closingRate", options: ['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+'] }
  ];

  const handleInput = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = async () => {
    // HARD-GATE PROTOCOL: Requirement B or higher
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const passClosingRate = formData.closingRate !== 'A) < 15%';

    const qualified = passRevenue && passLeadFlow && passOfferSize && passClosingRate;
    setIsQualified(qualified);

    // CRM SYNC
    fetch('https://www.roleflow.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: qualified ? 'qualified' : 'rejected' })
    }).catch(() => null);

    setStep(3);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans uppercase selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAV (IMAGE 6 STYLE) */}
      <nav className="p-8 md:p-10 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20" />
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW<span className="text-emerald-500">.AI</span></span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl">PORTAL LOGIN</a>
      </nav>

      {/* 2. HERO & MIRROR (ALIGNED HEIGHT) */}
      <section className="max-w-7xl mx-auto px-10 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
             STOP<br/>LOSING<br/>REVENUE<br/>TO <span className="text-brand-gradient">SLOW DMS.</span>
           </h1>
           <div className="h-1.5 w-24 bg-orange-500"></div>
        </div>

        {/* MAD IG CHAT MIRROR (SCRUBBED OF 5%) */}
        <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden h-[500px] flex flex-col">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div><p className="text-sm font-black tracking-tight uppercase">LIVE MIRROR</p><p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">PROCESSING @BLOCKCHAINWIZARD_</p></div>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">QUALIFIED (PREMIUM)</div>
            </div>
            <div className="flex-1 p-8 space-y-8">
                <div className="flex justify-end"><div className="bg-indigo-600 p-5 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[80%] uppercase">YO BRO, SAW THE CLIPS. 🚀 THAT AESTHETIC IS CRAZY. HOW MUCH TO HOP ON?</div></div>
                <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 ml-4">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[85%] uppercase">AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE FR?</div></div>
            </div>
        </div>
      </section>

      {/* 3. EXTENDED SUB-TEXT (SECTION 3 STYLE) */}
      <section className="max-w-7xl mx-auto px-10 pb-32">
          <p className="text-slate-400 text-xl md:text-3xl font-black tracking-tight leading-relaxed max-w-5xl uppercase border-l-8 border-indigo-600 pl-10">
            WE INSTALL A 24/7 AI SALES WORKFORCE INTO YOUR DMS THAT QUALIFIES LEADS AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-8">0% UPFRONT.</span>
          </p>
      </section>

      {/* 4. VSL CENTERED & BOOK-IN BUTTON */}
      <section className="bg-white py-32 rounded-t-[5rem] text-center space-y-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase leading-none">THE <br/>BREAKDOWN.</h2>
            <p className="text-slate-500 font-black tracking-widest text-[10px] uppercase">WATCH THE FULL PERFORMANCE INFRASTRUCTURE OVERVIEW</p>
        </div>
        <div className="relative group max-w-5xl mx-auto px-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] blur opacity-30"></div>
            <div className="relative aspect-video bg-slate-900 rounded-[3rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <p className="text-[10px] font-black text-slate-500 tracking-[0.5em] animate-pulse">VSL SPACE</p>
            </div>
        </div>
        <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-20 py-8 rounded-[2.5rem] font-black text-xl tracking-[0.4em] shadow-2xl hover:scale-105 transition-all uppercase">
            BOOK-IN <ArrowRight className="inline ml-3" size={24} />
        </button>
      </section>

      {/* 5. SYSTEM OUTLINE (CENTERED TEXT - IMAGE 5 STYLE) */}
      <section id="system" className="py-32 bg-[#020617] text-center">
         <div className="max-w-7xl mx-auto px-10 space-y-20">
            <div className="space-y-4 flex flex-col items-center">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">THE SYSTEM <br/>OUTLINE.</h2>
                <div className="h-2 w-32 bg-orange-500"></div>
                <p className="text-slate-500 font-black uppercase text-xs tracking-widest pt-4">PROPRIETARY AI SALES WORKFORCE</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <OutlineCard num="01" title="ICP SCRAPER" />
               <OutlineCard num="02" title="OUTREACH AGENT" />
               <OutlineCard num="03" title="INBOUND SETTER" />
            </div>
         </div>
      </section>

      {/* 6. INTERACTIVE SURVEY OVERLAY (ONE BLOCK AT A TIME) */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl flex items-center justify-center p-6">
              <div className="max-w-2xl w-full bg-white rounded-[4rem] p-10 md:p-16 space-y-12 shadow-2xl relative border-t-8 border-orange-500">
                  <div className="absolute top-8 right-10 text-[10px] font-black text-slate-300">PROTOCOL STEP {surveyStep + 1} / {questions.length}</div>
                  
                  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                      <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormInput label="NAME" name="name" val={formData.name} onChange={handleInput} />
                              <FormInput label="INSTAGRAM" name="handle" val={formData.handle} onChange={handleInput} />
                              <FormInput label="EMAIL" name="email" type="email" val={formData.email} onChange={handleInput} />
                              <FormInput label="PHONE" name="phone" type="tel" val={formData.phone} onChange={handleInput} />
                              <button onClick={nextStep} className="col-span-1 md:col-span-2 mt-4 bg-slate-950 text-white py-6 rounded-3xl font-black text-xs tracking-[0.4em] uppercase">Continue Protocol</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button 
                                    key={opt}
                                    onClick={() => {
                                        setFormData({...formData, [questions[surveyStep].name as string]: opt});
                                        nextStep();
                                    }}
                                    className="w-full text-left p-6 bg-slate-50 border border-slate-100 rounded-3xl font-black text-xs tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                                  >
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                      
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="w-full text-[10px] font-black text-slate-300 hover:text-slate-900 transition uppercase tracking-widest">Abort Application</button>
                  </div>
              </div>
          </div>
      )}

      {/* 7. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 text-center">
              {isQualified ? (
                  <div className="max-w-4xl w-full space-y-10 animate-in zoom-in-95 duration-500 uppercase">
                      <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
                      <h2 className="text-6xl font-black tracking-tighter">PROTOCOL ACCEPTED.</h2>
                      <p className="text-slate-400 font-bold text-xs tracking-[0.2em]">AGENCY MEETS INFRASTRUCTURE REQUIREMENTS. SELECT A TIME BELOW.</p>
                      <div className="bg-white rounded-[3rem] p-2 shadow-2xl min-h-[700px] border-8 border-indigo-600/10">
                          <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="700" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[3rem] p-16 space-y-10 text-slate-950 shadow-2xl uppercase">
                      <Lock size={60} className="mx-auto text-indigo-600" />
                      <h2 className="text-4xl font-black tracking-tighter leading-none text-slate-900">ACCESS <br/>DENIED.</h2>
                      <p className="text-[10px] font-black text-slate-400 leading-loose tracking-[0.2em]">CURRENT METRICS DO NOT MEET THE MINIMUM INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.</p>
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[10px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-1">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}

      {/* 8. FOOTER (IMAGE 6 STYLE) */}
      <footer className="bg-black py-10 px-10 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5">
         <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-full border border-orange-500/20 shadow-lg shadow-orange-500/5" />
            <span className="font-black text-lg tracking-tighter">ROLEFLOW<span className="text-emerald-500">.AI</span></span>
         </div>
         <div className="flex gap-10 text-[11px] font-black text-slate-600 tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-widest">© 2026 ROLEFLOW.AI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

function FormInput({ label, name, placeholder, onChange, type = "text", val }: any) {
    return (
        <div className="space-y-2 text-left">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} className="w-full bg-slate-50 border border-slate-100 p-5 rounded-3xl text-xs font-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300 shadow-inner uppercase" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/5 p-12 rounded-[4rem] hover:bg-indigo-600 transition-all group relative overflow-hidden">
            <p className="text-5xl font-black text-white/5 group-hover:text-white/10 mb-4 tracking-tighter absolute top-4 right-8">{num}</p>
            <h4 className="font-black text-2xl uppercase tracking-tighter text-white relative z-10">{title}</h4>
        </div>
    )
}
