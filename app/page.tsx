'use client';
import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity, Globe, Cpu
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); 
  const [surveyStep, setSurveyStep] = useState(0);
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  const questions = [
    { label: "PROTOCOL IDENTIFICATION", type: "fields" },
    { label: "DAILY DM LEAD FLOW", name: "leadFlow", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "DAILY NEW FOLLOWERS", name: "followers", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "MONTHLY REVENUE", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "HIGH TICKET OFFER SIZE", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] },
    { label: "AVERAGE CLOSING RATE", name: "closingRate", options: ['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+'] }
  ];

  const handleInput = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = async () => {
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const passClosingRate = formData.closingRate !== 'A) < 15%';
    const qualified = passRevenue && passLeadFlow && passOfferSize && passClosingRate;
    
    setIsQualified(qualified);
    fetch('https://www.roleflow.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: qualified ? 'qualified' : 'rejected' })
    }).catch(() => null);
    setStep(3);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans uppercase selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAV (REMOVED .AI) */}
      <nav className="p-8 md:p-10 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20" />
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl">PORTAL LOGIN</a>
      </nav>

      {/* 2. HERO & MIRROR */}
      <section className="max-w-7xl mx-auto px-10 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-white/5">
        <div className="space-y-8">
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
             STOP<br/>LOSING<br/>REVENUE<br/>TO <span className="text-brand-gradient">SLOW DMS.</span>
           </h1>
           <div className="h-1.5 w-24 bg-orange-500"></div>
        </div>

        <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3.5rem] shadow-2xl overflow-hidden h-[500px] flex flex-col">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div><p className="text-sm font-black tracking-tight">LIVE MIRROR</p><p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">PROCESSING @BLOCKCHAINWIZARD_</p></div>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">QUALIFIED</div>
            </div>
            <div className="flex-1 p-8 space-y-8">
                <div className="flex justify-end"><div className="bg-indigo-600 p-6 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[80%]">YO BRO, SAW THE CLIPS. 🚀 THAT AESTHETIC IS CRAZY. HOW MUCH TO HOP ON?</div></div>
                <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 ml-4">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-6 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[85%]">AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE?</div></div>
            </div>
        </div>
      </section>

      {/* 3. EXTENDED SUB-TEXT */}
      <section className="max-w-7xl mx-auto px-10 py-32">
          <p className="text-slate-400 text-xl md:text-4xl font-black tracking-tight leading-relaxed max-w-6xl uppercase border-l-8 border-indigo-600 pl-12 shadow-2xl">
            WE INSTALL A 24/7 AI SALES WORKFORCE INTO YOUR DMS THAT QUALIFIES LEADS AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-8 uppercase">0% UPFRONT.</span>
          </p>
      </section>

      {/* 4. VSL SECTION (REMOVED "THE BREAKDOWN" TEXT) */}
      <section className="bg-white py-32 rounded-t-[5rem] text-center space-y-16">
        <div className="relative group max-w-5xl mx-auto px-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] blur opacity-30"></div>
            <div className="relative aspect-video bg-slate-900 rounded-[3rem] border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"><Video size={32} className="text-white fill-current" /></div>
            </div>
        </div>
        <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-20 py-8 rounded-[2.5rem] font-black text-2xl tracking-[0.4em] shadow-2xl hover:scale-105 transition-all">
            BOOK-IN <ArrowRight className="inline ml-4" size={28} />
        </button>
      </section>

      {/* 5. EXPANDED SYSTEM OUTLINE (CENTERED) */}
      <section id="system" className="py-40 bg-[#020617] text-center relative">
         <div className="max-w-7xl mx-auto px-10 space-y-32">
            <div className="space-y-6 flex flex-col items-center">
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">THE SYSTEM <br/>OUTLINE.</h2>
                <div className="h-2 w-48 bg-orange-500"></div>
                <p className="text-slate-500 font-black uppercase text-sm tracking-[0.3em] pt-6">PROPRIETARY INFRASTRUCTURE ARCHITECTURE</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
               <OutlineCard num="01" title="ICP SCRAPER" icon={<Search size={32}/>} detail="EXHAUSTIVE EXTRACTION OF ACCOUNTS RUNNING ACTIVE PAID MEDIA." />
               <OutlineCard num="02" title="OUTREACH AGENT" icon={<Send size={32}/>} detail="HIGH-STATUS ENGAGEMENT PROTOCOLS TO INITIATE SALES THREADS." />
               <OutlineCard num="03" title="INBOUND SETTER" icon={<Zap size={32}/>} detail="24/7 QUALIFICATION & INSTANT CALENDAR DISPATCH LOGIC." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-white/5 max-w-5xl mx-auto">
                <div className="flex flex-col gap-3 items-center">
                    <CheckCircle2 size={24} className="text-indigo-500" />
                    <h5 className="font-black text-xl uppercase tracking-tighter">4-Pillar Integration</h5>
                    <p className="text-[10px] font-black text-slate-500 tracking-widest">PERSONA • KNOWLEDGE • LOGIC • PROPERTIES</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <BarChart3 size={24} className="text-orange-500" />
                    <h5 className="font-black text-xl uppercase tracking-tighter">Real-time Attribution</h5>
                    <p className="text-[10px] font-black text-slate-500 tracking-widest">DIRECT REVENUE TRACKING VIA ROLEFLOW CRM</p>
                </div>
            </div>
         </div>
      </section>

      {/* 6. SURVEY OVERLAY (VISIBILITY FIX) */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl flex items-center justify-center p-6">
              <div className="max-w-2xl w-full bg-white rounded-[4rem] p-10 md:p-16 space-y-12 shadow-2xl relative border-t-8 border-orange-500">
                  <div className="absolute top-8 right-10 text-[10px] font-black text-slate-300 tracking-widest">PROTOCOL STEP {surveyStep + 1} / {questions.length}</div>
                  
                  <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
                      <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormInput label="FULL NAME" name="name" val={formData.name} onChange={handleInput} />
                              <FormInput label="INSTAGRAM" name="handle" val={formData.handle} onChange={handleInput} />
                              <FormInput label="EMAIL" name="email" type="email" val={formData.email} onChange={handleInput} />
                              <FormInput label="PHONE" name="phone" type="tel" val={formData.phone} onChange={handleInput} />
                              <button onClick={nextStep} className="col-span-1 md:col-span-2 mt-6 bg-indigo-600 text-white py-7 rounded-[2rem] font-black text-sm tracking-[0.4em] uppercase shadow-xl hover:bg-indigo-700 transition-all">CONTINUE PROTOCOL</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-4">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-8 bg-slate-50 border border-slate-100 rounded-[2rem] font-black text-sm text-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="w-full text-[10px] font-black text-slate-300 hover:text-red-500 transition uppercase tracking-[0.2em]">ABORT APPLICATION</button>
                  </div>
              </div>
          </div>
      )}

      {/* 7. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center p-6 text-center">
              {isQualified ? (
                  <div className="max-w-4xl w-full space-y-10 animate-in zoom-in-95 duration-500">
                      <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
                      <h2 className="text-6xl font-black uppercase tracking-tighter text-white">PROTOCOL ACCEPTED.</h2>
                      <div className="bg-white rounded-[3rem] p-2 shadow-2xl min-h-[750px] border-8 border-indigo-600/20">
                          <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="750" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[4rem] p-16 space-y-10 text-slate-950 shadow-2xl">
                      <Lock size={60} className="mx-auto text-indigo-600" />
                      <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900">ACCESS <br/>DENIED.</h2>
                      <p className="text-[11px] font-black text-slate-400 uppercase leading-loose tracking-widest">METRICS DO NOT MEET THE MINIMUM INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.</p>
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[10px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-1">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}

      {/* 8. FOOTER (IMAGE 86 STYLE) */}
      <footer className="bg-black py-16 px-10 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5">
         <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20" />
            <span className="font-black text-xl tracking-tighter uppercase">ROLEFLOW</span>
         </div>
         <div className="flex gap-12 text-[11px] font-black text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-widest uppercase">© 2026 ROLEFLOW. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

// ATOMIC COMPONENTS
function FormInput({ label, name, placeholder, onChange, type = "text", val }: any) {
    return (
        <div className="space-y-2 text-left">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-100 p-6 rounded-[1.5rem] text-sm font-black text-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300 uppercase shadow-inner" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, icon, detail }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/5 p-16 rounded-[4.5rem] hover:bg-indigo-600 transition-all group relative overflow-hidden text-center flex flex-col items-center">
            <div className="mb-8 h-16 w-16 bg-white/5 rounded-3xl flex items-center justify-center text-indigo-500 group-hover:text-white group-hover:bg-white/10 transition-colors">{icon}</div>
            <h4 className="font-black text-3xl uppercase tracking-tighter text-white mb-4">{title}</h4>
            <p className="text-[11px] font-bold text-slate-500 group-hover:text-indigo-100 leading-relaxed uppercase tracking-widest max-w-xs">{detail}</p>
            <span className="text-8xl font-black text-white/5 absolute -bottom-6 -right-6 tracking-tighter">{num}</span>
        </div>
    )
}
