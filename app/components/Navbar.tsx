import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-4 md:px-8 max-w-7xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-50">
      
      {/* Left Side: Logo & Brand Name */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* Logo Icon (Using the gradient from your guidelines) */}
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-[0_0_15px_-3px_rgba(236,72,153,0.4)]">
          <span className="font-bold text-lg text-white">R</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Roleflow</span>
      </Link>
      
      {/* Right Side: Links & CTA */}
      <div className="flex items-center">
        <Link 
          href="/login" 
          className="hidden sm:block text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 mr-6"
        >
          Log in
        </Link>
        <Link 
          href="/dashboard" 
          className="text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-full transition-all duration-200 text-white backdrop-blur-sm"
        >
          Access App
        </Link>
      </div>

    </nav>
  );
}
