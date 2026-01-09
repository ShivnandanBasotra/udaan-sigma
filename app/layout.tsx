import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced SEO metadata with targeted keywords
export const metadata: Metadata = {
  metadataBase: new URL("https://www.udaansigma.com"),
  title: {
    default: "Udaan Sigma - Best IIT JEE & NEET Coaching in Jammu, Vijaypur | Top Coaching Institute",
    template: "%s | Udaan Sigma Jammu"
  },
  description: "Udaan Sigma is the leading IIT JEE, NEET, and Olympiad coaching institute in Jammu & Vijaypur. Expert faculty, proven results, scholarships available. Join 1500+ successful students. Enroll now!",
  keywords: [
    "udaan sigma",
    "udaan sigma scholarship test",
    "udaansigma",
    "udaan sigma jammu",
    "udaan sigma vijaypur",
    "udaan sigma coaching",
    "udaan sigma jee coaching",
    "iit jee coaching jammu",
    "neet coaching jammu",
    "best coaching institute jammu",
    "iit coaching vijaypur",
    "neet coaching vijaypur",
    "olympiad coaching jammu",
    "foundation classes jammu",
    "jee advanced coaching jammu",
    "medical coaching jammu",
    "engineering entrance coaching jammu"
  ],
  authors: [{ name: "Udaan Sigma" }],
  creator: "Udaan Sigma",
  publisher: "Udaan Sigma",
  alternates: {
    canonical: "https://www.udaansigma.com"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.udaansigma.com",
    siteName: "Udaan Sigma",
    title: "Udaan Sigma - Best IIT JEE & NEET Coaching in Jammu, Vijaypur",
    description: "Leading coaching institute in Jammu & Vijaypur for IIT-JEE, NEET, Olympiad preparation. Expert faculty, 95% success rate, scholarships available.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Udaan Sigma Coaching Institute Jammu"
      }
    ]
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Udaan Sigma",
              "alternateName": ["UdaanSigma", "Udaan Sigma Coaching"],
              "url": "https://www.udaansigma.com",
              "logo": "https://www.udaansigma.com/logo.png",
              "description": "Premier coaching institute for IIT-JEE, NEET, Olympiad, and Foundation courses in Jammu and Vijaypur",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Arvind Ghosh Hr. Sec. School",
                "addressLocality": "Vijaypur",
                "addressRegion": "Jammu and Kashmir",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7780966332",
                "contactType": "Admissions",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.udaansigma.in",
                "https://wa.me/919186162194"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}