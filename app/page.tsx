'use client';
import { useState, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity, Play, X
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); // 1: Landing, 2: Survey, 3: Outcome
  const [surveyStep, setSurveyStep] = useState(0);
  const [isQualified, setIsQualified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  // --- SYSTEM CONFIGURATION ---
  const VSL_VIDEO_URL = "https://weztkxrd5zcoclm5.public.blob.vercel-storage.com/0128.mp4";
  const CALENDLY_URL = "https://calendly.com/YOUR_LINK"; // REPLACE WITH YOUR LINK

  const questions = [
    { label: "PROTOCOL IDENTIFICATION", type: "fields" },
    { label: "DAILY DM LEAD FLOW", name: "leadFlow", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "DAILY NEW FOLLOWERS", name: "followers", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "MONTHLY REVENUE", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "HIGH TICKET OFFER SIZE", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] },
    { label: "AVERAGE CLOSING RATE", name: "closingRate", options: ['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+'] }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } 
      else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

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

    // NEURAL SYNC TO CRM
    fetch('https://www.roleflow.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: qualified ? 'qualified' : 'rejected' })
    }).catch(() => null);

    setStep(3);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans uppercase selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="p-8 md:p-10 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20 shadow-lg" />
          <span className="font-black text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl">PORTAL LOGIN</a>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-10 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-white/5">
        <div className="space-y-8">
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
             STOP<br/>LOSING<br/>REVENUE<br/>TO <span className="text-brand-gradient">SLOW DMS.</span>
           </h1>
           <div className="h-1.5 w-24 bg-orange-500"></div>
           <p className="text-slate-400 text-lg font-black tracking-tight leading-relaxed max-w-xl">
             WE INSTALL A 24/7 AI SALES WORKFORCE INTO YOUR DMS THAT QUALIFIES LEADS AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-8">0% UPFRONT.</span>
           </p>
        </div>

        {/* MAD IG CHAT VISUAL */}
        <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden h-[500px] flex flex-col">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div><p className="text-sm font-black tracking-tight">LIVE MIRROR</p><p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">PROCESSING @BLOCKCHAINWIZARD_</p></div>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">QUALIFIED</div>
            </div>
            <div className="flex-1 p-8 space-y-8">
                <div className="flex justify-end"><div className="bg-indigo-600 p-5 rounded-3xl rounded-tr-none text-[11px] font-black leading-relaxed shadow-xl max-w-[80%] uppercase">YO BRO, SAW THE CLIPS. 🚀 THAT AESTHETIC IS CRAZY. HOW MUCH TO HOP ON?</div></div>
                <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 ml-4">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[85%] uppercase">AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE FR?</div></div>
            </div>
        </div>
      </section>

      {/* 3. THE BREAKDOWN (NATIVE VSL) */}
      <section className="bg-white py-32 rounded-t-[5rem] text-center space-y-20">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter uppercase leading-none">THE <br/>BREAKDOWN.</h2>
        </div>
        
        <div className="relative group max-w-5xl mx-auto px-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video bg-black rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden cursor-pointer" onClick={handleTogglePlay}>
                <video 
                  ref={videoRef}
                  playsInline
                  className="w-full h-full object-cover"
                  src={VSL_VIDEO_URL}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                        <div className="h-24 w-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play fill="white" size={32} className="text-white ml-1.5" />
                        </div>
                    </div>
                )}
            </div>
        </div>

        <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-20 py-8 rounded-[2.5rem] font-black text-xl tracking-[0.4em] shadow-2xl hover:scale-105 transition-all">
            BOOK-IN <ArrowRight className="inline ml-3" size={24} />
        </button>
      </section>

      {/* 4. EXPANDED SYSTEM OUTLINE (CENTERED) */}
      <section id="system" className="py-40 bg-[#020617] text-center relative">
         <div className="max-w-7xl mx-auto px-10 space-y-32">
            <div className="space-y-6 flex flex-col items-center">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">THE SYSTEM <br/>OUTLINE.</h2>
                <div className="h-2 w-32 bg-orange-500"></div>
                <p className="text-slate-500 font-black uppercase text-sm tracking-[0.3em] pt-6">PROPRIETARY INFRASTRUCTURE ARCHITECTURE</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               <OutlineCard num="01" title="ICP SCRAPER" detail="EXHAUSTIVE EXTRACTION OF ACCOUNTS RUNNING ACTIVE PAID MEDIA." />
               <OutlineCard num="02" title="OUTREACH AGENT" detail="HIGH-STATUS ENGAGEMENT PROTOCOLS TO INITIATE SALES THREADS." />
               <OutlineCard num="03" title="INBOUND SETTER" detail="24/7 QUALIFICATION & INSTANT CALENDAR DISPATCH LOGIC." />
            </div>
         </div>
      </section>

      {/* 5. INTERACTIVE SURVEY (ONE BLOCK AT A TIME) */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl flex items-center justify-center p-6">
              <div className="max-w-2xl w-full bg-white rounded-[4rem] p-10 md:p-16 space-y-12 shadow-2xl relative border-t-8 border-orange-500">
                  <div className="absolute top-8 right-10 text-[10px] font-black text-slate-300">PROTOCOL STEP {surveyStep + 1} / {questions.length}</div>
                  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                      <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-tight">{questions[surveyStep].label}</h2>
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
                                    onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-6 bg-slate-50 border border-slate-100 rounded-3xl font-black text-xs text-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
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

      {/* 6. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 text-center">
              {isQualified ? (
                  <div className="max-w-4xl w-full space-y-10 animate-in zoom-in-95 duration-500 uppercase">
                      <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
                      <h2 className="text-6xl font-black uppercase tracking-tighter text-white">ACCEPTED.</h2>
                      <div className="bg-white rounded-[3rem] p-2 shadow-2xl min-h-[750px] border-8 border-indigo-600/10">
                          <iframe src={CALENDLY_URL} width="100%" height="750" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[4rem] p-16 space-y-10 text-slate-950 shadow-2xl uppercase">
                      <Lock size={60} className="mx-auto text-indigo-600" />
                      <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-slate-900 uppercase">ACCESS <br/>DENIED.</h2>
                      <p className="text-[10px] font-black text-slate-400 uppercase leading-loose tracking-widest text-center">METRICS DO NOT MEET THE INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.</p>
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[10px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-1">RETURN_HOME</button>
                  </div>
              )}
          </div>
      )}

      {/* 7. FOOTER */}
      <footer className="bg-black py-16 px-10 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5">
         <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20" />
            <span className="font-black text-xl tracking-tighter uppercase text-white">ROLEFLOW</span>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-widest uppercase">© 2026 ROLEFLOW.AI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

function FormInput({ label, name, placeholder, onChange, type = "text", val }: any) {
    return (
        <div className="space-y-2 text-left">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-100 p-5 rounded-3xl text-sm font-black text-black focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300 uppercase shadow-inner" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/5 p-16 rounded-[4.5rem] hover:bg-indigo-600 transition-all group relative overflow-hidden text-center flex flex-col items-center">
            <h4 className="font-black text-3xl uppercase tracking-tighter text-white mb-4 relative z-10">{title}</h4>
            <p className="text-[11px] font-bold text-slate-500 group-hover:text-indigo-100 leading-relaxed uppercase tracking-widest max-w-xs relative z-10">{detail}</p>
            <span className="text-8xl font-black text-white/5 absolute -bottom-6 -right-6 tracking-tighter">{num}</span>
        </div>
    )
}
