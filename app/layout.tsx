import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoleFlow | Scale Your IG Client Acquisition with AI",
  description: "Stop losing $10k+/month because of slow Instagram DMs. Automate your lead qualification and booking with our high-ticket AI Setting System.",
  icons: {
    icon: "/favicon.ico", // Make sure to add a favicon later
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
        {/* Subtle Background Glow for that 'Premium' feel */}
        <div className="fixed -z-10 h-full w-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 blur-[120px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
