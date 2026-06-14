import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 z-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-new.jpg" alt="RoleFlow Logo" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-white">RoleFlow</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-brandMuted font-semibold">
          <Link href="#infrastructure" className="hover:text-white transition">Infrastructure</Link>
          <Link href="#audit" className="hover:text-white transition">Revenue Audit</Link>
          <Link href="#contact" className="bg-neon-gradient text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
            Book Deployment Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
