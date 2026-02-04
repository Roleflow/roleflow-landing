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
      
      {/* 1. LIVE TICKER BAR */}
      <div className="bg-indigo-600/10 border-b border-indigo-500/20 py-2 overflow-hidden whitespace-nowrap relative z-50">
        <div className="flex animate-marquee gap-10">
           {[...Array(10)].map((_, i) => (
             <span key={i} className="text-[8px] font-black tracking-[0.3em] text-indigo-400">
               SYSTEM_UPDATE: NEURAL_INGEST_CONNECTED • ATTRIBUTION_ACTIVE • @SETTER_V4.0_DEPLOYED
             </span>
           ))}
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-8 md:px-12 max-w-[1440px] mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-orange-500/50 shadow-2xl" />
          <span className="font-black text-2xl tracking-tighter uppercase italic">ROLEFLOW</span>
        </div>
        <div className="flex items-center gap-6">
            <a href="https://roleflow.app" className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-white/10 transition shadow-xl shadow-white/5">Portal Login</a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
           <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <Activity size={12} className="text-indigo-500 animate-pulse" />
             <span className="text-[10px] font-black tracking-widest text-indigo-400">Direct Revenue Attribution: Online</span>
           </div>
           
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white uppercase">
             STOP<br/>LOSING<br/>SALES TO<br/>
             <span className="text-brand-gradient">SLOW DMs.</span>
           </h1>
           <p className="text-slate-400 text-lg md:text-xl font-bold tracking-tight leading-relaxed max-w-xl">
             WE INSTALL 24/7 AI SALES INFRASTRUCTURE INTO YOUR INSTAGRAM DMS. <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-8">0% UPFRONT.</span>
           </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => setStep(2)} className="bg-white text-black px-12 py-6 rounded-2xl font-black text-sm tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl">
                START_ELIGIBILITY_CHECK <ArrowRight size={20} />
              </button>
           </div>
        </div>

        {/* 4. MAD MIRROR (ENHANCED UI) */}
        <div className="relative group lg:ml-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[3.5rem] shadow-2xl overflow-hidden h-[500px] md:h-[600px] flex flex-col">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                            <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                        <div>
                            <p className="text-sm font-black tracking-tight">NEURAL_FEED</p>
                            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">@BLOCKCHAINWIZARD_</p>
                        </div>
                    </div>
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">QUALIFIED</div>
                </div>
                
                <div className="flex-1 p-8 space-y-10 overflow-y-auto custom-scrollbar">
                    <ChatBubble role="lead" text="YO BRO, SAW THE CLIPS. 🚀 HOW MUCH TO HOP ON?" />
                    <ChatBubble role="ai" text="AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE?" />
                    <ChatBubble role="lead" text="100%. TIRED OF LOW QUALITY LEADS." />
                    <ChatBubble role="ai" text="SAY LESS. I GOT THE FOUNDER'S CALENDAR RIGHT HERE. 📅 LET'S GET YOU PRINTED." />
                </div>
                <div className="p-6 bg-slate-900 border-t border-white/5 text-center">
                    <p className="text-[9px] font-black text-slate-500 tracking-[0.4em]">ENCRYPTED_NEURAL_LINK_V4.0</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. THE BREAKDOWN SECTION */}
      <section className="bg-white py-32 rounded-t-[5rem] text-center relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 space-y-16">
            <h2 className="text-7xl md:text-[10rem] font-black text-slate-950 tracking-tighter uppercase leading-none">THE <br/>BREAKDOWN.</h2>
            
            <div className="relative group max-w-5xl mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[3rem] md:rounded-[4.5rem] blur opacity-40"></div>
                <div className="relative aspect-video bg-black rounded-[3rem] md:rounded-[4.5rem] border-2 border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={handleTogglePlay}>
                    <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                            <div className="h-24 w-24 md:h-32 md:w-32 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                                <Play fill="white" size={32} className="text-white ml-1.5" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="pt-10 flex flex-col items-center gap-6">
                <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-16 py-8 rounded-[2.5rem] md:rounded-[3.5rem] font-black text-2xl md:text-4xl tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-6">
                    BOOK-IN <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>
                <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] tracking-[0.2em]">
                    <ShieldCheck size={14} className="text-emerald-500" /> VETTED ACCOUNTS ONLY
                </div>
            </div>
        </div>
      </section>

      {/* 6. EXPANDED SYSTEM OUTLINE (CLINICAL ARCHITECTURE) */}
      <section id="system" className="py-40 bg-[#020617] text-center border-t border-white/5">
         <div className="max-w-[1440px] mx-auto px-6 space-y-32">
            <div className="flex flex-col items-center space-y-6">
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white">THE SYSTEM <br/>OUTLINE.</h2>
                <div className="h-1.5 w-48 bg-orange-500 shadow-[0_0_20px_#f97316]"></div>
                <p className="text-slate-500 font-black uppercase text-xs tracking-[0.4em] pt-6">PROPRIETARY INFRASTRUCTURE ARCHITECTURE</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               <OutlineCard num="01" title="ICP SCRAPER" icon={<Search size={32}/>} detail="EXHAUSTIVE EXTRACTION OF ACCOUNTS RUNNING ACTIVE PAID MEDIA." />
               <OutlineCard num="02" title="OUTREACH AGENT" icon={<Send size={32}/>} detail="HIGH-STATUS ENGAGEMENT PROTOCOLS TO INITIATE SALES THREADS." />
               <OutlineCard num="03" title="INBOUND SETTER" icon={<Zap size={32}/>} detail="24/7 QUALIFICATION & INSTANT CALENDAR DISPATCH LOGIC." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-white/5 max-w-5xl mx-auto text-left">
                <div className="flex items-center gap-8">
                    <div className="h-14 w-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 shrink-0 shadow-inner"><Cpu size={32}/></div>
                    <div><h5 className="font-black text-2xl text-white tracking-tighter">4-PILLAR PROTOCOL</h5><p className="text-[10px] text-slate-500 tracking-[0.2em] font-black mt-1">PERSONA • KNOWLEDGE • LOGIC • PROPERTIES</p></div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="h-14 w-14 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 shadow-inner"><BarChart3 size={32}/></div>
                    <div><h5 className="font-black text-2xl text-white tracking-tighter">DIRECT ATTRIBUTION</h5><p className="text-[10px] text-slate-500 tracking-[0.2em] font-black mt-1">REAL-TIME REVENUE TRACKING VIA CRM</p></div>
                </div>
            </div>
         </div>
      </section>

      {/* 7. SURVEY MODAL */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 overflow-y-auto">
              <div className="max-w-3xl w-full bg-white rounded-[4rem] p-10 md:p-20 space-y-12 shadow-2xl relative border-t-8 border-orange-500 my-auto">
                  <div className="absolute top-10 right-12 text-[10px] font-black text-slate-300">PROTOCOL STEP {surveyStep + 1} / {questions.length}</div>
                  
                  <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
                      <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none text-center">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormInput label="NAME" name="name" val={formData.name} onChange={handleInput} />
                              <FormInput label="INSTAGRAM" name="handle" val={formData.handle} onChange={handleInput} />
                              <FormInput label="EMAIL" name="email" type="email" val={formData.email} onChange={handleInput} />
                              <FormInput label="PHONE" name="phone" type="tel" val={formData.phone} onChange={handleInput} />
                              <button onClick={nextStep} className="col-span-1 md:col-span-2 mt-6 bg-slate-950 text-white py-7 rounded-[2rem] font-black text-sm tracking-[0.4em] uppercase shadow-2xl active:scale-95 transition-all">CONTINUE_PROTOCOL</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-4">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-8 bg-slate-50 border border-slate-100 rounded-[2rem] font-black text-sm text-black hover:bg-slate-950 hover:text-white transition-all shadow-sm uppercase tracking-widest">{opt}</button>
                              ))}
                          </div>
                      )}
                      <button onClick={() => setStep(1)} className="w-full text-[10px] font-black text-slate-300 hover:text-red-500 transition uppercase text-center tracking-[0.2em]">Abort Application</button>
                  </div>
              </div>
          </div>
      )}

      {/* 8. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center p-4 text-center">
              {isQualified ? (
                  <div className="max-w-[1440px] w-full h-full md:h-auto space-y-12 animate-in zoom-in-95 duration-500">
                      <div className="space-y-4">
                         <CheckCircle2 size={60} className="text-emerald-500 mx-auto" />
                         <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">PROTOCOL_ACCEPTED.</h2>
                         <p className="text-slate-400 font-bold text-[10px] tracking-[0.4em]">SELECT_BRIEFING_TIME_BELOW.</p>
                      </div>
                      <div className="bg-white rounded-[3rem] md:rounded-[5rem] p-1 md:p-2 shadow-2xl min-h-[600px] md:min-h-[850px] border-4 md:border-[16px] border-indigo-600/10 overflow-hidden">
                          <iframe src={CALENDLY_URL} width="100%" height="800" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-xl w-full bg-white rounded-[4rem] p-16 space-y-10 text-slate-950 shadow-2xl">
                      <Lock size={80} className="mx-auto text-indigo-600" />
                      <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">ACCESS <br/>DENIED.</h2>
                      <p className="text-[12px] font-black text-slate-400 uppercase leading-loose tracking-[0.2em]">CURRENT METRICS DO NOT MEET THE INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.</p>
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[10px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-2 hover:opacity-50">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}

      <footer className="bg-black py-20 px-8 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5">
         <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-orange-500/20" />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">ROLEFLOW</span>
         </div>
         <div className="flex gap-16 text-[10px] font-black text-slate-600 tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-[0.2em]">© 2026 ROLEFLOW.AI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

// UI HELPERS
function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex flex-col ${role === 'lead' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                {role === 'ai' && <p className="text-[8px] font-black text-indigo-400 mb-2 ml-4 tracking-widest uppercase">Roleflow AI</p>}
                <div className={`p-6 rounded-[2.2rem] text-[11px] font-black leading-relaxed shadow-xl border ${
                    role === 'ai' 
                    ? 'bg-white/5 border-white/10 text-slate-300 rounded-tl-none' 
                    : 'bg-indigo-600 border-indigo-500 text-white rounded-tr-none'
                }`}>
                    {text}
                </div>
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-3 text-left">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-3 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-100 p-6 rounded-3xl text-sm font-black text-black focus:ring-4 focus:ring-indigo-500/10 outline-none uppercase transition-all placeholder:text-slate-300" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail, icon }: any) {
    return (
        <div className="bg-white/[0.02] border border-white/5 p-16 md:p-20 rounded-[4.5rem] hover:bg-indigo-600 transition-all group relative overflow-hidden text-center flex flex-col items-center">
            <div className="mb-10 h-16 w-16 bg-white/5 rounded-3xl flex items-center justify-center text-indigo-500 group-hover:text-white group-hover:bg-white/10 transition-colors shadow-inner">{icon}</div>
            <h4 className="font-black text-3xl uppercase tracking-tighter text-white mb-4 relative z-10">{title}</h4>
            <p className="text-[11px] font-bold text-slate-500 group-hover:text-indigo-100 leading-relaxed uppercase tracking-widest max-w-xs relative z-10">{detail}</p>
            <span className="text-[10rem] font-black text-white/5 absolute -bottom-10 -right-10 tracking-tighter italic">{num}</span>
        </div>
    )
}
