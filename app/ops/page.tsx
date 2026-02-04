'use client';
import { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Target, 
  Send, 
  Video, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp,
  Instagram,
  Clock,
  ArrowUpRight,
  Link2,
  RefreshCw,
  Search,
  Users,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { createClient } from '@supabase/supabase-js';

// 1. Initialize Neural Core
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function OpsHub() {
  const [bookingLink, setBookingLink] = useState('https://calendly.com/roleflow/audit');
  const [currentDate, setCurrentDate] = useState(new Date());

  // 2. TACTICAL METRICS (Neural Tracking)
  const stats = {
    extracted: 142,
    outreached: 54,
    replied: 12,
    posts: 1,
    velocity: "+12.4%"
  };

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-12 uppercase font-sans selection:bg-orange-500 selection:text-white pb-32">
      
      {/* --- SECTION 1: OPS COMMAND HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl gap-6">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 rounded-3xl bg-slate-900 flex items-center justify-center text-white shadow-2xl">
             <Target size={28} className="text-orange-500" />
          </div>
          <div>
            <h2 className="font-black text-2xl text-slate-900 tracking-tighter">OPERATIONS_HUB</h2>
            <p className="text-[10px] font-black text-indigo-600 tracking-[0.3em] flex items-center gap-2">
               <Activity size={10} className="animate-pulse" /> VELOCITY_TRACKING: ACTIVE
            </p>
          </div>
        </div>

        {/* BOOKING LINK MANAGEMENT (IMAGE 101/105 INTEGRATION) */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-3 rounded-2xl w-full md:w-auto shadow-inner">
           <div className="p-2 bg-white rounded-lg border border-slate-100"><Link2 size={16} className="text-indigo-600" /></div>
           <input 
              value={bookingLink}
              onChange={(e) => setBookingLink(e.target.value)}
              className="bg-transparent outline-none text-[11px] font-black text-slate-900 min-w-[200px] uppercase tracking-widest"
              placeholder="PASTE_BOOKING_LINK..."
           />
           <button onClick={() => alert("DISPATCH_LINK_UPDATED")} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[9px] font-black tracking-widest hover:bg-black transition shadow-lg">SAVE</button>
        </div>
      </header>

      {/* --- SECTION 2: MACRO METRICS (THE HUNT) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <OpsStat label="ICP_EXTRACTED" val={stats.extracted} sub="Source: Scraper Agent" color="text-indigo-600" />
        <OpsStat label="OUTREACH_SENT" val={stats.outreached} sub="Source: Outreach Agent" color="text-orange-500" />
        <OpsStat label="REPLIES_RECEIVED" val={stats.replied} sub="Targeting: High-Ticket" color="text-emerald-500" />
        <div className="bg-[#0F172A] p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
           <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-2">NEURAL_VELOCITY</p>
           <p className="text-4xl font-black text-white tracking-tighter">{stats.velocity}</p>
           <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[65%] h-full bg-gradient-to-r from-indigo-500 to-orange-500"></div>
           </div>
        </div>
      </section>

      {/* --- SECTION 3: THE PROGRESS CALENDAR (CLINICAL SONAR STYLE) --- */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        
        <div className="xl:col-span-2 bg-white rounded-[4rem] border border-slate-100 shadow-2xl p-10 lg:p-14">
           <div className="flex justify-between items-center mb-12">
              <div className="space-y-1">
                 <h3 className="text-2xl font-black text-slate-950 tracking-tighter">PROGRESS_CALENDAR</h3>
                 <p className="text-[10px] font-black text-slate-400 tracking-widest">FEBRUARY 2026</p>
              </div>
              <div className="flex gap-2">
                 <button className="p-3 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition"><ChevronLeft size={16}/></button>
                 <button className="p-3 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition"><ChevronRight size={16}/></button>
              </div>
           </div>

           {/* CALENDAR GRID */}
           <div className="grid grid-cols-7 gap-4 lg:gap-6">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
                <div key={d} className="text-center text-[10px] font-black text-slate-300 tracking-widest pb-4">{d}</div>
              ))}
              {[...Array(28)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-[1.5rem] md:rounded-[2rem] border-2 flex flex-col items-center justify-center gap-1.5 transition-all group relative cursor-pointer ${
                    i + 1 === 4 ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl scale-110' : 'bg-white border-slate-50 text-slate-300 hover:border-indigo-100 hover:bg-indigo-50/20'
                }`}>
                   <span className={`text-xs font-black ${i + 1 === 4 ? 'text-white' : 'text-slate-900'}`}>{i + 1}</span>
                   
                   {/* PULSE INDICATORS FOR DAY ACTIVITY */}
                   <div className="flex gap-1">
                      <div className={`h-1 w-1 rounded-full ${i % 3 === 0 ? 'bg-orange-500' : 'bg-transparent'}`}></div>
                      <div className={`h-1 w-1 rounded-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                   </div>

                   {/* HOVER TOOLTIP */}
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                      <div className="bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-white/10 min-w-[160px]">
                         <p className="text-[10px] font-black text-indigo-400 mb-2 border-b border-white/5 pb-2 uppercase">Day_Protocol_Log</p>
                         <div className="space-y-1.5">
                            <div className="flex justify-between text-[9px] font-bold"><span>SCRAPED:</span> <span>50</span></div>
                            <div className="flex justify-between text-[9px] font-bold"><span>SENT:</span> <span>20</span></div>
                            <div className="flex justify-between text-[9px] font-bold"><span>POSTS:</span> <span>1</span></div>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* --- PERFORMANCE ANALYTICS SIDEBAR --- */}
        <div className="space-y-8">
           {/* SOCIAL PRESENCE TRACKER */}
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl space-y-8 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center justify-between">
                    <h3 className="font-black text-[10px] text-slate-400 uppercase tracking-widest">Authority_Consistency</h3>
                    <Instagram size={16} className="text-pink-500" />
                 </div>
                 <div className="flex items-end gap-3">
                    <p className="text-7xl font-black text-slate-950 tracking-tighter leading-none">100<span className="text-emerald-500">%</span></p>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[9px] font-black mb-2 uppercase">Perfect_Streak</span>
                 </div>
                 <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                    Social Posting Agent is meeting all daily quotas for the current cycle.
                 </p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-32 w-32 bg-slate-50 rounded-full blur-3xl"></div>
           </div>

           {/* TOTAL REACH AUDIT */}
           <div className="bg-[#0F172A] p-10 rounded-[3.5rem] shadow-2xl text-white space-y-6 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                 <div className="flex items-center gap-2">
                    <BarChart3 size={16} className="text-indigo-400" />
                    <h3 className="font-black text-[10px] text-indigo-400 uppercase tracking-widest uppercase">Cumulative_Outreach</h3>
                 </div>
                 <p className="text-5xl font-black text-white tracking-tighter">1,402</p>
                 <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                       <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                       <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest uppercase">Target: 2,500</span>
                    </div>
                 </div>
              </div>
              <div className="absolute top-0 right-0 opacity-10 p-10 translate-x-10 -translate-y-10">
                 <Target size={180} />
              </div>
           </div>
        </div>

      </div>

    </div>
  );
}

// ATOMIC COMPONENTS
function OpsStat({ label, val, sub, color }: any) {
    return (
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{label}</p>
            <p className={`text-5xl font-black tracking-tighter uppercase ${color}`}>{val}</p>
            <p className="text-[9px] font-bold text-slate-300 mt-4 uppercase tracking-widest">{sub}</p>
        </div>
    )
}
