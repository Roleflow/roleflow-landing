'use client';
import { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity, Play, X, Cpu, Globe, ArrowDown
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); 
  const [surveyStep, setSurveyStep] = useState(0);
  const [isQualified, setIsQualified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: '', closingRate: ''
  });

  const VSL_VIDEO_URL = "https://weztkxrd5zcoclm5.public.blob.vercel-storage.com/0128.mp4";
  const CALENDLY_URL = "https://calendly.com/YOUR_LINK"; 

  const questions = [
    { label: "IDENTITY_VERIFICATION", type: "fields" },
    { label: "DAILY_DM_LEAD_FLOW", name: "leadFlow", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "DAILY_NEW_FOLLOWERS", name: "followers", options: ['0 - 10', '10 - 20', '20 - 40', '40+'] },
    { label: "REVENUE_CAPACITY_AUDIT", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "HIGH_TICKET_OFFER_SIZE", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] },
    { label: "CONVERSION_EFFICIENCY", name: "closingRate", options: ['A) < 15%', 'B) 15% – 25%', 'C) 25% – 40%', 'D) 40%+'] }
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
    setIsSubmitting(true);
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const passClosingRate = formData.closingRate !== 'A) < 15%';
    const qualified = passRevenue && passLeadFlow && passOfferSize && passClosingRate;
    
    setIsQualified(qualified);
    await fetch('https://www.roleflow.app/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: qualified ? 'qualified' : 'rejected' })
    }).catch(() => null);

    setStep(3);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans uppercase selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. NEURAL TICKER */}
      <div className="bg-indigo-600/10 border-b border-white/5 py-2.5 overflow-hidden whitespace-nowrap relative z-50">
        <div className="flex animate-marquee gap-12">
           {[...Array(10)].map((_, i) => (
             <span key={i} className="text-[9px] font-black tracking-[0.4em] text-indigo-400/60">
               CORE_UPDATE: NEURAL_INGEST_CONNECTED • ATTRIBUTION_ACTIVE • @SETTER_V5.0_DEPLOYED • {new Date().toLocaleDateString()}
             </span>
           ))}
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-6 md:px-12 md:py-10 max-w-[1500px] mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="h-11 w-11 md:h-14 md:w-14 rounded-full border-2 border-orange-500/50 p-0.5 shadow-2xl transition-all group-hover:shadow-orange-500/20">
            <img src="/logo.png" alt="Logo" className="rounded-full h-full w-full object-cover bg-slate-900" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white/5 border border-white/10 px-6 py-3 md:px-10 md:py-4 rounded-full text-[10px] font-black tracking-widest hover:bg-white/10 transition-all backdrop-blur-xl shadow-2xl">
          PORTAL_LOGIN
        </a>
      </nav>

      {/* 3. HERO & MAD MIRROR */}
      <section className="max-w-[1500px] mx-auto px-6 md:px-12 pt-8 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-12 animate-in fade-in slide-in-from-left duration-1000">
           <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <Activity size={12} className="text-indigo-500 animate-pulse" />
             <span className="text-[10px] font-black tracking-widest text-indigo-400">24/7_REVENUE_INFRASTRUCTURE: ONLINE</span>
           </div>
           
           <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.9] text-white uppercase">
             STOP<br/>LOSING<br/>SALES TO<br/>
             <span className="text-brand-gradient italic">SLOW DMs.</span>
           </h1>

           <p className="text-slate-400 text-lg md:text-2xl font-bold tracking-tight leading-relaxed max-w-xl border-l-4 border-orange-500 pl-8">
             ROLEFLOW INSTALLS A PROPRIETARY AI SALES WORKFORCE THAT QUALIFIES AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-8">0% UPFRONT.</span>
           </p>

           <div className="pt-4">
              <button onClick={() => setStep(2)} className="bg-white text-black px-12 py-7 rounded-[2rem] font-black text-sm tracking-widest flex items-center justify-center gap-4 hover:scale-[1.03] transition-all shadow-2xl group">
                INITIALIZE_PROTOCOL <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>

        {/* INTERACTIVE MIRROR */}
        <div className="relative group lg:ml-auto w-full max-w-xl animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3.5rem] shadow-2xl overflow-hidden h-[500px] md:h-[650px] flex flex-col">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02] backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                            <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                        <div>
                            <p className="text-xs font-black tracking-widest text-slate-100">LIVE_MIRROR</p>
                            <p className="text-[9px] font-black text-slate-500 tracking-widest uppercase opacity-60">@BLOCKCHAINWIZARD_</p>
                        </div>
                    </div>
                    <div className="bg-orange-500 text-white px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest shadow-xl shadow-orange-500/20">QUALIFIED</div>
                </div>
                
                <div className="flex-1 p-8 space-y-12 overflow-y-auto custom-scrollbar">
                    <ChatBubble role="lead" text="YO BRO, SAW THE CLIPS. 🚀 HOW MUCH TO HOP ON?" />
                    <ChatBubble role="ai" text="AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE FR?" />
                    <ChatBubble role="lead" text="100%. TIRED OF LOW QUALITY LEADS VIA ADS." />
                    <ChatBubble role="ai" text="SAY LESS. I GOT THE FOUNDER'S CALENDAR RIGHT HERE. 📅 LET'S GET YOU PRINTED." />
                </div>
                <div className="p-6 bg-slate-950/80 border-t border-white/5 text-center backdrop-blur-md">
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.6em] uppercase">NEURAL_MIRROR_ENCRYPTED</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. THE BREAKDOWN (CENTERED) */}
      <section className="bg-white py-32 md:py-48 rounded-t-[4rem] md:rounded-t-[8rem] text-center relative z-10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1500px] mx-auto px-6 space-y-16">
            <h2 className="text-7xl md:text-[12rem] font-black text-slate-950 tracking-tighter uppercase leading-none italic">THE <br/>BREAKDOWN.</h2>
            
            <div className="relative group max-w-5xl mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] md:rounded-[5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative aspect-video bg-black rounded-[3rem] md:rounded-[5rem] border-2 border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={handleTogglePlay}>
                    <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[4px]">
                            <div className="h-24 w-24 md:h-36 md:w-36 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.6)] group-hover:scale-110 transition-all duration-500">
                                <Play fill="white" size={32} className="text-white ml-2" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-10 flex flex-col items-center gap-8">
                <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-16 py-8 md:px-28 md:py-12 rounded-[2.5rem] md:rounded-[4rem] font-black text-2xl md:text-5xl tracking-[0.4em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-8 group">
                    BOOK-IN <ArrowRight className="w-8 h-8 md:w-16 md:h-16 group-hover:translate-x-3 transition-transform" />
                </button>
            </div>
        </div>
      </section>

      {/* 5. SYSTEM OUTLINE (EXPANDED GRID) */}
      <section id="system" className="py-40 bg-[#020617] text-center border-t border-white/5">
         <div className="max-w-[1500px] mx-auto px-6 space-y-40">
            <div className="flex flex-col items-center space-y-8">
                <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-none text-white">SYSTEM<br/>OUTLINE.</h2>
                <div className="h-2.5 w-48 md:w-64 bg-orange-500 shadow-[0_0_30px_#f97316]"></div>
                <p className="text-slate-500 font-black uppercase text-sm md:text-lg tracking-[0.5em] pt-6">PROPRIETARY_INFRASTRUCTURE</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
               <OutlineCard num="01" title="ICP_SCRAPER" detail="EXTRACTION OF HIGH-VOLUME COMPETITORS AND ACTIVE AD CAMPAIGN TARGETS." icon={<Search size={32}/>} />
               <OutlineCard num="02" title="OUTREACH_AGENT" detail="HIGH-STATUS ENGAGEMENT PROTOCOLS THAT CONVERT TRAFFIC INTO THREADS." icon={<Send size={32}/>} />
               <OutlineCard num="03" title="INBOUND_SETTER" detail="24/7 QUALIFICATION & INSTANT CALENDAR DISPATCH. ZERO HUMAN DELAY." icon={<Zap size={32}/>} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-white/5 max-w-6xl mx-auto text-left">
                <FeatureBox icon={<Cpu size={32}/>} title="4-PILLAR_PROTOCOL" desc="PERSONA • KNOWLEDGE • LOGIC • PROPERTIES" />
                <FeatureBox icon={<BarChart3 size={32}/>} title="DIRECT_ATTRIBUTION" desc="REAL-TIME REVENUE TRACKING VIA ROLEFLOW_CRM" />
            </div>
         </div>
      </section>

      {/* 6. SURVEY MODAL (STEP-BY-STEP) */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 overflow-y-auto">
              <div className="max-w-3xl w-full bg-white rounded-[4rem] p-10 md:p-20 space-y-12 shadow-2xl relative border-t-[16px] border-orange-500 my-auto">
                  
                  {/* PROGRESS BAR */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                      <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${((surveyStep + 1) / questions.length) * 100}%` }}></div>
                  </div>

                  <div className="absolute top-10 right-12 text-[10px] font-black text-slate-300 tracking-widest uppercase">PROTOCOL_STEP_{surveyStep + 1}</div>
                  
                  <div className="space-y-12 animate-in slide-in-from-bottom-6 duration-700">
                      <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none text-center">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormInput label="NAME" name="name" val={formData.name} onChange={handleInput} />
                              <FormInput label="INSTAGRAM" name="handle" val={formData.handle} onChange={handleInput} />
                              <FormInput label="EMAIL" name="email" type="email" val={formData.email} onChange={handleInput} />
                              <FormInput label="PHONE" name="phone" type="tel" val={formData.phone} onChange={handleInput} />
                              <button onClick={nextStep} className="col-span-1 md:col-span-2 mt-8 bg-slate-950 text-white py-7 rounded-[2rem] font-black text-xs tracking-[0.4em] uppercase shadow-2xl hover:bg-indigo-600 transition-all">CONTINUE_PROTOCOL</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-4">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-8 bg-slate-50 border-2 border-slate-100 rounded-[2rem] font-black text-xs md:text-sm text-black hover:bg-slate-950 hover:text-white transition-all shadow-sm uppercase tracking-widest hover:scale-[1.02]">{opt}</button>
                              ))}
                          </div>
                      )}
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="w-full text-[10px] font-black text-slate-300 hover:text-red-500 transition uppercase text-center tracking-[0.3em] font-black">Abort_Application</button>
                  </div>
              </div>
          </div>
      )}

      {/* 7. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center p-4 text-center">
              {isQualified ? (
                  <div className="max-w-[1440px] w-full h-full md:h-auto space-y-12 animate-in zoom-in-95 duration-700">
                      <div className="space-y-6">
                         <div className="h-24 w-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                            <CheckCircle2 size={60} className="text-emerald-500" />
                         </div>
                         <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">PROTOCOL_ACCEPTED.</h2>
                         <p className="text-slate-400 font-black text-[10px] tracking-[0.5em] uppercase">SELECT_BRIEFING_TIME_BELOW.</p>
                      </div>
                      <div className="bg-white rounded-[3rem] md:rounded-[5rem] p-1 md:p-2 shadow-[0_0_100px_rgba(79,70,229,0.3)] min-h-[600px] md:min-h-[850px] border-4 md:border-[20px] border-indigo-600/10 overflow-hidden">
                          <iframe src={CALENDLY_URL} width="100%" height="850" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-2xl w-full bg-white rounded-[4rem] p-20 space-y-12 text-slate-950 shadow-2xl relative overflow-hidden">
                      <Lock size={100} className="mx-auto text-indigo-600 opacity-10 absolute -top-10 -left-10" />
                      <div className="relative z-10 space-y-8">
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">ACCESS_DENIED.</h2>
                        <p className="text-[14px] font-black text-slate-400 uppercase leading-loose tracking-[0.1em] text-center max-w-md mx-auto">
                            CURRENT METRICS DO NOT MEET THE INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.
                        </p>
                        <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[12px] font-black text-indigo-600 border-b-4 border-indigo-600 pb-2 hover:opacity-50 transition-all tracking-widest">RETURN_TO_HOME</button>
                      </div>
                  </div>
              )}
          </div>
      )}

      {/* 8. FOOTER */}
      <footer className="bg-black py-24 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-16 border-t border-white/5">
         <div className="flex items-center gap-5">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full border border-orange-500/20 shadow-2xl" />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">ROLEFLOW</span>
         </div>
         <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[11px] font-black text-slate-600 tracking-[0.2em]">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-[0.3em]">© 2026 ROLEFLOW.AI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

// UI ATOMS
function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex flex-col ${role === 'lead' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                {role === 'ai' && <p className="text-[9px] font-black text-indigo-500 mb-3 ml-6 tracking-widest uppercase opacity-60">Neural Agent 01</p>}
                <div className={`p-7 rounded-[2.5rem] text-[12px] font-black leading-relaxed shadow-2xl border ${
                    role === 'ai' 
                    ? 'bg-white/5 border-white/10 text-slate-300 rounded-tl-none' 
                    : 'bg-indigo-600 border-indigo-700 text-white rounded-tr-none'
                }`}>
                    {text}
                </div>
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-4 text-left">
            <label className="text-[10px] font-black text-slate-400 tracking-widest ml-4 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border-2 border-slate-100 p-7 rounded-[2rem] text-sm font-black text-black focus:ring-4 focus:ring-indigo-500/10 outline-none uppercase transition-all placeholder:text-slate-300" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail, icon }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/10 p-16 md:p-24 rounded-[4.5rem] hover:bg-indigo-600 transition-all duration-500 group relative overflow-hidden text-center flex flex-col items-center">
            <div className="mb-10 h-16 w-16 bg-white/5 rounded-3xl flex items-center justify-center text-indigo-500 group-hover:text-white group-hover:bg-white/10 transition-colors shadow-inner">{icon}</div>
            <h4 className="font-black text-3xl uppercase tracking-tighter text-white mb-6 relative z-10">{title}</h4>
            <p className="text-[12px] font-bold text-slate-500 group-hover:text-indigo-100 leading-relaxed uppercase tracking-widest max-w-xs relative z-10">{detail}</p>
            <span className="text-[12rem] font-black text-white/5 absolute -bottom-12 -right-12 tracking-tighter italic transition-all group-hover:text-white/10">{num}</span>
        </div>
    )
}

function FeatureBox({ icon, title, desc }: any) {
    return (
        <div className="flex items-center gap-10 group cursor-default">
            <div className="h-20 w-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">{icon}</div>
            <div>
                <h5 className="font-black text-3xl text-white tracking-tighter uppercase mb-2 group-hover:text-orange-500 transition-colors">{title}</h5>
                <p className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase">{desc}</p>
            </div>
        </div>
    )
}
