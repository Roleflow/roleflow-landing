export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-4 overflow-hidden flex flex-col items-center text-center w-full z-10">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 blur-[100px] -z-10 rounded-full" />

      {/* Authority Kicker / Status Badge */}
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-pink-400 font-semibold mb-8">
        <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse" />
        Optimized for Instagram Growth
      </div>

      {/* Main Headline (H1) */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight max-w-4xl mx-auto">
        The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">#1 AI Client Acquisition System</span> <br className="hidden md:block" />
        for Instagram.
      </h1>

      {/* Sub-headline & Pain Point */}
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Qualifies, nurtures, and books high-ticket clients on autopilot directly in your DMs. Scale your revenue without relying on human setters who get tired, lose motivation, and disappear.
      </p>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10">
        <button className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)]">
          Try Roleflow Free
        </button>
        <button className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors duration-300">
          Book a Demo
        </button>
      </div>

      {/* Micro-copy / Social Proof */}
      <div className="flex flex-col items-center gap-3 text-sm text-gray-500">
        <div className="flex -space-x-3">
          <img className="w-8 h-8 rounded-full border-2 border-[#0B0F19]" src="https://i.pravatar.cc/100?img=1" alt="User" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B0F19]" src="https://i.pravatar.cc/100?img=2" alt="User" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B0F19]" src="https://i.pravatar.cc/100?img=3" alt="User" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B0F19]" src="https://i.pravatar.cc/100?img=4" alt="User" />
          <img className="w-8 h-8 rounded-full border-2 border-[#0B0F19]" src="https://i.pravatar.cc/100?img=5" alt="User" />
        </div>
        <span>Over <strong className="text-gray-300">250+ creators</strong> upgraded this week</span>
      </div>

    </section>
  );
}
