'use client';

import { useState, useRef } from 'react';
import { 
  ArrowRight, CheckCircle2, Zap, Instagram, 
  Play, X, Cpu, Search, BarChart3, Lock, MessageSquare, Star
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
    leadFlow: '', followers: '', revenue: '', offerSize: ''
  });

  // --- YOUR UPDATED SETTINGS ---
  const CALENDLY_URL = "https://calendly.com/diego-roleflow/30min"; 
  const WEBHOOK_URL = "YOUR_ZAPIER_OR_MAKE_WEBHOOK_URL"; // Replace this when you have your Zapier link

  const partnerLogos = [
    { src: '/logo1.png', alt: 'VALUE ADD MARKETING' },
    { src: '/logo2.png', alt: 'LAND FLIPPING EMPIRE' },
    { src: '/logo3.png', alt: 'CONQUERGROWTH' },
  ];

  const testimonials = [
    {
      company: "VALUE ADD MARKETING",
      logo: "/logo1.png",
      industry: "REAL ESTATE MARKETING",
      result: "+$120K GCI GENERATED",
      text: "ROLEFLOW TRANSFORMED OUR IG OUTREACH. WE ARE NOW QUALIFYING LUXURY REAL ESTATE LEADS AT SCALE WITHOUT OUR HUMAN SETTERS GETTING BURNT OUT. THE ROI WAS INSTANT.",
    },
    {
      company: "LAND FLIPPING EMPIRE",
      logo: "/logo2.png",
      industry: "LAND INVESTING COACHING",
      result: "82% LEAD-TO-CALL RATE",
      text: "WE DEAL WITH HIGH-TICKET COACHING. THE AI FILTERS OUT THE 'WINDOW SHOPPERS' AND ONLY BOOKS THE SERIOUS INVESTORS. IT PAID FOR ITSELF IN THE FIRST 3 DAYS.",
    },
    {
      company: "CONQUERGROWTH",
      logo: "/logo3.png",
      industry: "HOME IMPROVEMENT AGENCY",
      result: "340+ APPOINTMENTS",
      text: "SPEED TO LEAD IS EVERYTHING IN HOME IMPROVEMENT. ROLEFLOW RESPONDS INSTANTLY, SECURING THE PROJECT BEFORE OUR COMPETITORS EVEN SEE THE NOTIFICATION.",
    }
  ];

  const VSL_VIDEO_URL = "https://weztkxrd5zcoclm5.public.blob.vercel-storage.com/0128.mp4";

  const questions = [
    { label: "IDENTITY VERIFICATION", type: "fields" },
    { label: "DAILY LEAD VOLUME", name: "leadFlow", options: ['0 - 10 LEADS', '10 - 20 LEADS', '20 - 40 LEADS', '40+ LEADS'] },
    { label: "CURRENT MONTHLY REVENUE", name: "revenue", options: ['$0 - $15K', '$15K - $30K', '$30K - $100K', '$100K+'] },
    { label: "HIGH-TICKET OFFER SIZE", name: "offerSize", options: ['$0 - $1.5K', '$1.5K - $3K', '$3K - $10K', '$10K+'] }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } 
      else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = async () => {
    setIsSubmitting(true);
    
    // Qualification Logic
    const qualified = formData.revenue !== '$0 - $15K' && formData.offerSize !== '$0 - $1.5K';
    setIsQualified(qualified);

    // SEND DATA TO YOUR CRM (ZAPIER/MAKE)
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          status: qualified ? 'QUALIFIED' : 'REJECTED',
          timestamp: new Date().toISOString()
        })
      });
    } catch (e) {
      console.log("Webhook error - lead still proceeding to outcome.");
    }

    setStep(3);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans selection:bg-blue-500 overflow-x-hidden uppercase">
      
      {/* 1. TOP ANNOUNCEMENT */}
      <div className="bg-blue-600 py-2.5 text-center">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white px-4">
          NOW ACCEPTING 3 NEW CLIENTS FOR FEBRUARY • AI INFRASTRUCTURE V5.0
        </p>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="RoleFlow Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="font-bold text-2xl tracking-tighter">
            ROLE<span className="text-blue-500">FLOW</span>
          </span>
        </div>
        <button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg shadow-blue-600/20">
          GET STARTED
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
             <span className="text-[10px] font-bold tracking-widest text-blue-400">SYSTEM STATUS: ACTIVE</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
             STOP LOSING <span className="text-blue-600 font-black">$10K+/MONTH</span><br/>
             TO SLOW IG DMS.
           </h1>

           <p className="text-slate-400 text-lg md:text-xl font-bold leading-relaxed max-w-xl text-xs tracking-widest">
             ROLEFLOW INSTALLS A PROPRIETARY AI SALES WORKFORCE THAT QUALIFIES LEADS AND BOOKS HIGH-TICKET MEETINGS IN LESS THAN 60 SECONDS. <span className="text-white border-b-2 border-blue-600">24/7 COVERAGE. ZERO HEADCOUNT.</span>
           </p>

           <div className="pt-4 flex">
              <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 group w-full sm:w-auto tracking-widest">
                SCALE MY ACQUISITION <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

        {/* INTERACTIVE PREVIEW */}
        <div className="relative w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl opacity-50"></div>
            <div className="relative bg-[#0F172A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[500px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" className="h-6 w-6 opacity-80" alt="Icon" />
                        <p className="text-[10px] font-bold tracking-widest text-slate-400">AI SETTING AGENT</p>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg text-[9px] font-bold border border-emerald-500/20 tracking-widest">QUALIFIED</div>
                </div>
                
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                    <ChatBubble role="lead" text="HEY! I'M INTERESTED IN THE PROGRAM. HOW MUCH IS IT?" />
                    <ChatBubble role="ai" text="I'D LOVE TO HELP WITH THAT! TO SEE IF WE'RE A FIT, ARE YOU CURRENTLY DOING MORE THAN $10K/MONTH IN YOUR BUSINESS?" />
                    <ChatBubble role="lead" text="YEAH, WE JUST HIT $25K LAST MONTH." />
                    <ChatBubble role="ai" text="AMAZING. YOU'RE A PERFECT CANDIDATE. I HAVE A SLOT OPEN FOR A STRATEGY CALL TOMORROW AT 2PM. WANT IT?" />
                </div>
            </div>
        </div>
      </section>

      {/* 4. VSL & REALISTIC TESTIMONIALS */}
      <section className="bg-white py-24 rounded-t-[3rem] md:rounded-t-[5rem] text-center shadow-2xl">
        <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 text-slate-950">
               <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] mb-4">PARTNER RESULTS</p>
               <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">TRUSTED BY HIGH-TICKET FOUNDERS</h2>
            </div>
            
            <div className="relative aspect-video bg-slate-900 rounded-[2rem] border-[12px] border-slate-100 shadow-2xl overflow-hidden cursor-pointer group mb-24" onClick={handleTogglePlay}>
                <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                        <div className="h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                            <Play fill="white" size={30} className="text-white ml-1" />
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-slate-200 p-8 rounded-[2.5rem] space-y-6 shadow-sm flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <img src={t.logo} alt={t.company} className="h-10 w-auto object-contain opacity-80" />
                        <div className="flex gap-0.5 text-orange-500">
                            {[...Array(5)].map((_, star) => <Star key={star} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                    <p className="text-slate-600 font-bold leading-relaxed text-[11px] tracking-wide border-l-2 border-blue-500 pl-4">
                        "{t.text}"
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs tracking-tighter">{t.company}</p>
                      <p className="text-[9px] text-slate-400 font-bold tracking-[0.2em]">{t.industry}</p>
                    </div>
                    <p className="text-blue-600 font-black text-xs tracking-tighter whitespace-nowrap">{t.result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={() => setStep(2)} className="mt-20 bg-slate-950 text-white px-12 py-7 rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all flex items-center gap-4 mx-auto tracking-tighter shadow-2xl">
                APPLY TO PARTNER <ArrowRight />
            </button>
        </div>
      </section>

      {/* 5. SURVEY MODAL */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4">
              <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border-t-[8px] border-blue-600 relative text-slate-950">
                  <button onClick={() => setStep(1)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-950 transition-colors">
                    <X size={28} />
                  </button>
                  <div className="space-y-10">
                      <div className="space-y-2">
                          <p className="text-blue-600 font-bold text-[10px] tracking-widest">PROTOCOL STEP {surveyStep + 1}</p>
                          <h2 className="text-3xl font-extrabold tracking-tight leading-none">{questions[surveyStep].label}</h2>
                      </div>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 gap-5">
                              <FormInput label="FULL NAME" name="name" val={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} placeholder="JOHN DOE" />
                              <FormInput label="INSTAGRAM HANDLE" name="handle" val={formData.handle} onChange={(e: any) => setFormData({...formData, handle: e.target.value})} placeholder="@YOURBUSINESS" />
                              <FormInput label="EMAIL ADDRESS" name="email" type="email" val={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} placeholder="JOHN@EMAIL.COM" />
                              <button disabled={isSubmitting} onClick={nextStep} className="mt-4 bg-blue-600 text-white py-5 rounded-xl font-bold hover:bg-blue-700 transition-all tracking-[0.2em] shadow-xl shadow-blue-600/20 disabled:opacity-50 uppercase">
                                {isSubmitting ? "PROCESSING..." : "CONTINUE APPLICATION"}
                              </button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-6 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 hover:bg-blue-600 hover:text-white transition-all text-sm tracking-widest uppercase">
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}

      {/* 6. OUTCOME (CALENDLY) */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center p-4 overflow-y-auto">
              {isQualified ? (
                  <div className="max-w-5xl w-full h-full flex flex-col items-center py-12 space-y-8">
                      <img src="/logo.png" className="h-16 w-16" alt="Logo" />
                      <div className="text-center space-y-2">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">APPLICATION APPROVED</h2>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">SCHEDULE YOUR STRATEGY CALL BELOW</p>
                      </div>
                      <div className="w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl min-h-[700px] border-[12px] border-white/5">
                          <iframe src={CALENDLY_URL} width="100%" height="700" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[3rem] p-16 text-center space-y-8 text-slate-950">
                        <Lock size={64} className="mx-auto text-slate-200" />
                        <h2 className="text-4xl font-extrabold tracking-tight leading-none uppercase">NOT A FIT</h2>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">YOUR CURRENT BUSINESS METRICS DON'T QUALIFY FOR OUR AI INFRASTRUCTURE. PLEASE RETURN WHEN YOU ARE GENERATING AT LEAST $15K/MONTH IN REVENUE.</p>
                        <button onClick={() => setStep(1)} className="text-blue-600 font-bold uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-1">RETURN HOME</button>
                  </div>
              )}
          </div>
      )}

      {/* 7. FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-white/5 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl uppercase tracking-tighter">ROLEFLOW</span>
            </div>
            <p className="text-[10px] font-bold text-slate-600 tracking-[0.4em]">© 2026 ROLEFLOW AGENCY • ALL RIGHTS RESERVED</p>
          </div>
      </footer>
    </div>
  );
}

// UI ATOMS
function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-5 rounded-2xl text-[13px] font-bold max-w-[85%] tracking-tighter ${
                role === 'ai' ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-none shadow-xl' : 'bg-blue-600 text-white rounded-tr-none shadow-lg'
            }`}>
                {text}
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-2 text-left">
            <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] ml-1 uppercase">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-300 text-xs uppercase" placeholder={placeholder} />
        </div>
    )
}
