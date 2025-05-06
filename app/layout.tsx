import { TailwindSizeIndicator } from "@/components/dev/tailwind-size-indicator";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin - Fullstack Developer",
  description:
    "I'm a developer based in Poland, passionate about user experience. My primary tools of choice include: TypeScript, Next.js, Tailwind and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${interSans.variable} ${geistMono.variable} antialiased font-sans`,
          "before:fixed before:inset-0  before:-z-1 grid-gradient",
        )}
      >
        {children}
        {/* DEV */}
        <TailwindSizeIndicator />
      </body>
    </html>
  );
}
// color-mix(in hsl, canvasText, transparent 80%)
