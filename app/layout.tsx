import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RAM Automation | AI Automation Agency",
    template: "%s | RAM Automation",
  },
  description:
    "RAM Automation builds AI agents, WhatsApp chatbots, invoice OCR pipelines, social media workflows and stock market analysis tools that automate your business.",
  keywords: [
    "AI automation",
    "n8n automation",
    "WhatsApp chatbot",
    "invoice OCR automation",
    "social media automation",
    "AI stock market analysis",
    "workflow automation agency",
  ],
  openGraph: {
    title: "RAM Automation | AI Automation Agency",
    description:
      "AI agents, chatbots and workflow automation for businesses that want the busywork off their plate.",
    siteName: "RAM Automation",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
