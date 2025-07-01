import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Campushoster - Smart School ERP | Powered by Verixence",
  description: "The all-in-one smart campus platform for modern educational institutions. Streamline administration, enhance teaching, and improve student outcomes. Powered by Verixence technology.",
  keywords: "school management, ERP, education technology, campus management, student information system, Verixence, smart campus, school software, education ERP, Campushoster",
  authors: [
    { name: "Verixence", url: "https://www.verixence.com/" },
    { name: "DigiMindsGlobal", url: "https://www.digimindsglobal.tech/" }
  ],
  creator: "Verixence",
  publisher: "Verixence",
  robots: "index, follow",
  metadataBase: new URL('https://campushoster.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Campushoster - Smart School ERP | Powered by Verixence",
    description: "Transform your educational institution with our comprehensive School ERP solution. Streamline operations, enhance communication, and improve learning outcomes with Verixence technology.",
    type: "website",
    locale: "en_US",
    url: "https://campushoster.vercel.app",
    siteName: "Campushoster",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Campushoster - Smart School ERP by Verixence',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campushoster - Smart School ERP | Powered by Verixence",
    description: "Transform your educational institution with comprehensive School ERP solution. Powered by Verixence technology.",
    images: ['/og-image.jpg'],
  },
  other: {
    'theme-color': '#7F5AF0',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Campushoster",
  "description": "Smart School ERP platform for modern educational institutions. Powered by Verixence technology.",
  "url": "https://campushoster.vercel.app",
  "provider": {
    "@type": "Organization",
    "name": "Verixence",
    "url": "https://www.verixence.com/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "email": "info@verixence.com"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "4999",
    "description": "Basic plan for schools with up to 500 students"
  },
  "applicationCategory": "EducationApplication",
  "operatingSystem": "Web-based",
  "keywords": "school management, ERP, education technology, campus management, student information system, Verixence",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
