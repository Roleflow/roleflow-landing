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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [formData, setFormData] = useState({
    name: '', handle: '', email: '', phone: '',
    leadFlow: '', followers: '', revenue: '', offerSize: ''
  });

  // --- UPDATED PARTNER LOGOS ---
  const partnerLogos = [
    { src: '/logo1.png', alt: 'Value Add Marketing' },
    { src: '/logo2.png', alt: 'Land Flipping Empire' },
    { src: '/logo3.png', alt: 'ConquerGrowth' },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      handle: "@riveracoaching",
      result: "+$42k Revenue",
      text: "RoleFlow cleared my DMs in 48 hours. We booked 12 high-ticket calls in the first week without me touching the app once.",
    },
    {
      name: "Sarah Jenkins",
      handle: "@sarahfit_biz",
      result: "85% Qualify Rate",
      text: "The AI doesn't just chat, it sells. My sales team is finally only talking to people who can actually afford our $5k package.",
    },
    {
      name: "Marcus Thorne",
      handle: "@thorneconsulting",
      result: "24/7 Coverage",
      text: "I used to lose leads because I'd sleep while my global audience was awake. Now, RoleFlow closes the gap while I'm offline.",
    }
  ];

  const VSL_VIDEO_URL = "https://weztkxrd5zcoclm5.public.blob.vercel-storage.com/0128.mp4";
  const CALENDLY_URL = "https://calendly.com/roleflow/discovery"; 

  const questions = [
    { label: "Identity Verification", type: "fields" },
    { label: "Daily Lead Volume", name: "leadFlow", options: ['0 - 10 leads', '10 - 20 leads', '20 - 40 leads', '40+ leads'] },
    { label: "Current Monthly Revenue", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "Average Offer Size", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } 
      else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setStep(step); // Logic stays on modal
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = () => {
    const qualified = formData.revenue !== '$0 - $15k' && formData.offerSize !== '$0 - $1.5k';
    setIsQualified(qualified);
    setStep(3);
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT */}
      <div className="bg-blue-600 py-2.5 text-center">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase px-4">
          Now Accepting 3 New Clients for February • AI Setting Infrastructure v5.0
        </p>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="RoleFlow Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="font-bold text-2xl tracking-tighter uppercase">
            ROLE<span className="text-blue-600">FLOW</span>
          </span>
        </div>
        <button 
          onClick={() => setStep(2)} 
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg shadow-blue-600/20 uppercase"
        >
          Get Started
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
             <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">System Status: Active</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] uppercase">
             Stop Losing <span className="text-blue-600 font-black">$10k+/Month</span><br/>
             To Slow IG DMs.
           </h1>

           <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
             RoleFlow installs a proprietary AI sales workforce that qualifies leads and books high-ticket meetings in less than 60 seconds. <span className="text-white border-b-2 border-blue-600">24/7 coverage. Zero headcount.</span>
           </p>

           <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 group w-full sm:w-auto uppercase tracking-wide">
                Scale My Acquisition <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

      {/* 4. BUSINESS LOGOS BAR */}
      <section className="border-y border-white/5 bg-white/5 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-12">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
                {partnerLogos.map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3">
                        <img src={logo.src} alt={logo.alt} className="h-8 md:h-12 w-auto object-contain" />
                        <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{logo.alt}</span>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* 5. VSL & TESTIMONIALS SECTION */}
      <section className="bg-white py-24 rounded-t-[3rem] md:rounded-t-[5rem] text-center shadow-2xl">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8 uppercase">The Breakdown</h2>
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

            {/* TESTIMONIALS GRID */}
            <div className="text-center mb-12">
               <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Partner Results</p>
               <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">Trusted By High-Ticket Founders</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] space-y-4 hover:border-blue-200 transition-colors">
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, star) => <Star key={star} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed uppercase text-xs tracking-tight">"{t.text}"</p>
                  <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-900 leading-none mb-1 uppercase text-sm">{t.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{t.handle}</p>
                    </div>
                    <p className="text-blue-600 font-black text-sm uppercase leading-none">{t.result}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => setStep(2)} className="mt-20 bg-slate-900 text-white px-12 py-7 rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all flex items-center gap-4 mx-auto uppercase tracking-tighter">
                Apply To Partner <ArrowRight />
            </button>
        </div>
      </section>

      {/* 6. SYSTEM OUTLINE GRID */}
      <section className="py-32 bg-[#030712] border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">The System Outline</h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <OutlineCard num="01" title="Data Ingestion" detail="We sync your program knowledge and FAQs into our proprietary neural model." icon={<Search size={28}/>} />
               <OutlineCard num="02" title="AI Deployment" detail="Our agents take over your DMs 24/7, qualifying every lead in your brand voice." icon={<Cpu size={28}/>} />
               <OutlineCard num="03" title="Auto-Booking" detail="High-intent leads are automatically pushed to your calendar via RoleFlow CRM." icon={<BarChart3 size={28}/>} />
            </div>
         </div>
      </section>

      {/* 7. SURVEY MODAL */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4">
              <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border-t-[8px] border-blue-600 relative">
                  <button onClick={() => setStep(1)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors">
                    <X size={28} />
                  </button>
                  <div className="space-y-10">
                      <div className="space-y-2">
                          <p className="text-blue-600 font-bold text-[10px] tracking-widest uppercase">Protocol Step {surveyStep + 1}</p>
                          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">{questions[surveyStep].label}</h2>
                      </div>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 gap-5">
                              <FormInput label="Full Name" name="name" val={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} placeholder="JOHN DOE" />
                              <FormInput label="Instagram Handle" name="handle" val={formData.handle} onChange={(e: any) => setFormData({...formData, handle: e.target.value})} placeholder="@YOURBUSINESS" />
                              <FormInput label="Email Address" name="email" type="email" val={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} placeholder="JOHN@EMAIL.COM" />
                              <button onClick={nextStep} className="mt-4 bg-blue-600 text-white py-5 rounded-xl font-bold hover:bg-blue-700 transition-all uppercase tracking-widest shadow-xl shadow-blue-600/20">Continue Application</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-6 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all uppercase text-sm">
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}

      {/* 8. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center p-4 overflow-y-auto">
              {isQualified ? (
                  <div className="max-w-5xl w-full h-full flex flex-col items-center py-12 space-y-8">
                      <img src="/logo.png" className="h-16 w-16" alt="Logo" />
                      <div className="text-center space-y-2">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">Application Approved</h2>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">Schedule your strategy call below</p>
                      </div>
                      <div className="w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl min-h-[700px] border-[12px] border-white/5">
                          <iframe src={CALENDLY_URL} width="100%" height="700" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-md w-full bg-white rounded-[3rem] p-16 text-center space-y-8">
                        <Lock size={64} className="mx-auto text-slate-200" />
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">Not A Fit</h2>
                        <p className="text-slate-500 font-medium leading-relaxed uppercase text-sm">Your current business metrics don't qualify for our AI infrastructure. Please return when you are generating at least $15k/month in revenue.</p>
                        <button onClick={() => setStep(1)} className="text-blue-600 font-bold uppercase tracking-widest text-sm border-b-2 border-blue-600 pb-1">Return Home</button>
                  </div>
              )}
          </div>
      )}

      {/* 9. FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-white/5 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl uppercase tracking-tighter">RoleFlow</span>
            </div>
            <p className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">© 2026 ROLEFLOW AGENCY • ALL RIGHTS RESERVED</p>
          </div>
      </footer>
    </div>
  );
}

// UI ATOMS
function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-5 rounded-2xl text-[13px] font-bold max-w-[85%] uppercase tracking-tight ${
                role === 'ai' ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-none shadow-xl' : 'bg-blue-600 text-white rounded-tr-none shadow-lg'
            }`}>
                {text}
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-300 uppercase" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail, icon }: any) {
    return (
        <div className="bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] hover:bg-blue-600/10 hover:border-blue-600/50 transition-all relative group overflow-hidden">
            <div className="mb-8 h-16 w-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="font-extrabold text-2xl text-white mb-4 uppercase tracking-tight leading-none">{title}</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-tight text-xs">{detail}</p>
            <span className="text-9xl font-black text-white/5 absolute -bottom-6 -right-4 leading-none select-none italic-none">{num}</span>
        </div>
    )
}
