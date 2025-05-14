import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyan Lin Htut | Full Stack Developer",
  description: "Experienced Ruby on Rails Developer with over 6 years of expertise in building scalable web applications, RESTful APIs, and cloud-based solutions.",
  keywords: "Ruby on Rails, Full Stack Developer, Ruby on Rails Developer, Web Development, JavaScript, React, PostgreSQL, AWS",
  authors: [{ name: "Nyan Lin Htut" }],
  creator: "Nyan Lin Htut",
  publisher: "Nyan Lin Htut",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://next-portfolio-xi-murex.vercel.app/",
    siteName: "Nyan Lin Htut Portfolio",
    title: "Nyan Lin Htut | Full Stack Developer",
    description: "Full Stack Developer specializing in Ruby on Rails and modern web technologies",
    images: [
      {
        url: "/og-image.png", // Add your OG image in public folder
        width: 1200,
        height: 630,
        alt: "Nyan Lin Htut Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyan Lin Htut | Full Stack Developer",
    description: "Full Stack Developer specializing in Ruby on Rails and modern web technologies",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add if you have Google Search Console
  },
  alternates: {
    canonical: "https://next-portfolio-xi-murex.vercel.app/"
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-background text-textPrimary`}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
