import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Campushoster - The Smart School ERP",
  description: "The all-in-one smart campus platform for modern educational institutions. Streamline administration, enhance teaching, and improve student outcomes.",
  keywords: "school management, ERP, education technology, campus management, student information system",
  authors: [{ name: "Campushoster Team" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Campushoster - The Smart School ERP",
    description: "The all-in-one smart campus platform for modern educational institutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campushoster - The Smart School ERP",
    description: "The all-in-one smart campus platform for modern educational institutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
