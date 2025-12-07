import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "./structured-data";
import { profile } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.summary,
  keywords: ["포트폴리오", "UX 기획", "웹 기획", "프로덕트 기획"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} - ${profile.role}`,
    description: profile.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
