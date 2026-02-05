"use client";
import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 glass-card">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <MessageSquareCode size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Role<span className="text-blue-500">Flow</span>
          </span>
        </div>

        {/* Links - Desktop */}
        <div className="hidden space-x-8 text-sm font-medium text-gray-400 md:flex">
          <a href="#process" className="transition-colors hover:text-white">How it Works</a>
          <a href="#benefits" className="transition-colors hover:text-white">Benefits</a>
          <a href="#results" className="transition-colors hover:text-white">Results</a>
        </div>

        {/* CTA */}
        <a 
          href="https://calendly.com/your-link" // Replace with your actual link
          className="px-5 py-2 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Book a Demo
        </a>
      </div>
    </motion.nav>
  );
}
