'use client';
import { useState, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, ShieldCheck, MessageSquare, 
  Video, ChevronRight, Lock, User, Instagram, Mail, Phone, 
  BarChart3, Target, Search, Send, Activity, Play, X, Cpu, Globe
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
      
      {/* 1. NAV - EDGE TO EDGE */}
      <nav className="p-4 md:px-6 md:py-8 max-w-[1440px] mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-orange-500/50 shadow-lg" />
          <span className="font-black text-xl md:text-2xl tracking-tighter">ROLEFLOW</span>
        </div>
        <a href="https://roleflow.app" className="bg-white text-black px-5 py-2 md:px-8 md:py-3 rounded-full text-[10px] font-black tracking-widest hover:bg-slate-100 transition shadow-xl uppercase">Portal Login</a>
      </nav>

      {/* 2. HERO & MAD MIRROR - ALIGNED & TIGHT */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-white/5">
        <div className="space-y-6 md:space-y-10">
           <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">
             <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-[9px] md:text-[10px] font-black tracking-widest text-indigo-400">24/7 AI SALES INFRASTRUCTURE</span>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase">
             STOP<br/>LOSING<br/>REVENUE<br/>TO <span className="text-brand-gradient">SLOW DMS.</span>
           </h1>
           <div className="h-1 w-20 bg-orange-500 shadow-[0_0_25px_#f97316]"></div>
        </div>

        {/* MAD IG CHAT MIRROR - MOBILE FRIENDLY HEIGHT */}
        <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden h-[450px] md:h-[550px] flex flex-col">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                        <div className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <div><p className="text-[11px] font-black tracking-widest">LIVE_MIRROR</p><p className="text-[8px] font-bold text-slate-500 uppercase">SYNC: @BLOCKCHAINWIZARD_</p></div>
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">QUALIFIED</div>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="flex justify-end"><div className="bg-indigo-600 p-4 md:p-5 rounded-2xl rounded-tr-none text-[10px] md:text-[11px] font-black leading-relaxed shadow-xl max-w-[85%]">YO BRO, SAW THE CLIPS. 🚀 THAT AESTHETIC IS CRAZY. HOW MUCH TO HOP ON?</div></div>
                <div className="space-y-1"><p className="text-[8px] font-black text-indigo-400 ml-4 uppercase">ROLEFLOW AI</p><div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl rounded-tl-none text-[10px] md:text-[11px] font-black text-slate-300 leading-relaxed shadow-inner max-w-[90%]">AYY APPRECIATE YOU FAM! WE BARELY KEEPING UP WITH DEMAND TBH. YOU READY TO SCALE?</div></div>
            </div>
        </div>
      </section>

      {/* 3. EXTENDED SUB-TEXT - HIGH IMPACT */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-20 md:py-32">
          <p className="text-slate-400 text-lg md:text-4xl font-black tracking-tight leading-relaxed max-w-[1200px] uppercase border-l-4 md:border-l-8 border-indigo-600 pl-6 md:pl-12">
            WE INSTALL A 24/7 AI SALES WORKFORCE INTO YOUR DMS THAT QUALIFIES LEADS AND BOOKS MEETINGS IN &lt; 60 SECONDS. <span className="text-white underline decoration-orange-500 md:decoration-4 underline-offset-8">0% UPFRONT.</span>
          </p>
      </section>

      {/* 4. THE BREAKDOWN - FULL WIDTH ON MOBILE */}
      <section className="bg-white py-24 md:py-40 rounded-t-[3rem] md:rounded-t-[5rem] text-center">
        <div className="relative group max-w-6xl mx-auto px-4 md:px-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-[2.5rem] md:rounded-[4rem] blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative aspect-video bg-black rounded-[2.5rem] md:rounded-[4rem] border-2 border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={handleTogglePlay}>
                <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                        <div className="h-20 w-20 md:h-28 md:w-28 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                            <Play fill="white" size={32} className="text-white ml-1.5" />
                        </div>
                    </div>
                )}
            </div>
        </div>
        <button onClick={() => setStep(2)} className="mt-12 bg-slate-950 text-white px-10 py-6 md:px-24 md:py-10 rounded-[2rem] md:rounded-[3rem] font-black text-lg md:text-3xl tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase">
            BOOK-IN <ArrowRight className="inline ml-4" size={24} md:size={32} />
        </button>
      </section>

      {/* 5. EXPANDED SYSTEM OUTLINE - CENTERED & DENSE */}
      <section className="py-24 md:py-40 bg-[#020617] text-center border-t border-white/5">
         <div className="max-w-[1440px] mx-auto px-4 md:px-6 space-y-24">
            <div className="flex flex-col items-center space-y-6">
                <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white">THE SYSTEM <br/>OUTLINE.</h2>
                <div className="h-1.5 w-24 md:w-48 bg-orange-500"></div>
                <p className="text-slate-500 font-black uppercase text-xs tracking-widest pt-4">PROPRIETARY INFRASTRUCTURE ARCHITECTURE</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
               <OutlineCard num="01" title="ICP SCRAPER" detail="EXHAUSTIVE EXTRACTION OF ACCOUNTS RUNNING ACTIVE PAID MEDIA." icon={<Search size={24}/>} />
               <OutlineCard num="02" title="OUTREACH AGENT" detail="HIGH-STATUS ENGAGEMENT PROTOCOLS TO INITIATE SALES THREADS." icon={<Send size={24}/>} />
               <OutlineCard num="03" title="INBOUND SETTER" detail="24/7 QUALIFICATION & INSTANT CALENDAR DISPATCH LOGIC." icon={<Zap size={24}/>} />
            </div>
         </div>
      </section>

      {/* 6. INTERACTIVE SURVEY - MOBILE OPTIMIZED */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 overflow-y-auto">
              <div className="max-w-2xl w-full bg-white rounded-[3rem] p-8 md:p-16 space-y-10 shadow-2xl relative border-t-8 border-indigo-600 my-auto">
                  <div className="absolute top-6 right-8 text-[9px] font-black text-slate-300">STEP {surveyStep + 1} / {questions.length}</div>
                  
                  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase leading-tight text-center">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormInput label="NAME" name="name" val={formData.name} onChange={handleInput} />
                              <FormInput label="INSTAGRAM" name="handle" val={formData.handle} onChange={handleInput} />
                              <FormInput label="EMAIL" name="email" type="email" val={formData.email} onChange={handleInput} />
                              <FormInput label="PHONE" name="phone" type="tel" val={formData.phone} onChange={handleInput} />
                              <button onClick={nextStep} className="col-span-1 md:col-span-2 mt-4 bg-slate-950 text-white py-5 rounded-[1.5rem] font-black text-xs tracking-widest uppercase shadow-xl active:scale-95 transition-all">CONTINUE</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-2 md:gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-5 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl font-black text-[10px] md:text-xs text-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">{opt}</button>
                              ))}
                          </div>
                      )}
                      <button onClick={() => setStep(1)} className="w-full text-[10px] font-black text-slate-300 hover:text-red-500 transition uppercase text-center tracking-widest">Abort Application</button>
                  </div>
              </div>
          </div>
      )}

      {/* 7. OUTCOME */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center p-4 text-center">
              {isQualified ? (
                  <div className="max-w-5xl w-full h-full md:h-auto space-y-10 animate-in zoom-in-95 duration-500">
                      <div className="space-y-4">
                         <CheckCircle2 size={50} className="text-emerald-500 mx-auto" />
                         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">PROTOCOL ACCEPTED.</h2>
                         <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase">SELECT YOUR BRIEFING TIME BELOW.</p>
                      </div>
                      <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-1 md:p-2 shadow-2xl min-h-[600px] md:min-h-[750px] border-4 md:border-8 border-indigo-600/20">
                          <iframe src={CALENDLY_URL} width="100%" height="700" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[3rem] p-12 space-y-10 text-slate-950 shadow-2xl">
                      <Lock size={60} className="mx-auto text-indigo-600" />
                      <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">ACCESS <br/>DENIED.</h2>
                      <p className="text-[11px] font-black text-slate-400 uppercase leading-loose tracking-[0.1em]">CURRENT METRICS DO NOT MEET THE INFRASTRUCTURE REQUIREMENTS. DATA LOGGED FOR FUTURE RE-EVALUATION.</p>
                      <button onClick={() => {setStep(1); setSurveyStep(0);}} className="text-[10px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-1">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}

      {/* 8. FOOTER - CLINICAL */}
      <footer className="bg-black py-16 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 uppercase">
         <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-full border border-orange-500/20 shadow-lg" />
            <span className="font-black text-xl tracking-tighter">ROLEFLOW</span>
         </div>
         <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-black text-slate-600 tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
         </div>
         <p className="text-[10px] font-black text-slate-800 tracking-[0.2em]">© 2026 ROLEFLOW. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

// UI HELPERS
function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-2 text-left">
            <label className="text-[9px] font-black text-slate-400 tracking-widest ml-2 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-sm font-black text-black focus:ring-4 focus:ring-indigo-500/10 outline-none uppercase transition-all placeholder:text-slate-300" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, icon, detail }: any) {
    return (
        <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3.5rem] hover:bg-indigo-600 transition-all group relative overflow-hidden text-center flex flex-col items-center">
            <div className="mb-6 md:mb-8 h-12 w-12 md:h-16 md:w-16 bg-white/5 rounded-3xl flex items-center justify-center text-indigo-500 group-hover:text-white group-hover:bg-white/10 transition-colors shadow-inner">{icon}</div>
            <h4 className="font-black text-xl md:text-3xl uppercase tracking-tighter text-white mb-4 relative z-10">{title}</h4>
            <p className="text-[10px] md:text-[11px] font-bold text-slate-500 group-hover:text-indigo-100 leading-relaxed uppercase tracking-widest max-w-xs relative z-10">{detail}</p>
            <span className="text-8xl font-black text-white/5 absolute -bottom-6 -right-6 tracking-tighter">{num}</span>
        </div>
    )
}
