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

  // Cleaned up labels: No underscores, high-ticket terminology
  const questions = [
    { label: "Identity Verification", type: "fields" },
    { label: "Daily Lead Volume", name: "leadFlow", options: ['0 - 10 leads', '10 - 20 leads', '20 - 40 leads', '40+ leads'] },
    { label: "New Followers Per Day", name: "followers", options: ['0 - 10', '10 - 20', '20 - 50', '50+'] },
    { label: "Current Monthly Revenue", name: "revenue", options: ['$0 - $15k', '$15k - $30k', '$30k - $100k', '$100k+'] },
    { label: "Average Offer Size", name: "offerSize", options: ['$0 - $1.5k', '$1.5k - $3k', '$3k - $10k', '$10k+'] },
    { label: "Sales Closing Rate", name: "closingRate", options: ['Below 15%', '15% – 25%', '25% – 40%', 'Over 40%'] }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } 
      else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (surveyStep < questions.length - 1) setSurveyStep(surveyStep + 1);
    else finalize();
  };

  const finalize = async () => {
    setIsSubmitting(true);
    // Qualification Logic
    const passRevenue = formData.revenue !== '$0 - $15k';
    const passLeadFlow = formData.leadFlow !== '0 - 10 leads';
    const passOfferSize = formData.offerSize !== '$0 - $1.5k';
    const qualified = passRevenue && passLeadFlow && passOfferSize;
    
    setIsQualified(qualified);
    
    // Webhook integration
    await fetch('https://www.roleflow.io/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, status: qualified ? 'qualified' : 'rejected' })
    }).catch(() => null);

    setStep(3);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-blue-600 py-2 overflow-hidden whitespace-nowrap relative z-50">
        <div className="flex animate-marquee gap-12">
           {[...Array(5)].map((_, i) => (
             <span key={i} className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
               System Update: AI Setting Engine v5.0 Active • Booking Slots Limited for February • Data Encryption Enabled
             </span>
           ))}
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="px-6 py-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tighter uppercase italic">ROLEFLOW</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#system" className="hover:text-white transition-colors">System</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
        </div>
        <button onClick={() => setStep(2)} className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest hover:bg-white/10 transition-all backdrop-blur-xl">
          PARTNER LOGIN
        </button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
             <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
             <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">24/7 Revenue Infrastructure Online</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
             Stop Losing <span className="text-blue-500 italic">$10k+/Month</span> Due To Slow IG DMs.
           </h1>

           <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
             RoleFlow installs a proprietary AI sales workforce that qualifies leads and books high-ticket meetings in under 60 seconds. <span className="text-white border-b-2 border-blue-500">Scale your outreach without increasing your headcount.</span>
           </p>

           <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/20 group">
                Scale My Acquisition <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#video" className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center hover:bg-white/10 transition-all">
                Watch Demo
              </a>
           </div>
        </div>

        {/* INTERACTIVE DEMO VISUAL */}
        <div className="relative group w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur-2xl opacity-20"></div>
            <div className="relative bg-[#0A0F1E] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[550px]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02] backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                            <Instagram size={14} className="text-blue-400" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tracking-widest text-slate-100 uppercase">Live AI Interaction</p>
                        </div>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase">Lead Qualified</div>
                </div>
                
                <div className="flex-1 p-6 space-y-8 overflow-y-auto">
                    <ChatBubble role="lead" text="Hey! How does your coaching program work? Looking to scale to $50k/mo." />
                    <ChatBubble role="ai" text="That is a massive goal! To give you the right info, what is your current monthly revenue and your primary offer price?" />
                    <ChatBubble role="lead" text="We are at $15k/mo right now. Offer is $3,000." />
                    <ChatBubble role="ai" text="Perfect. You're a great fit for our scale-up protocol. I have a few openings on our founder's calendar tomorrow. Want to grab one?" />
                </div>
                <div className="p-4 bg-slate-950/80 border-t border-white/5 text-center backdrop-blur-md">
                    <p className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase">RoleFlow Neural Engine v5.0</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. THE VIDEO SECTION (VSL) */}
      <section id="video" className="bg-white py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] text-center relative z-10 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight mb-8">See The System In Action</h2>
            <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto font-medium uppercase tracking-widest text-sm">A 2-minute breakdown of your new automated sales team.</p>
            
            <div className="relative group mb-16">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] md:rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative aspect-video bg-slate-900 rounded-[2rem] md:rounded-[3rem] border-8 border-slate-100 shadow-2xl overflow-hidden cursor-pointer" onClick={handleTogglePlay}>
                    <video ref={videoRef} playsInline className="w-full h-full object-cover" src={VSL_VIDEO_URL} onEnded={() => setIsPlaying(false)} />
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px]">
                            <div className="h-20 w-20 md:h-28 md:w-28 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <Play fill="white" size={32} className="text-white ml-1" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl tracking-tight shadow-xl hover:bg-blue-500 transition-all flex items-center gap-4 mx-auto">
                Apply To Partner <ArrowRight />
            </button>
        </div>
      </section>

      {/* 5. SYSTEM OUTLINE GRID */}
      <section id="system" className="py-32 bg-[#020617] border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">The 3-Step Integration</h2>
                <p className="text-slate-500 font-bold uppercase text-sm tracking-[0.3em]">Full-Service Setup & Management</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <OutlineCard num="01" title="Data Ingestion" detail="We sync your program knowledge, past sales calls, and FAQs into our proprietary neural model." icon={<Search size={28}/>} />
               <OutlineCard num="02" title="AI Deployment" detail="Our agents take over your DMs 24/7, qualifying every lead and handling objections in your voice." icon={<Cpu size={28}/>} />
               <OutlineCard num="03" title="Auto-Booking" detail="High-intent leads are automatically pushed to your calendar. You only show up to the sales calls." icon={<BarChart3 size={28}/>} />
            </div>
         </div>
      </section>

      {/* 6. SURVEY MODAL */}
      {step === 2 && (
          <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
              <div className="max-w-2xl w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative border-t-[8px] border-blue-600">
                  <button onClick={() => setStep(1)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
                    <X size={24} />
                  </button>

                  <div className="mb-10">
                      <div className="flex justify-between text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
                        <span>Step {surveyStep + 1} of {questions.length}</span>
                        <span>{Math.round(((surveyStep + 1) / questions.length) * 100)}% Complete</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${((surveyStep + 1) / questions.length) * 100}%` }}></div>
                      </div>
                  </div>
                  
                  <div className="space-y-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">
                        {questions[surveyStep].label}
                      </h2>

                      {questions[surveyStep].type === "fields" ? (
                          <div className="grid grid-cols-1 gap-4">
                              <FormInput label="Full Name" name="name" val={formData.name} onChange={handleInput} placeholder="John Doe" />
                              <FormInput label="Instagram Handle" name="handle" val={formData.handle} onChange={handleInput} placeholder="@yourbusiness" />
                              <FormInput label="Work Email" name="email" type="email" val={formData.email} onChange={handleInput} placeholder="john@company.com" />
                              <button onClick={nextStep} className="mt-4 bg-blue-600 text-white py-5 rounded-xl font-bold text-base hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">Continue Application</button>
                          </div>
                      ) : (
                          <div className="grid grid-cols-1 gap-3">
                              {questions[surveyStep].options?.map((opt) => (
                                  <button key={opt} onClick={() => { setFormData({...formData, [questions[surveyStep].name as string]: opt}); nextStep(); }}
                                    className="w-full text-left p-6 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                    {opt}
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}

      {/* 7. OUTCOME OVERLAY */}
      {step === 3 && (
          <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center p-4">
              {isQualified ? (
                  <div className="max-w-6xl w-full h-full flex flex-col items-center py-10 space-y-8 overflow-y-auto">
                      <div className="text-center space-y-4">
                         <div className="h-16 w-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                            <CheckCircle2 size={32} className="text-emerald-500" />
                         </div>
                         <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">Application Accepted</h2>
                         <p className="text-slate-400 font-medium">Please select a time below for your Strategy Briefing.</p>
                      </div>
                      <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl min-h-[700px]">
                          <iframe src={CALENDLY_URL} width="100%" height="700" frameBorder="0"></iframe>
                      </div>
                  </div>
              ) : (
                  <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-12 text-center space-y-8 shadow-2xl">
                        <Lock size={64} className="mx-auto text-slate-200" />
                        <h2 className="text-4xl font-bold text-slate-900">Not A Fit Yet</h2>
                        <p className="text-slate-500 leading-relaxed">
                            Based on your current metrics, your business isn't ready for our automated infrastructure. We recommend applying again once you hit $15k/mo in consistent revenue.
                        </p>
                        <button onClick={() => setStep(1)} className="text-blue-600 font-bold hover:underline">Return to Home</button>
                  </div>
              )}
          </div>
      )}

      {/* 8. FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
               <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Zap size={16} />
               </div>
               <span className="font-bold text-xl tracking-tighter uppercase text-white">ROLEFLOW</span>
            </div>
            <div className="flex gap-10 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
               <a href="#" className="hover:text-white transition">Privacy</a>
               <a href="#" className="hover:text-white transition">Terms</a>
               <a href="mailto:hello@roleflow.io" className="hover:text-white transition">Contact</a>
            </div>
            <p className="text-[11px] font-medium text-slate-700 tracking-widest">© 2026 ROLEFLOW AGENCY. ALL RIGHTS RESERVED.</p>
         </div>
      </footer>
    </div>
  );
}

// REUSABLE UI COMPONENTS
function ChatBubble({ role, text }: { role: 'ai' | 'lead', text: string }) {
    return (
        <div className={`flex ${role === 'lead' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex flex-col ${role === 'lead' ? 'items-end' : 'items-start'} max-w-[85%]`}>
                <div className={`p-5 rounded-2xl text-[13px] font-medium leading-relaxed border ${
                    role === 'ai' 
                    ? 'bg-white/5 border-white/10 text-slate-300 rounded-tl-none' 
                    : 'bg-blue-600 border-blue-500 text-white rounded-tr-none shadow-lg shadow-blue-600/20'
                }`}>
                    {text}
                </div>
            </div>
        </div>
    )
}

function FormInput({ label, name, val, onChange, type = "text", placeholder }: any) {
    return (
        <div className="space-y-2">
            <label className="text-[11px] font-bold text-slate-400 tracking-widest uppercase ml-1">{label}</label>
            <input name={name} value={val} type={type} required onChange={onChange} 
            className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder={placeholder} />
        </div>
    )
}

function OutlineCard({ num, title, detail, icon }: any) {
    return (
        <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2rem] hover:bg-blue-600/10 hover:border-blue-500/50 transition-all group relative overflow-hidden">
            <div className="mb-6 h-14 w-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="font-bold text-2xl text-white mb-4">{title}</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">{detail}</p>
            <span className="text-8xl font-bold text-white/5 absolute -bottom-4 -right-2 transition-all group-hover:text-white/10">{num}</span>
        </div>
    )
}
