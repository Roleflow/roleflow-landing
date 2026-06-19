import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoleFlow | #1 AI Client Acquisition System for Instagram",
  description: "Stop losing $10k+/month because of slow Instagram DMs. Automate your lead qualification and booking with our high-ticket AI Setting System.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#0B0F19] text-white antialiased overflow-x-hidden selection:bg-pink-500/30 selection:text-pink-200`}
      >
        {/* Subtle Background Glow - Aligned with Roleflow Brand */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 blur-[120px] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full" />
        </div>
        
        {children}

        {/* BotCommerce Embed */}
        <Script 
          type="text/javascript" 
          src="https://botcommerce.planifyx.com/script/webchat-link.js?code=1774607898271213"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
