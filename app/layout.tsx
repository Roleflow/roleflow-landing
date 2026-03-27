import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // 1. Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoleFlow | Scale Your IG Client Acquisition with AI",
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
        className={`${inter.className} bg-[#030712] text-white antialiased overflow-x-hidden`}
      >
        {/* Subtle Background Glow */}
        <div className="fixed -z-10 h-full w-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 blur-[120px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>
        
        {children}

        {/* 2. BotCommerce Webchat Script */}
        <Script 
          src="https://botcommerce.planifyx.com/script/webchat-link.js?code=1774607898271213" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
