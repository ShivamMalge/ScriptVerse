import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "ScriptVerse | Freelancers",
  description: "A freelance Freelancers specializing in web development, game-based UIs, and custom ATS tools",
  keywords: "web development, game UI, applicant tracking system, creative tech, digital experiences, ScriptVerse",
  authors: [{ name: "ScriptVerse Team" }],
  creator: "ScriptVerse",
  publisher: "ScriptVerse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scriptverse.tech"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ScriptVerse | Freelancers",
    description: "Building digital experiences from the future",
    url: "https://scriptverse.tech",
    siteName: "ScriptVerse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScriptVerse - Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScriptVerse | Freelancers",
    description: "Building digital experiences from the future",
    creator: "@scriptverse",
    images: ["/twitter-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <main className="flex-grow">{children}</main>
          </Suspense>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
