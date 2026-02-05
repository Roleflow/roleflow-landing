"use client";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20 overflow-hidden text-center">
      {/* Visual Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-4 py-2 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium"
      >
        <Instagram size={16} />
        <span>The #1 AI Setting System for High-Ticket Coaches</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl"
      >
        Stop Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black italic">$10k+/Month</span> <br />
        Due to Slow IG DMs.
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mt-6 text-lg text-gray-400 md:text-xl"
      >
        Automate your lead qualification and appointment booking 24/7. Turn cold DMs into high-ticket sales calls while you sleep.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-4 mt-10 md:flex-row"
      >
        <button className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-500 group">
          Automate My DMs Now
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
        <button className="px-8 py-4 text-lg font-bold text-white transition-all border border-white/10 rounded-xl bg-white/5 hover:bg-white/10">
          See How It Works
        </button>
      </motion.div>

      {/* Social Proof / Trust Signals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-gray-500"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-500" />
          <span>No Lead Left Behind</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-500" />
          <span>Qualifies 24/7/365</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-500" />
          <span>Bypasses Instagram Spam Filters</span>
        </div>
      </motion.div>
    </section>
  );
}
