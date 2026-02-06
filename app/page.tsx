'use client';

import { useState, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, Instagram, 
  Play, X, Cpu, Search, BarChart3, Lock, MessageSquare, Star, TrendingUp, 
  Calendar, Clock, DollarSign, Target, MousePointer2
} from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1); 
  const [surveyStep, setSurveyStep] = useState(0);
  const [isQualified, setIsQualified] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // --- REVENUE CALCULATOR STATE ---
  const [calc, setCalc] = useState({ 
    monthlyDms: 450, 
    bookingRate: 5, 
    closeRate: 20, 
    offerPrice: 5000 
  });

  // LOGIC
  const dailyDms = calc.monthlyDms / 30;
  const aiBookingBoost = 10; 

  const dailyCurrentSales = dailyDms * (calc.bookingRate / 100) * (calc.closeRate / 100);
  const dailyAiSales = dailyDms * ((calc.bookingRate + aiBookingBoost) / 100) * (calc.closeRate / 100);
  
  const dailyCurrentRev = dailyCurrentSales * calc.offerPrice;
  const dailyAiRev = dailyAiSales * calc.offerPrice;

  const dailyGap = dailyAiRev - dailyCurrentRev;
  const monthlyGap = dailyGap * 30;
  const yearlyGap = monthlyGap * 12;

  // ... (Keep the same formData, testimonials, and questions from previous code)

  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: ''
  });

  const CALENDLY_URL = "https://calendly.com/diego-roleflow/30min"; 
  const VSL_VIDEO_URL = "https://weztkxrd5zcoclm5.public.blob.vercel-storage.com/0128.mp4";

  const testimonials = [
    {
      company: "VALUE ADD MARKETING",
      logo: "/logo1.png",
      industry: "REAL ESTATE MARKETING",
      result: "+$120K GCI GENERATED",
      text: "ROLEFLOW TRANSFORMED OUR IG OUTREACH. WE ARE NOW QUALIFYING LUXURY REAL ESTATE LEADS AT SCALE WITHOUT OUR HUMAN SETTERS GETTING BURNT OUT.",
    },
    {
      company: "LAND FLIPPING EMPIRE",
      logo: "/logo2.png",
      industry: "LAND INVESTING COACHING",
      result: "82% LEAD-TO-CALL RATE",
      text: "WE DEAL WITH HIGH-TICKET COACHING. THE AI FILTERS OUT THE WINDOW SHOPPERS AND ONLY BOOKS THE SERIOUS INVESTORS. IT PAID FOR ITSELF INSTANTLY.",
    },
    {
      company: "CONQUERGROWTH",
      logo: "/logo3.png",
      industry: "HOME IMPROVEMENT AGENCY",
      result: "340+ APPOINTMENTS",
      text: "SPEED TO LEAD IS EVERYTHING. ROLEFLOW RESPONDS INSTANTLY, SECURING THE PROJECT BEFORE OUR COMPETITORS EVEN SEE THE NOTIFICATION.",
    }
  ];

  const questions = [
    { label: "IDENTITY VERIFICATION", type: "fields" },
    { label: "DAILY LEAD VOLUME", name: "leadFlow", options: ['0 - 10 LEADS', '10 - 20 LEADS', '20 - 40 LEADS', '40+ LEADS'] },
    { label: "CURRENT MONTHLY REVENUE", name: "revenue", options: ['$0 - $15K', '$15K - $30K', '$30K - $100K', '$100K+'] },
    { label: "HIGH-TICKET OFFER SIZE", name: "offerSize", options: ['$0 - $1.5K', '$1.5K - $3K', '$3K - $10K', '$10K+'] }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = () => {
    const qualified = formData.revenue !== '$0 - $15K' && formData.offerSize !== '$0 - $1.5K';
    setIsQualified(qualified);
    setStep(3);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-blue-500 overflow-x-hidden uppercase">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-blue-600 py-2.5 text-center">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white px-4">
          NOW ACCEPTING 3 NEW CLIENTS FOR FEBRUARY • AI INFRASTRUCTURE V5.0
        </p>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="RoleFlow Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="font-bold text-2xl tracking-tighter">ROLE<span className="text-blue-500">FLOW</span></span>
        </div>
        <button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg shadow-blue-600/20 uppercase tracking-[0.1em]">
          GET STARTED
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fadeIn">
           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
             <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">System Status: Active</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
             Stop Losing <span className="text-blue-500 italic">$10k+/Month</span><br/>
             To Slow IG DMs.
           </h1>

           <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
             RoleFlow installs a proprietary AI sales workforce that qualifies leads and books high-ticket meetings in &lt; 60 seconds. <span className="text-white border-b-2 border-blue-500">24/7 coverage. 0% headcount.</span>
           </p>

           <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 group">
                Scale My Outreach <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        {/* INTERACTIVE PREVIEW */}
        <div className="relative w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-[#0F172A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[500px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" className="h-6 w-6 opacity-80" alt="Icon" />
                        <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">AI Setting Agent</p>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-[9px] font-bold uppercase border border-emerald-500/20">Qualified</div>
                </div>
                
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                    <ChatBubble role="lead" text="Hey! I'm interested in the program. How much is it?" />
                    <ChatBubble role="ai" text="I'd love to help with that! To see if we're a fit, are you currently doing more than $10k/month in your business?" />
                    <ChatBubble role="lead" text="Yeah, we just hit $25k last month." />
                    <ChatBubble role="ai" text="Amazing. You're a perfect candidate. I have a slot open for a Strategy Call tomorrow at 2pm. Want it?" />
                </div>
            </div>
        </div>
      </section>

      {/* 4. VSL SECTION */}
      <section className="bg-white py-24 rounded-t-[4rem] md:rounded-t-[6rem] shadow-2xl relative z-20">
        <div className="max-w-5xl mx-auto px-4 md:px-0 text-center">
            <p className="text-blue-600 font-bold tracking-[0.4em] text-[10px] mb-4 uppercase">THE PROOF OF CONCEPT</p>
            <h2 className="text-5xl md:text-[5rem] font-black text-slate-950 tracking-tighter uppercase mb-8">THE BREAKDOWN</h2>
            <div className="relative aspect-video bg-slate-900 rounded-[2rem] border-8 border-slate-100 shadow-2xl overflow-hidden cursor-pointer group mb-10 mx-auto max-w-4xl" onClick={handleTogglePlay}>
                <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                        <div className="h-24 w-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                            <Play fill="white" size={32} className="text-white ml-1" />
                        </div>
                    </div>
                )}
            </div>
            <button onClick={() => setStep(2)} className="bg-slate-950 text-white px-16 py-8 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all flex items-center gap-6 mx-auto uppercase tracking-widest shadow-2xl">
                APPLY TO PARTNER <ArrowRight size={28} />
            </button>
        </div>
      </section>

      {/* 5. SYSTEM OUTLINE SECTION */}
      <section className="py-32 bg-[#030712] border-t border-white/5 relative z-10">
         <div className="max-w-7xl mx-auto px-6 text-center uppercase">
            <div className="mb-24 space-y-4">
                <p className="text-blue-500 font-bold tracking-[0.4em] text-[10px]">PROPRIETARY INFRASTRUCTURE</p>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">THE SYSTEM OUTLINE</h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <OutlineCard num="01" title="DATA INGESTION" detail="WE SYNC YOUR PROGRAM KNOWLEDGE, FAQS, AND PAST SALES CALLS INTO OUR NEURAL MODEL." icon={<Search size={28}/>} />
               <OutlineCard num="02" title="AI DEPLOYMENT" detail="OUR AGENTS TAKE OVER YOUR DMS 24/7, QUALIFYING EVERY LEAD IN YOUR UNIQUE BRAND VOICE." icon={<Cpu size={28}/>} />
               <OutlineCard num="03" title="AUTO-BOOKING" detail="HIGH-INTENT LEADS ARE AUTOMATICALLY PUSHED TO YOUR CALENDAR VIA ROLEFLOW CRM." icon={<BarChart3 size={28}/>} />
            </div>
         </div>
      </section>

      {/* 6. REVENUE GAP CALCULATOR (PROFESSIONAL VERSION) */}
      <section className="py-40 bg-[#020617] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] uppercase">The Mathematics of AI Acquisition</p>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">THE REVENUE GAP</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* INPUT PANEL - 5 COLS */}
            <div className="lg:col-span-5 space-y-4">
              <CalcInput icon={<MessageSquare size={18}/>} label="Monthly Inbound DMs" value={calc.monthlyDms} min={50} max={3000} step={50} onChange={(v: number) => setCalc({...calc, monthlyDms: v})} />
              <CalcInput icon={<MousePointer2 size={18}/>} label="Current Booking Rate" value={calc.bookingRate} min={1} max={30} step={1} unit="%" onChange={(v: number) => setCalc({...calc, bookingRate: v})} />
              <CalcInput icon={<Target size={18}/>} label="Sales Closing Rate" value={calc.closeRate} min={5} max={50} step={1} unit="%" onChange={(v: number) => setCalc({...calc, closeRate: v})} />
              <CalcInput icon={<DollarSign size={18}/>} label="Average Offer Price" value={calc.offerPrice} min={1000} max={30000} step={500} unit="$" onChange={(v: number) => setCalc({...calc, offerPrice: v})} />
            </div>

            {/* RESULTS PANEL - 7 COLS */}
            <div className="lg:col-span-7 bg-blue-600 rounded-[3.5rem] p-10 md:p-16 shadow-[0_0_100px_rgba(37,99,235,0.2)] flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10 space-y-12">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold tracking-[0.4em] opacity-80 uppercase">Hidden Monthly Leakage</p>
                            <h3 className="text-7xl md:text-9xl font-black tracking-tighter text-white">
                                +${Math.round(monthlyGap).toLocaleString()}
                            </h3>
                        </div>
                        <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                            <Zap className="text-white fill-white animate-pulse" size={28} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/5 space-y-2">
                            <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">Daily Recovered</p>
                            <p className="text-3xl font-black tracking-tighter uppercase">${Math.round(dailyGap).toLocaleString()}</p>
                        </div>
                        <div className="bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/5 space-y-2">
                            <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">Yearly Projection</p>
                            <p className="text-3xl font-black tracking-tighter uppercase">${Math.round(yearlyGap).toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between gap-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">Current Monthly Output</p>
                            <p className="text-2xl font-black text-white/90 tracking-tighter uppercase">${Math.round(dailyCurrentRev * 30).toLocaleString()}</p>
                        </div>
                        <div className="space-y-1 md:text-right">
                            <p className="text-[10px] font-bold opacity-100 tracking-widest uppercase text-blue-100">Optimized Potential</p>
                            <p className="text-2xl font-black text-white tracking-tighter uppercase underline decoration-2 underline-offset-4">${Math.round(dailyAiRev * 30).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                
                {/* Background Decor */}
                <BarChart3 className="absolute -bottom-10 -right-10 w-96 h-96 opacity-[0.03] text-white rotate-[-12deg]" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNER RESULTS */}
      <section className="py-32 bg-white uppercase">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-20 space-y-4 text-slate-950">
                <p className="text-blue-600 font-bold tracking-[0.4em] text-[10px]">PARTNER RESULTS</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">TRUSTED BY FOUNDERS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-slate-200 p-10 rounded-[3rem] space-y-8 flex flex-col justify-between hover:shadow-xl transition-all border-b-8 border-blue-600 shadow-sm">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <img src={t.logo} alt={t.company} className="h-12 w-auto object-contain" />
                        <div className="flex gap-0.5 text-orange-500">
                            {[...Array(5)].map((_, star) => <Star key={star} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                    <p className="text-slate-700 font-bold leading-relaxed text-[13px] tracking-tight uppercase border-l-2 border-blue-600 pl-4">
                        "{t.text}"
                    </p>
                  </div>
                  <div className="pt-8 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <p className="font-black text-slate-950 text-sm tracking-tighter uppercase mb-1">{t.company}</p>
                      <p className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase leading-none">{t.industry}</p>
                    </div>
                    <p className="text-blue-600 font-black text-sm uppercase tracking-tighter whitespace-nowrap">{t.result}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-24 px-6 border-t border-white/5 text-center uppercase tracking-widest">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="RoleFlow Logo" className="h-10 w-10" />
              <span className="font-black text-2xl uppercase tracking-tighter">ROLEFLOW</span>
            </div>
            <p className="text-[10px] font-bold text-slate-800 tracking-[0.5em] uppercase">© 2026 ROLEFLOW AGENCY • ALL RIGHTS RESERVED</p>
          </div>
      </footer>

      {/* MODALS RENDERED BELOW */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-3xl flex items-center justify-center p-4">
              <div className="max-w-2xl w-full bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border-t-[12px] border-blue-600 relative overflow-y-auto max-h-[95vh] text-slate-950">
                  <button onClick={() => setStep(1)} className="absolute top-10 right-10 text-slate-300 hover:text-slate-900 transition-colors">
                    <X size={32} />
                  </button>
                  <div className="space-y-12">
                      <div className="space-y-3">
                          <p className="text-blue-600 font-bold text-[10px] tracking-[0.4em] uppercase">PROTOCOL STEP {surveyStep + 1}</p>
                          <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">{questions[surveyStep].label}</h2>
                      </div>
                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 gap-6 uppercase">
                              <FormInput label="FULL NAME" name="name" val={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} placeholder="JOHN DOE" />
                              <FormInput label="INSTAGRAM HANDLE" name="handle" val={formData.handle} onChange={(e: any) => setFormData({...formData, handle: e.target.value})} placeholder="@YOURBUSINESS" />
                              <FormInput label="EMAIL ADDRESS" name="email" type="email" val={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} placeholder="JOHN@EMAIL.COM" />
                              <button onClick={nextStep} className="mt-6 bg-blue-600 text-white py-6 rounded-2xl font-black tracking-widest hover:bg-blue-700 uppercase">CONTINUE APPLICATION</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-7 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 hover:bg-blue-600 hover:text-white transition-all uppercase text-sm tracking-widest">
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}

      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center p-4 overflow-y-auto">
              {isQualified ? (
                  <div className="max-w-5xl w-full h-full flex flex-col items-center py-12 space-y-10">
                      <img src="/logo.png" className="h-16 w-16" alt="Logo" />
                      <div className="text-center space-y-3 uppercase">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">APPLICATION APPROVED</h2>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em]">SCHEDULE YOUR STRATEGY CALL BELOW</p>
                      </div>
                      <div className="w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl min-h-[750px] border-[16px] border-white/5">
                          <iframe src={CALENDLY_URL} width="100%" height="750" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-lg w-full bg-white rounded-[4rem] p-20 text-center space-y-10 border-t-[12px] border-blue-600 text-slate-950 uppercase">
                        <Lock size={80} className="mx-auto text-slate-200" />
                        <h2 className="text-5xl font-black tracking-tighter leading-none uppercase">NOT A FIT</h2>
                        <p className="text-slate-500 font-bold text-xs tracking-widest leading-relaxed uppercase">YOUR CURRENT REVENUE METRICS DO NOT QUALIFY FOR OUR AI INFRASTRUCTURE. PLEASE RETURN WHEN YOU ARE GENERATING AT LEAST $15K/MONTH.</p>
                        <button onClick={() => setStep(1)} className="text-blue-600 font-black tracking-widest text-sm border-b-4 border-blue-600 pb-2">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}
    </div>
  );
}

// --- UI ATOMS ---

function CalcInput({ label, icon, value, min, max, step, onChange, unit = "" }: any) {
    return (
        <div className="bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-[2.5rem] space-y-6 hover:bg-white/5 transition-all group">
            <div className="flex justify-between items-center uppercase">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {icon}
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em]">{label}</p>
                </div>
                <p className="text-2xl font-black text-white tracking-tighter">{unit === "$" ? "$" : ""}{value.toLocaleString()}{unit === "%" ? "%" : ""}</p>
            </div>
            <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseInt(e.target.value))} className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
        </div>
    )
}

function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-6 rounded-3xl text-[13px] font-black max-w-[85%] tracking-tighter ${
                role === 'ai' ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-none shadow-xl' : 'bg-blue-600 text-white rounded-tr-none shadow-lg'
            }`}>
                {text}
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-3 text-left uppercase">
            <label className="text-[10px] font-bold text-slate-400 tracking-[0.3em] ml-2">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-200 p-6 rounded-2xl text-slate-900 font-black outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder:text-slate-300 text-sm" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail, icon }: any) {
    return (
        <div className="bg-white/[0.02] border border-white/10 p-12 rounded-[3.5rem] hover:bg-blue-600/10 hover:border-blue-600/50 transition-all relative group overflow-hidden uppercase">
            <div className="mb-10 h-16 w-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="font-black text-2xl text-white mb-4 uppercase tracking-tighter leading-none">{title}</h4>
            <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">{detail}</p>
            <span className="text-[11rem] font-black text-white/[0.03] absolute -bottom-10 -right-8 leading-none select-none italic-none group-hover:text-blue-600/10 transition-colors uppercase">{num}</span>
        </div>
    )
}
