import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';
import ClickChutney from '@click-chutney/analytics'
import { useEffect } from "react";


const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://contactsushil.me'),
  title: 'Sushil Pandey - Backend Developer',
  description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
  openGraph: {
    url: 'https://contactsushil.me',
    siteName: 'Sushil Pandey Portfolio',
    locale: 'en_US',
    type: 'website',
    title: 'Sushil Pandey - Backend Developer',
    description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
    images: [{
      url: '/logo/sushil_git.jpeg',
      width: 1200,
      height: 630,
      alt: 'Sushil Pandey - Backend Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushil Pandey - Backend Developer',
    description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
    creator: '@sushilpandeyy',
    images: ['/logo/sushil_git.jpeg'],
  },
  keywords: [
    'backend developer',
    'systems programming', 
    'low-level kernels',
    'OpenAFS',
    'GSoC 2025',
    'kernel development',
    'distributed systems',
    'software engineering',
    'full-stack development',
    'performance optimization'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    ClickChutney.init('G-YMBD2AFTFP')
  }, [])
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
  );
}